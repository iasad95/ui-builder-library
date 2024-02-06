import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { CardBrand } from '../../../model/input-field-card.models';
import { InputFieldComponent } from '../../input-field/input-field.component';
import { MapService } from '../../map/map.service';
import { InputFieldCardService } from '../input-field-card.service';
@Component({
  selector: 'lib-input-field-card-number',
  templateUrl: './input-field-card-number.component.html',
  styleUrls: ['./input-field-card-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputFieldCardNumberComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputFieldCardNumberComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFieldCardNumberComponent extends InputFieldComponent implements Validator {
  @ViewChild('inputElem') inputElem: ElementRef;
  @Input() cardBrands: CardBrand[];
  @Input() amExpressMask: string = 'dddd dddddd ddddd';
  @Input() mask4: string = 'dddd dddd dddd dddd';
  @Output() updateCardType: EventEmitter<string> = new EventEmitter<string>();
  public cardType: string;
  public cardBrandLogo: string;
  private cardLength: number = 16;
  private isDelete: boolean;
  private cardMask: string = this.mask4;
  private caretPosition: number;
  constructor(
    private zone: NgZone,
    private inputFieldCardService: InputFieldCardService,
    private cdrRef: ChangeDetectorRef,
    private mapServiceRef: MapService,
  ) {
    super(zone, cdrRef, mapServiceRef);
  }
  public override writeValue(cardNumber: string): void {
    cardNumber = cardNumber?.replace(/\s/g, '');
    for (const digit of cardNumber) {
      if (/\d/.test(digit) !== true) {
        this.value = '';
        return;
      }
    }
    this.value = cardNumber;
    this.cdrRef.detectChanges();
  }
  public override onKeyDown(event: KeyboardEvent): void {
    this.isDelete = this.inputFieldCardService.onKeyDown(event, this.value, this.cardLength);
  }
  public validate(control: AbstractControl): ValidationErrors | null {
    if (!this.inputFieldCardService.isValidCardNumber(control.value, this.cardLength)) {
      return { invalidCardNumber: true };
    }
    return null;
  }
  public onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const caretPos = (event.target as HTMLInputElement).selectionStart;
    const data = event.clipboardData.getData('text');
    let value = '';
    for (const ch of data) {
      if (!/\d/.test(ch)) {
        continue;
      }
      value += ch;
    }
    this.value = this.value.substring(0, caretPos) + value + this.value.substring(caretPos);
    this.updateValue();
  }
  public onInput(event: InputEvent | Event): void {
    const inputElement = event.currentTarget as HTMLInputElement;
    this.caretPosition = inputElement.selectionStart;
    this.value = inputElement.value.replace(/\s/g, '');
    this.updateValue();
  }
  public updateValue(): void {
    const inputElement = this.inputElem.nativeElement;
    this.cardLength = 16;
    this.cardMask = this.mask4;
    this.cardType = '';
    if (this.inputFieldCardService.isVisaCard(this.value)) {
      this.cardType = 'visa';
    } else if (this.inputFieldCardService.isMasterCard(this.value)) {
      this.cardType = 'mastercard';
    } else if (this.inputFieldCardService.isAmericanExpressCard(this.value)) {
      this.cardType = 'americanExpress';
      this.cardMask = this.amExpressMask;
      this.cardLength = 15;
    }
    if (this.cardType) {
      this.cardBrandLogo = this.cardBrands?.find((value1) => value1.type === this.cardType)?.icon;
    }
    this.updateCardType.emit(this.cardType);
    if (this.value.length > this.cardLength) {
      this.value = this.value.substring(0, this.cardLength);
    }
    inputElement.value = this.inputFieldCardService.mask(this.value, this.cardMask);
    if (this.value.length > this.caretPosition || this.isDelete) {
      inputElement.selectionStart = this.caretPosition;
      inputElement.selectionEnd = this.caretPosition;
    } else {
      inputElement.selectionStart = this.caretPosition + 2;
      inputElement.selectionEnd = this.caretPosition + 2;
    }
    if (this.value.length === this.cardLength) {
      this.inputFieldCardService.isValidCardNumber(this.value, this.cardLength);
    }
    this.onChange(this.value);
  }
  public isValidCardNumber(cardNumber: string): boolean {
    return this.inputFieldCardService.isValidCardNumber(cardNumber, this.cardLength);
  }
}
