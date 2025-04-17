import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardBrand } from 'ui-builder-component-lib';

@Component({
  selector: 'app-input-field-test',
  templateUrl: './input-field-test.component.html',
  styleUrls: ['./input-field-test.component.scss'],
})
export class InputFieldTestComponent implements OnInit {
  public cardBrands: CardBrand[] = [
    { type: 'visa', icon: 'assets/icons/card-brands/visa.svg' },
    { type: 'mastercard', icon: 'assets/icons/card-brands/rupay.svg' },
    { type: 'mastercard', icon: 'assets/icons/card-brands/mastercard.svg' },
    { type: 'americanExpress', icon: 'assets/icons/card-brands/american-express.svg' },
  ];
  public form: FormGroup;
  public inputTextCode: string = `<lib-input-field type="text" label="Test"></lib-input-field>`;
  public inputEmailCode: string = `<lib-input-field type="email" label="Email"></lib-input-field>`;
  public inputAddressCode: string = `<lib-input-field label="Google Address" [enableGoogleAddress]="true"></lib-input-field>`;
  public inputTextareaCode: string = `<lib-input-field label="Textarea" [textarea]="true"></lib-input-field>`;
  public inputCardNumberCode: string = `<lib-input-field-card-number label="Card Number" [cardBrands]="cardBrands"></lib-input-field-card-number>`;
  public inputCardExpiryCode: string = `<lib-input-field-card-expiry label="Card Expiry"></lib-input-field-card-expiry>`;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup<any> {
    return this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]],
      googleAddress: ['', [Validators.required]],
      textarea: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]],
      cardExpiry: [{ month: '', year: '' }, [Validators.required]],
    });
  }
}
