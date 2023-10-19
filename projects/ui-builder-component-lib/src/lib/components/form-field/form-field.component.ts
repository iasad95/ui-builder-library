import { DecimalPipe } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { SafeHtml } from '@angular/platform-browser';
import moment from 'moment';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormFieldType } from '../../enums/form-field-type';
import { TooltipDirectionPreference } from '../../enums/tooltip-direction-preference';
import { SelectOption } from '../../model/select-option';
import { CommonOperations } from '../../operations/operations';
@Component({
  selector: 'lib-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @ViewChild('matSelect') matSelect: MatSelect;
  @ViewChild('textInput') textInput: ElementRef;
  public readonly UNIQUE_RADIOGROUP_FORM_KEY = CommonOperations.randomString(10);
  public focused = false;
  public FormFieldType = FormFieldType;
  private _dateFormat = 'MM/DD/YYYY';
  public dateInputPlaceholder = '';
  private componentDestroyed$: Subject<void> = new Subject();
  public DirectionPreference = TooltipDirectionPreference;
  public searchOptions$: ReplaySubject<SelectOption<string | number | boolean>[]>;
  public showEditor = false;
  public selectOptions: SelectOption<string | number | boolean>[] = [];
  public editorContentStyle = `
    .mce-content-readonly {
      background-color: #EFF2F3;
    }
  `;
  @Input() fieldName: string;
  @Input() label: string;
  @Input() placeholder = '';
  @Input() message = '';
  @Input() useTooltips = false;
  @Input() descriptionText = '';
  @Input() formFieldControl: UntypedFormControl;
  @Input() submitted = false;
  @Input() required = false;
  @Input() type: FormFieldType;
  @Input() plusIconUrl: string;
  @Input() minusIconUrl: string;
  @Input() maxLength = 524288;
  @Input() max: number = 524288;
  @Input() min: number = 0;
  @Input() pinValue: boolean = true;
  @Input() dualKnobs: boolean = false;
  @Input() reverseBarColor: boolean = false;
  @Input()
  set options(selectOptions: SelectOption<string | number | boolean>[]) {
    this.selectOptions = selectOptions?.filter((option) => !option.isHidden);
  }
  @Input() iconHtml: SafeHtml;
  @Input() invalidPatternMessage: string;
  @Input()
  set dateFormat(format: string) {
    this._dateFormat = (format || 'MM/DD/YYYY').toUpperCase();
  }
  @ViewChild('dateInput') dateInput: ElementRef;
  @Input() currencySymbol = '$';
  @Input() hideCents = false;
  @Input() isEditable = true;
  @Input() rowEditConfirmationObsv: Observable<{ fieldName: string; fieldValue: any }>;
  @Input() errorInlineMode = false;
  @Input() showLabelInRequiredErrorMessage = true;
  @Input() decimalPosition: number;
  @Input() hyperlinkTarget: '_blank' | '_self' | '_parent' | '_top' = '_blank';
  @Input() readOnly = false;
  @Input() focus = false;
  @Input() showRequiredIndicator = false;
  @Input() maxDate: Date;
  @Input() minDate: Date;
  @Input() radioTranslateLabels: boolean = false;
  @Input() radioDeselectable: boolean = false;
  @Input() radioRippleEffect: boolean = false;
  @Output() rowEdit: EventEmitter<{ fieldName: string; fieldValue: any }> = new EventEmitter();
  @Output() focusOut: EventEmitter<void> = new EventEmitter();
  constructor(
    @Inject(MAT_DATE_FORMATS) private dateFormats,
    private decimalPipe: DecimalPipe,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this.formFieldControl.valueChanges.pipe(takeUntil(this.componentDestroyed$)).subscribe((value) => {
      switch (this.type) {
        case FormFieldType.incrementer:
          if (!value) {
            this.formFieldControl.setValue(0, { emitEvent: false });
          }
          break;
        case FormFieldType.checkbox:
          if (this.selectOptions?.length) {
            this.selectOptions.forEach((option) => {
              if (value?.includes(option.value)) {
                option.selected = true;
              } else {
                option.selected = false;
              }
            });
            this.changeDetectorRef.detectChanges();
          }
          break;
        case FormFieldType.date:
          if (!moment.isMoment(value)) {
            this.processDate(value);
          }
          break;
        case FormFieldType.datetime:
          if (!moment.isMoment(value)) {
            this.processDate(value);
          }
          break;
        case FormFieldType.radio:
          if (this.radioDeselectable) {
            this.formFieldControl.setValue(null, { emitEvent: false });
          }
          break;
      }
    });
    this.rowEditConfirmationObsv?.pipe(takeUntil(this.componentDestroyed$)).subscribe((response) => {
      if (response?.fieldName === this.fieldName && response.fieldValue < 0) {
        this.matSelect.close();
        (document.querySelector(':focus') as HTMLElement)?.blur();
      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type']?.currentValue !== changes['type']?.previousValue) {
      this.handleTypeUpdate();
    }
  }
  public ngAfterViewInit() {
    if (this.formFieldControl && this.focus) {
      this.textInput.nativeElement.focus();
    }
  }
  public searchMultiSelect(query: string) {
    if (this.selectOptions) {
      this.searchOptions$.next(query ? this.selectOptions.filter((option) => option.label.toLowerCase().indexOf(query.toLowerCase()) > -1) : this.selectOptions.slice());
    }
  }
  private handleTypeUpdate(): void {
    if (this.formFieldControl && (this.type === FormFieldType.date || this.type === FormFieldType.datetime)) {
      this.dateFormats.display.dateInput = this._dateFormat;
      this.dateInputPlaceholder = this.placeholder || this._dateFormat;
    } else if (this.formFieldControl && (this.type === FormFieldType.currency || this.type === FormFieldType.percentage || this.type === FormFieldType.number)) {
      this.processNumber(this.formFieldControl.value);
    } else if (this.formFieldControl && this.type === FormFieldType.multiselectdropdown) {
      this.searchOptions$ = new ReplaySubject<SelectOption<string | number | boolean>[]>();
      this.searchOptions$.next(this.selectOptions.slice());
    } else if (this.formFieldControl && this.type === FormFieldType.incrementer) {
      const val = this.formFieldControl.value;
      if (typeof val === 'string' && !isNaN(Number(val))) {
        this.formFieldControl.setValue(Number(val));
      } else if (typeof val === 'number') {
        this.formFieldControl.setValue(val);
      } else {
        this.formFieldControl.setValue(0);
      }
    }
  }
  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
  public clear(): void {
    this.formFieldControl.setValue('');
  }
  public processDate(value: null | moment.Moment | FocusEvent | string): void {
    this.focused = false;
    if (value == null) {
      return;
    }
    if (value instanceof FocusEvent) {
      const el = value.target as HTMLInputElement;
      value = el.value;
    }
    let parsedDate = moment(value, moment.ISO_8601, true);
    if (!parsedDate.isValid()) {
      parsedDate = moment(value, this._dateFormat, false);
    }
    if (parsedDate.isValid()) {
      this.formFieldControl.setValue(parsedDate);
    } else {
      this.formFieldControl.setValue(null);
      if (this.required) {
        this.formFieldControl.setErrors({ required: true }, { emitEvent: false });
      }
    }
  }
  public processNumber(value: number | string): void {
    let cleanedValue: string;
    if (typeof value === 'string' && value?.length > 0) {
      cleanedValue = value.replace(/[^0-9]+?$/, '').replace(/(?:[.](?=.*[.])|[^\d.-])+/g, '');
    } else {
      cleanedValue = value?.toString();
    }
    if ((cleanedValue?.length > 0 && cleanedValue !== '.' && cleanedValue !== '-') || !isNaN(parseFloat(cleanedValue)) || cleanedValue === '') {
      this.formFieldControl.setErrors(null, { emitEvent: false });
      if (this.type === FormFieldType.currency && this.hideCents) {
        cleanedValue = this.decimalPipe.transform(cleanedValue, '1.0-0', 'en-US');
      } else if (this.decimalPosition !== null && this.decimalPosition !== undefined) {
        if (this.type === FormFieldType.currency) {
          cleanedValue = this.decimalPipe.transform(cleanedValue, `1.${this.decimalPosition}-${this.decimalPosition}`, 'en-US');
        } else {
          cleanedValue = this.decimalPipe.transform(cleanedValue, `1.0-${this.decimalPosition}`, 'en-US');
        }
      } else if (this.type === FormFieldType.currency) {
        cleanedValue = this.decimalPipe.transform(cleanedValue, '1.2-2', 'en-US');
      } else if (this.type === FormFieldType.percentage) {
        cleanedValue = this.decimalPipe.transform(cleanedValue, '1.0-2', 'en-US');
      } else {
        cleanedValue = this.decimalPipe.transform(cleanedValue, '1.0-100', 'en-US');
      }
      this.formFieldControl.setValue(cleanedValue?.replace(/,/g, ''), { emitEvent: false });
    } else {
      if (this.required) {
        this.formFieldControl.setErrors({ required: true }, { emitEvent: false });
      }
    }
  }
  public handleFocus(): void {
    if (this.isEditable) {
      this.focused = true;
      setTimeout(() => {
        if (this.type === FormFieldType.hyperlink) {
          this.textInput.nativeElement.focus();
        }
      });
    }
  }
  public handleFocusOut(event: FocusEvent): void {
    this.focused = false;
    if (this.type === FormFieldType.number || this.type === FormFieldType.currency || this.type === FormFieldType.percentage) {
      if (event) {
        const el = event.target as HTMLInputElement;
        this.processNumber(el.value);
      }
    }
    this.focusOut.emit();
  }
  public handleFieldClicked(event: any): void {
    if (!this.isEditable && this.rowEdit && this.rowEditConfirmationObsv) {
      this.rowEdit.emit({
        fieldName: this.fieldName,
        fieldValue: this.formFieldControl,
      });
      event.stopPropagation();
      event.preventDefault();
    }
  }
  public handleClick(event: any): void {
    event.stopPropagation();
    event.preventDefault();

    if (this.type === FormFieldType.hyperlink) {
      const value = !this.formFieldControl.value.includes('http') ? `//${this.formFieldControl.value}` : this.formFieldControl.value;
      window.open(value, this.hyperlinkTarget);
    }
  }

  public handleCheckboxOptionChange(): void {
    this.formFieldControl.setValue(
      this.selectOptions.filter((nextOption) => nextOption.selected).map((nextOption) => nextOption.value),
      { emitEvent: false },
    );
  }
  public decrement(): void {
    const val = this.formFieldControl.value - 1;
    if (val < 0) return;
    this.formFieldControl.setValue(val, { emitEvent: false });
  }
  public increment(): void {
    const val = this.formFieldControl.value + 1;
    this.formFieldControl.setValue(val, { emitEvent: false });
  }
  public toggleRadioButton(radioActiveOption: HTMLDivElement, radioInactiveOption: HTMLDivElement): void {
    if (!this.radioDeselectable) return;
    const state = { active: radioActiveOption.style.display, inactive: radioInactiveOption.style.display };
    [radioActiveOption.style.display, radioInactiveOption.style.display] = [state.inactive, state.active];
  }
  public formFieldRadioOptionClick(radioOption: SelectOption<string | number | boolean>): void {
    this.formFieldControl.setValue(radioOption.value);
  }
}
