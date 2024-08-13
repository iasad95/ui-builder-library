import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'lib-range-selector',
  templateUrl: './range-selector.component.html',
  styleUrls: ['./range-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeSelectorComponent),
      multi: true,
    },
  ],
})
export class RangeSelectorComponent implements ControlValueAccessor {
  @Input() minValue: number = 0;
  @Input() maxValue: number = 100;
  @Input() stepValue: number = 10;
  @Input() dualKnobs: boolean = false;
  @Input() pinValue: boolean = true;
  @Input() reverseBarColor: boolean = false;
  @Input() enablePinFormatter: boolean = false;
  public selectedRange: { lower: number; upper: number } | number;
  private onChange: (value: { lower: number; upper: number } | number) => void = () => {};
  private onTouched: () => void = () => {};
  constructor(private cdr: ChangeDetectorRef) {}
  writeValue(value: { lower: number; upper: number } | number): void {
    this.selectedRange = value;
    this.cdr.detectChanges();
  }
  registerOnChange(fn: (value: { lower: number; upper: number } | number) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {}
  rangeChanged(event: CustomEvent): void {
    this.onChange(event.detail.value);
  }
  public pinFormatterFn(value: Number): string {
    return this.enablePinFormatter ? `${value}+` : `${value}`;
  }
}
