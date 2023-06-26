import { AfterContentInit, ChangeDetectorRef, ContentChildren, Directive, ElementRef, forwardRef, inject, Input, OnDestroy, Output, QueryList } from '@angular/core';
import { ActiveDescendantKeyManager, Highlightable, ListKeyManagerOption } from '@angular/cdk/a11y';
import { A, DOWN_ARROW, END, ENTER, hasModifierKey, HOME, LEFT_ARROW, RIGHT_ARROW, SPACE, UP_ARROW } from '@angular/cdk/keycodes';
import { BooleanInput, coerceArray, coerceBooleanProperty } from '@angular/cdk/coercion';
import { SelectionModel } from '@angular/cdk/collections';
import { defer, merge, Observable, Subject } from 'rxjs';
import { filter, map, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Directionality } from '@angular/cdk/bidi';
let nextId = 0;
const dMode = true;
class ListboxSelectionModel<T> extends SelectionModel<T> {
  constructor(
    public multiple = false,
    initiallySelectedValues?: T[],
    emitChanges = true,
    compareWith?: (o1: T, o2: T) => boolean,
  ) {
    super(true, initiallySelectedValues, emitChanges, compareWith);
  }
  override isMultipleSelection(): boolean {
    return this.multiple;
  }
  override select(...values: T[]) {
    if (this.multiple) {
      return super.select(...values);
    } else {
      return super.setSelection(...values);
    }
  }
}
@Directive({
  selector: '[appOption]',
  exportAs: 'appOption',
  host: {
    role: 'option',
    class: 'app-option',
    '[id]': 'id',
    '[attr.aria-selected]': 'isSelected()',
    '[attr.tabindex]': '_getTabIndex()',
    '[attr.aria-disabled]': 'disabled',
    '[class.app-option-active]': 'isActive()',
    '(click)': '_clicked.next($event)',
    '(focus)': '_handleFocus()',
  },
})
export class AppOption<T = unknown> implements ListKeyManagerOption, Highlightable, OnDestroy {
  @Input()
  get id() {
    return this._id || this._generatedId;
  }
  set id(value) {
    this._id = value;
  }
  private _id: string;
  private _generatedId = `app-option-${nextId++}`;
  @Input('appOption') value: T;
  @Input('appOptionTypeaheadLabel') typeaheadLabel: string;
  @Input('appOptionDisabled')
  get disabled(): boolean {
    return this.listbox.disabled || this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled: boolean = false;
  @Input('tabindex')
  get enabledTabIndex() {
    return this._enabledTabIndex === undefined ? this.listbox.enabledTabIndex : this._enabledTabIndex;
  }
  set enabledTabIndex(value) {
    this._enabledTabIndex = value;
  }
  private _enabledTabIndex?: number | null;
  readonly element: HTMLElement = inject(ElementRef).nativeElement;
  protected readonly listbox: AppListbox<T> = inject(AppListbox);
  protected destroyed = new Subject<void>();
  readonly _clicked = new Subject<MouseEvent>();
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
  isSelected() {
    return this.listbox.isSelected(this);
  }
  isActive() {
    return this.listbox.isActive(this);
  }
  toggle() {
    this.listbox.toggle(this);
  }
  select() {
    this.listbox.select(this);
  }
  deselect() {
    this.listbox.deselect(this);
  }
  focus() {
    this.element.focus();
  }
  getLabel() {
    return (this.typeaheadLabel ?? this.element.textContent?.trim()) || '';
  }
  setActiveStyles() {}
  setInactiveStyles() {}
  protected _handleFocus() {
    if (this.listbox.useActiveDescendant) {
      this.listbox._setActiveOption(this);
      this.listbox.focus();
    }
  }
  protected _getTabIndex() {
    if (this.listbox.useActiveDescendant || this.disabled) {
      return -1;
    }
    return this.isActive() ? this.enabledTabIndex : -1;
  }
}
@Directive({
  selector: '[appListbox]',
  exportAs: 'appListbox',
  host: {
    role: 'listbox',
    class: 'app-listbox',
    '[id]': 'id',
    '[attr.tabindex]': '_getTabIndex()',
    '[attr.aria-disabled]': 'disabled',
    '[attr.aria-multiselectable]': 'multiple',
    '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
    '[attr.aria-orientation]': 'orientation',
    '(focus)': '_handleFocus()',
    '(keydown)': '_handleKeydown($event)',
    '(focusout)': '_handleFocusOut($event)',
    '(focusin)': '_handleFocusIn()',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppListbox),
      multi: true,
    },
  ],
})
export class AppListbox<T = unknown> implements AfterContentInit, OnDestroy, ControlValueAccessor {
  @Input()
  get id() {
    return this._id || this._generatedId;
  }
  set id(value) {
    this._id = value;
  }
  private _id: string;
  private _generatedId = `listbox-${nextId++}`;
  @Input('tabindex')
  get enabledTabIndex() {
    return this._enabledTabIndex === undefined ? 0 : this._enabledTabIndex;
  }
  set enabledTabIndex(value) {
    this._enabledTabIndex = value;
  }
  private _enabledTabIndex?: number | null;
  @Input('listboxValue')
  get value(): readonly T[] {
    return this._invalid ? [] : this.selectionModel.selected;
  }
  set value(value: readonly T[]) {
    this._setSelection(value);
  }
  @Input('listboxMultiple')
  get multiple(): boolean {
    return this.selectionModel.multiple;
  }
  set multiple(value: BooleanInput) {
    this.selectionModel.multiple = coerceBooleanProperty(value);
    if (this.options) {
      this._updateInternalValue();
    }
  }
  @Input('listboxDisabled')
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled: boolean = false;
  @Input('listboxUseActiveDescendant')
  get useActiveDescendant(): boolean {
    return this._useActiveDescendant;
  }
  set useActiveDescendant(shouldUseActiveDescendant: BooleanInput) {
    this._useActiveDescendant = coerceBooleanProperty(shouldUseActiveDescendant);
  }
  private _useActiveDescendant: boolean = false;
  @Input('listboxOrientation')
  get orientation() {
    return this._orientation;
  }
  set orientation(value: 'horizontal' | 'vertical') {
    this._orientation = value === 'horizontal' ? 'horizontal' : 'vertical';
    if (value === 'horizontal') {
      this.listKeyManager?.withHorizontalOrientation(this._dir?.value || 'ltr');
    } else {
      this.listKeyManager?.withVerticalOrientation();
    }
  }
  private _orientation: 'horizontal' | 'vertical' = 'vertical';
  @Input('listboxCompareWith')
  get compareWith(): undefined | ((o1: T, o2: T) => boolean) {
    return this.selectionModel.compareWith;
  }
  set compareWith(fn: undefined | ((o1: T, o2: T) => boolean)) {
    this.selectionModel.compareWith = fn;
  }
  @Input('listboxNavigationWrapDisabled')
  get navigationWrapDisabled() {
    return this._navigationWrapDisabled;
  }
  set navigationWrapDisabled(wrap: BooleanInput) {
    this._navigationWrapDisabled = coerceBooleanProperty(wrap);
    this.listKeyManager?.withWrap(!this._navigationWrapDisabled);
  }
  private _navigationWrapDisabled = false;
  @Input('listboxNavigatesDisabledOptions')
  get navigateDisabledOptions() {
    return this._navigateDisabledOptions;
  }
  set navigateDisabledOptions(skip: BooleanInput) {
    this._navigateDisabledOptions = coerceBooleanProperty(skip);
    this.listKeyManager?.skipPredicate(this._navigateDisabledOptions ? this._skipNonePredicate : this._skipDisabledPredicate);
  }
  private _navigateDisabledOptions = false;
  @Output('listboxValueChange') readonly valueChange = new Subject<ListboxValueChangeEvent<T>>();
  @ContentChildren(AppOption, { descendants: true })
  protected options: QueryList<AppOption<T>>;
  protected selectionModel = new ListboxSelectionModel<T>();
  protected listKeyManager: ActiveDescendantKeyManager<AppOption<T>>;
  protected readonly destroyed = new Subject<void>();
  protected readonly element: HTMLElement = inject(ElementRef).nativeElement;
  protected readonly changeDetectorRef = inject(ChangeDetectorRef);
  private _invalid = false;
  private _lastTriggered: AppOption<T> | null = null;
  private _onTouched = () => {};
  private _onChange: (value: readonly T[]) => void = () => {};
  private _optionClicked = defer(() =>
    (this.options.changes as Observable<AppOption<T>[]>).pipe(
      startWith(this.options),
      switchMap((options) => merge(...options.map((option) => option._clicked.pipe(map((event) => ({ option, event })))))),
    ),
  );
  private readonly _dir = inject(Directionality, { optional: true });
  private readonly _skipDisabledPredicate = (option: AppOption<T>) => option.disabled;
  private readonly _skipNonePredicate = () => false;
  private _hasFocus = false;
  get selectionM() {
    return this.selectionModel;
  }
  ngAfterContentInit() {
    if (typeof dMode === 'undefined' || dMode) {
      this._verifyNoOptionValueCollisions();
      this._verifyOptionValues();
    }
    this._initKeyManager();
    merge(this.selectionModel.changed, this.options.changes)
      .pipe(startWith(null), takeUntil(this.destroyed))
      .subscribe(() => this._updateInternalValue());
    this._optionClicked
      .pipe(
        filter(({ option }) => !option.disabled),
        takeUntil(this.destroyed),
      )
      .subscribe(({ option, event }) => this._handleOptionClicked(option, event));
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
  toggle(option: AppOption<T>) {
    this.toggleValue(option.value);
  }
  toggleValue(value: T) {
    if (this._invalid) {
      this.selectionModel.clear(false);
    }
    this.selectionModel.toggle(value);
  }
  select(option: AppOption<T>) {
    this.selectValue(option.value);
  }
  selectValue(value: T) {
    if (this._invalid) {
      this.selectionModel.clear(false);
    }
    this.selectionModel.select(value);
  }
  deselect(option: AppOption<T>) {
    this.deselectValue(option.value);
  }
  deselectValue(value: T) {
    if (this._invalid) {
      this.selectionModel.clear(false);
    }
    this.selectionModel.deselect(value);
  }
  setAllSelected(isSelected: boolean) {
    if (!isSelected) {
      this.selectionModel.clear();
    } else {
      if (this._invalid) {
        this.selectionModel.clear(false);
      }
      this.selectionModel.select(...this.options.map((option) => option.value));
    }
  }
  isSelected(option: AppOption<T>) {
    return this.isValueSelected(option.value);
  }
  isActive(option: AppOption<T>): boolean {
    return !!(this.listKeyManager?.activeItem === option);
  }
  isValueSelected(value: T) {
    if (this._invalid) {
      return false;
    }
    return this.selectionModel.isSelected(value);
  }
  registerOnChange(fn: (value: readonly T[]) => void): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }
  writeValue(value: readonly T[]): void {
    this._setSelection(value);
    this._verifyOptionValues();
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  focus() {
    this.element.focus();
  }
  protected triggerOption(option: AppOption<T> | null) {
    if (option && !option.disabled) {
      this._lastTriggered = option;
      const changed = this.multiple ? this.selectionModel.toggle(option.value) : this.selectionModel.select(option.value);
      if (changed) {
        this._onChange(this.value);
        this.valueChange.next({
          value: this.value,
          listbox: this,
          option: option,
        });
      }
    }
  }
  protected triggerRange(trigger: AppOption<T> | null, from: number, to: number, on: boolean) {
    if (this.disabled || (trigger && trigger.disabled)) {
      return;
    }
    this._lastTriggered = trigger;
    const isEqual = this.compareWith ?? Object.is;
    const updateValues = [...this.options]
      .slice(Math.max(0, Math.min(from, to)), Math.min(this.options.length, Math.max(from, to) + 1))
      .filter((option) => !option.disabled)
      .map((option) => option.value);
    const selected = [...this.value];
    for (const updateValue of updateValues) {
      const selectedIndex = selected.findIndex((selectedValue) => isEqual(selectedValue, updateValue));
      if (on && selectedIndex === -1) {
        selected.push(updateValue);
      } else if (!on && selectedIndex !== -1) {
        selected.splice(selectedIndex, 1);
      }
    }
    const changed = this.selectionModel.setSelection(...selected);
    if (changed) {
      this._onChange(this.value);
      this.valueChange.next({
        value: this.value,
        listbox: this,
        option: trigger,
      });
    }
  }
  _setActiveOption(option: AppOption<T>) {
    this.listKeyManager.setActiveItem(option);
  }
  protected _handleFocus() {
    if (!this.useActiveDescendant) {
      if (this.selectionModel.selected.length > 0) {
        this._setNextFocusToSelectedOption();
      } else {
        this.listKeyManager.setNextItemActive();
      }
      this._focusActiveOption();
    }
  }
  protected _handleKeydown(event: KeyboardEvent) {
    if (this._disabled) {
      return;
    }
    const { keyCode } = event;
    const previousActiveIndex = this.listKeyManager.activeItemIndex;
    const ctrlKeys = ['ctrlKey', 'metaKey'] as const;
    if (this.multiple && keyCode === A && hasModifierKey(event, ...ctrlKeys)) {
      this.triggerRange(null, 0, this.options.length - 1, this.options.length !== this.value.length);
      event.preventDefault();
      return;
    }
    if (this.multiple && (keyCode === SPACE || keyCode === ENTER) && hasModifierKey(event, 'shiftKey')) {
      if (this.listKeyManager.activeItem && this.listKeyManager.activeItemIndex != null) {
        this.triggerRange(
          this.listKeyManager.activeItem,
          this._getLastTriggeredIndex() ?? this.listKeyManager.activeItemIndex,
          this.listKeyManager.activeItemIndex,
          !this.listKeyManager.activeItem.isSelected(),
        );
      }
      event.preventDefault();
      return;
    }
    if (this.multiple && keyCode === HOME && hasModifierKey(event, ...ctrlKeys) && hasModifierKey(event, 'shiftKey')) {
      const trigger = this.listKeyManager.activeItem;
      if (trigger) {
        const from = this.listKeyManager.activeItemIndex!;
        this.listKeyManager.setFirstItemActive();
        this.triggerRange(trigger, from, this.listKeyManager.activeItemIndex!, !trigger.isSelected());
      }
      event.preventDefault();
      return;
    }
    if (this.multiple && keyCode === END && hasModifierKey(event, ...ctrlKeys) && hasModifierKey(event, 'shiftKey')) {
      const trigger = this.listKeyManager.activeItem;
      if (trigger) {
        const from = this.listKeyManager.activeItemIndex!;
        this.listKeyManager.setLastItemActive();
        this.triggerRange(trigger, from, this.listKeyManager.activeItemIndex!, !trigger.isSelected());
      }
      event.preventDefault();
      return;
    }
    if (keyCode === SPACE || keyCode === ENTER) {
      this.triggerOption(this.listKeyManager.activeItem);
      event.preventDefault();
      return;
    }
    const isNavKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW || keyCode === HOME || keyCode === END;
    this.listKeyManager.onKeydown(event);
    if (isNavKey && event.shiftKey && previousActiveIndex !== this.listKeyManager.activeItemIndex) {
      this.triggerOption(this.listKeyManager.activeItem);
    }
  }
  protected _handleFocusIn() {
    this._hasFocus = true;
  }
  protected _handleFocusOut(event: FocusEvent) {
    const otherElement = event.relatedTarget as Element;
    if (this.element !== otherElement && !this.element.contains(otherElement)) {
      this._onTouched();
      this._hasFocus = false;
      this._setNextFocusToSelectedOption();
    }
  }
  protected _getAriaActiveDescendant(): string | null | undefined {
    return this._useActiveDescendant ? this.listKeyManager?.activeItem?.id : null;
  }
  protected _getTabIndex() {
    if (this.disabled) {
      return -1;
    }
    return this.useActiveDescendant || !this.listKeyManager.activeItem ? this.enabledTabIndex : -1;
  }
  private _initKeyManager() {
    this.listKeyManager = new ActiveDescendantKeyManager(this.options)
      .withWrap(!this._navigationWrapDisabled)
      .withTypeAhead()
      .withHomeAndEnd()
      .withAllowedModifierKeys(['shiftKey'])
      .skipPredicate(this._navigateDisabledOptions ? this._skipNonePredicate : this._skipDisabledPredicate);
    if (this.orientation === 'vertical') {
      this.listKeyManager.withVerticalOrientation();
    } else {
      this.listKeyManager.withHorizontalOrientation(this._dir?.value || 'ltr');
    }
    if (this.selectionModel.selected.length) {
      Promise.resolve().then(() => this._setNextFocusToSelectedOption());
    }
    this.listKeyManager.change.subscribe(() => this._focusActiveOption());
  }
  private _focusActiveOption() {
    if (!this.useActiveDescendant) {
      this.listKeyManager.activeItem?.focus();
    }
    this.changeDetectorRef.markForCheck();
  }
  private _setSelection(value: readonly T[]) {
    if (this._invalid) {
      this.selectionModel.clear(false);
    }
    this.selectionModel.setSelection(...this._coerceValue(value));
    if (!this._hasFocus) {
      this._setNextFocusToSelectedOption();
    }
  }
  private _setNextFocusToSelectedOption() {
    const selected = this.options?.find((option) => option.isSelected());
    if (selected) {
      this.listKeyManager.updateActiveItem(selected);
    }
  }
  private _updateInternalValue() {
    const indexCache = new Map<T, number>();
    this.selectionModel.sort((a: T, b: T) => {
      const aIndex = this._getIndexForValue(indexCache, a);
      const bIndex = this._getIndexForValue(indexCache, b);
      return aIndex - bIndex;
    });
    const selected = this.selectionModel.selected;
    this._invalid = (!this.multiple && selected.length > 1) || !!this._getInvalidOptionValues(selected).length;
    this.changeDetectorRef.markForCheck();
  }
  private _getIndexForValue(cache: Map<T, number>, value: T) {
    const isEqual = this.compareWith || Object.is;
    if (!cache.has(value)) {
      let index = -1;
      for (let i = 0; i < this.options.length; i++) {
        if (isEqual(value, this.options.get(i)!.value)) {
          index = i;
          break;
        }
      }
      cache.set(value, index);
    }
    return cache.get(value)!;
  }
  private _handleOptionClicked(option: AppOption<T>, event: MouseEvent) {
    event.preventDefault();
    this.listKeyManager.setActiveItem(option);
    if (event.shiftKey && this.multiple) {
      this.triggerRange(option, this._getLastTriggeredIndex() ?? this.listKeyManager.activeItemIndex!, this.listKeyManager.activeItemIndex!, !option.isSelected());
    } else {
      this.triggerOption(option);
    }
  }
  private _verifyNoOptionValueCollisions() {
    this.options.changes.pipe(startWith(this.options), takeUntil(this.destroyed)).subscribe(() => {
      const isEqual = this.compareWith ?? Object.is;
      for (let i = 0; i < this.options.length; i++) {
        const option = this.options.get(i)!;
        let duplicate: AppOption<T> | null = null;
        for (let j = i + 1; j < this.options.length; j++) {
          const other = this.options.get(j)!;
          if (isEqual(option.value, other.value)) {
            duplicate = other;
            break;
          }
        }
        if (duplicate) {
          if (this.compareWith) {
            console.warn(`Found multiple AppOption representing the same value under the given compareWith function`, {
              option1: option.element,
              option2: duplicate.element,
              compareWith: this.compareWith,
            });
          } else {
            console.warn(`Found multiple AppOption with the same value`, {
              option1: option.element,
              option2: duplicate.element,
            });
          }
          return;
        }
      }
    });
  }
  private _verifyOptionValues() {
    if (this.options && (typeof dMode === 'undefined' || dMode)) {
      const selected = this.selectionModel.selected;
      const invalidValues = this._getInvalidOptionValues(selected);
      if (!this.multiple && selected.length > 1) {
        throw Error('Listbox cannot have more than one selected value in multi-selection mode.');
      }
      if (invalidValues.length) {
        throw Error('Listbox has selected values that do not match any of its options.');
      }
    }
  }
  private _coerceValue(value: readonly T[]) {
    return value == null ? [] : coerceArray(value);
  }
  private _getInvalidOptionValues(values: readonly T[]) {
    const isEqual = this.compareWith || Object.is;
    const validValues = (this.options || []).map((option) => option.value);
    return values.filter((value) => !validValues.some((validValue) => isEqual(value, validValue)));
  }
  private _getLastTriggeredIndex() {
    const index = this.options.toArray().indexOf(this._lastTriggered!);
    return index === -1 ? null : index;
  }
}
export interface ListboxValueChangeEvent<T> {
  readonly value: readonly T[];
  readonly listbox: AppListbox<T>;
  readonly option: AppOption<T> | null;
}
