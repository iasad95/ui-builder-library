import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFieldModule } from '../input-field/input-field.module';
import { InputFieldCardNumberComponent } from './input-field-card-number/input-field-card-number.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { InputFieldCardExpiryComponent } from './input-field-card-expiry/input-field-card-expiry.component';
@NgModule({
  declarations: [InputFieldCardNumberComponent, InputFieldCardExpiryComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputFieldModule, NgxMaskDirective, NgxMaskPipe],
  exports: [InputFieldCardNumberComponent, InputFieldCardExpiryComponent],
  providers: [provideNgxMask()],
})
export class InputFieldCardModule {}
