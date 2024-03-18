import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormValidatorModule } from '../../directives/form-validator/form-validator.module';
import { InputFieldModule } from '../input-field/input-field.module';
import { TelInputModule } from '../tel-input/tel-input.module';
import { ToggleModule } from '../toggle/toggle.module';
import { LoginInputComponent } from './login-input.component';
@NgModule({
  declarations: [LoginInputComponent],
  exports: [LoginInputComponent],
  imports: [CommonModule, TelInputModule, ToggleModule, InputFieldModule, ReactiveFormsModule, FormValidatorModule],
})
export class LoginInputModule {}
