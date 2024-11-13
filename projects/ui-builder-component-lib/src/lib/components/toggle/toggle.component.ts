import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonOperations } from '../../operations/operations';
import { ToggleStatuses } from './enums/toggle-status.enum';
import { ToggleVariants } from './enums/toggle-variants.enum';
import { ToggleCircleMask } from './interfaces/toggle-circle-mask.interface';
import { ToggleGraphics } from './interfaces/toggle-graphics.interface';
const TOGGLE_BUTTON_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleComponent),
  multi: true,
};
@Component({
  selector: 'lib-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  providers: [TOGGLE_BUTTON_ACCESSOR],
})
export class ToggleComponent implements OnInit, ControlValueAccessor {
  @Input() public disabled: boolean = false;
  @Input()
  set toggleState(value: boolean) {
    if (this._toggleState !== value) {
      this._toggleState = value;
      this.setToggleKnobPosition(value);
    }
  }
  @Input() public variant: ToggleVariants = ToggleVariants.Basic;
  @Input() public left: ToggleGraphics;
  @Input() public right: ToggleGraphics;
  @Input() public thumbImg: string;
  @Output() toggleStateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  public TOGGLE_VARIANT: typeof ToggleVariants = ToggleVariants;
  public TOGGLE_STATUS: typeof ToggleStatuses = ToggleStatuses;
  public circleMask: ToggleCircleMask;
  public currentToggleStatus: ToggleStatuses;
  public _toggleState: boolean = false;
  private onChange = (state: boolean) => {};
  private onTouched = () => {};
  ngOnInit(): void {
    this.circleMask = {
      primary: CommonOperations.randomString(25),
      secondary: CommonOperations.randomString(25),
    };
    this.currentToggleStatus = ToggleStatuses.Initial;
    this.setToggleKnobPosition(this._toggleState);
  }
  writeValue(value: boolean): void {
    this._toggleState = value;
    this.onChange(this._toggleState);
    this.toggleStateChange.emit(this._toggleState);
    this.setToggleKnobPosition(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  public toggleButtonClick(): void {
    if (this.disabled) return;
    const _toggleState = !this._toggleState;
    this.setToggleKnobPosition(_toggleState);
    this.onTouched();
    this.writeValue(_toggleState);
  }
  private setToggleKnobPosition(value: boolean): void {
    if (this.currentToggleStatus === ToggleStatuses.Initial && !value) {
      return;
    }
    this.currentToggleStatus = value ? ToggleStatuses.MovedRight : ToggleStatuses.MovedLeft;
  }
}
