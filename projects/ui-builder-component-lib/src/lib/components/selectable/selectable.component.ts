import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOption } from '../../model/select-option';
@Component({
  selector: 'lib-selectable',
  templateUrl: './selectable.component.html',
  styleUrls: ['./selectable.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectableComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectableComponent implements ControlValueAccessor, OnChanges {
  @Input() options: SelectOption<string>[];
  @Input() singleSelectionOnly: boolean;
  @Input() maxSelectionPossible: number = 0;
  @Output() maxSelectionsReached: EventEmitter<boolean> = new EventEmitter();
  public disableSelection: boolean = false;
  private onChange: (value: string | string[]) => void = () => {};
  private onTouched: () => void = () => {};
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['singleSelectionOnly']?.isFirstChange()) {
      this.disableSelection = false;
      this.options.forEach((option) => (option.selected = false));
      this.onChange([]);
    }
  }
  writeValue(values: string[]): void {
    if (typeof values === 'string') {
      this.onSelection(values);
    } else if (values) {
      values.map((value) => this.onSelection(value));
    } else {
      this.options.map((option) => (option.selected = false));
    }
    this.cdr.detectChanges();
  }
  registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {}
  public onSelection(value: string): void {
    const selectedValue = this.options.find((option) => option.value == value);
    if (selectedValue) this.onToggle(selectedValue);
  }
  public onToggle(selectedOption: SelectOption<string>): void {
    if (this.disableSelection && !selectedOption.selected) return;
    if (this.singleSelectionOnly) {
      this.options.forEach((option) => (option.selected = false));
    }
    selectedOption.selected = !selectedOption.selected;
    if (this.singleSelectionOnly) {
      this.onChange(selectedOption.value);
    } else {
      const arr = this.options.filter((option) => option.selected);
      if (this.maxSelectionPossible && arr.length >= this.maxSelectionPossible) {
        this.disableSelection = true;
        this.maxSelectionsReached.emit(true);
      } else {
        this.disableSelection = false;
        this.maxSelectionsReached.emit(false);
      }
      this.onChange(arr.map((option) => option.value));
    }
  }
}
