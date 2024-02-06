import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { CardDetails } from '../../../model/input-field-card.models';
import { InputFieldComponent } from '../../input-field/input-field.component';
import { MapService } from '../../map/map.service';
@Component({
  selector: 'lib-input-field-card-expiry',
  templateUrl: './input-field-card-expiry.component.html',
  styleUrls: ['./input-field-card-expiry.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputFieldCardExpiryComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputFieldCardExpiryComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFieldCardExpiryComponent extends InputFieldComponent<CardDetails> implements OnInit, Validator {
  @ViewChild('inputElem') inputElem: ElementRef;
  public declare value: CardDetails;
  public override placeholder: string = 'MM/YY';
  private currentMonth: number;
  private currentYear: number;
  constructor(
    private zone: NgZone,
    private cdrRef: ChangeDetectorRef,
    private mapServiceRef: MapService,
  ) {
    super(zone, cdrRef, mapServiceRef);
  }
  ngOnInit(): void {
    this.initValidationDate();
  }
  public override writeValue(expiry: CardDetails): void {
    this.value.month = expiry?.month;
    this.value.year = expiry?.year?.slice(-2);
    this.cdrRef.detectChanges();
  }
  public validate(control: AbstractControl): ValidationErrors | null {
    const yearValue = Number(control.value.year);
    const monthValue = Number(control.value.month);
    if (monthValue > 12) {
      return { invalid: true };
    }
    const valid = monthValue >= this.currentMonth && yearValue >= this.currentYear;
    return valid ? null : { expired: true };
  }
  public onInput(): void {
    const inputValue = this.inputElem.nativeElement.value?.replace(/[MY]/g, '').split('/');
    this.value = { month: inputValue[0], year: inputValue[1] };
    this.onChange(this.value);
  }
  private initValidationDate(): void {
    this.value = { month: '', year: '' };
    const today = new Date();
    this.currentMonth = today.getMonth() + 1;
    this.currentYear = today.getFullYear() % 100;
  }
}
