import { ChangeDetectionStrategy, Component, forwardRef, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'lib-input-field-select',
  templateUrl: './input-field-select.component.html',
  styleUrls: ['./input-field-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldSelectComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class InputFieldSelectComponent implements ControlValueAccessor {
  public control: FormControl = new FormControl();
  @Input() multiple: boolean;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() optionLabel: string;
  @Input() optionValue: string;
  @Input() options: unknown[] = [];
  @Input() optionsTemplates: TemplateRef<any>[];
  @Input() filterBy: string;
  @Input() enableFilter: boolean;
  @Input() readonly: boolean;
  @Input() disabled: boolean;
  @Input() showClear: boolean;
  @Input() editable: boolean;
  @Input() withTemplate: boolean;
  @Input() enableTranslation: boolean;
  public onChange: (value: any) => void;
  public focused: boolean;
  public value: string;
  private onTouched: any;
  constructor() {}
  writeValue(value: string): void {
    if (this.disabled || this.readonly) {
      this.control.disable();
    }
    this.value = value;
    const selectedOption = this.options.find((option) => option[this.optionValue] === value);
    this.control.setValue(selectedOption);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  public touched(touched: boolean) {
    this.onTouched(touched);
  }
  public onBlurField(): void {
    this.focused = false;
    this.onChange(this.control.value[this.optionValue]);
    this.onTouched(true);
  }
  public onFocusField() {
    this.focused = true;
  }
}
