import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'lib-dashed-checkbox',
  templateUrl: './dashed-checkbox.component.html',
  styleUrls: ['./dashed-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DashedCheckboxComponent,
    },
  ],
})
export class DashedCheckboxComponent implements ControlValueAccessor {
  @ViewChild('input') input: ElementRef;
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Output() toggle = new EventEmitter<boolean>();
  private onChange = (state: boolean) => {};
  private onTouched = () => {};
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  public writeValue(value: boolean): void {
    this.checked = value;
    this.onChange(value);
    this.toggle.emit(this.checked);
  }
  public onCheckToggled(): void {
    if (this.disabled) return;
    this.checked = this.input.nativeElement.checked;
    this.writeValue(this.checked);
  }
}
