import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { DirectiveModule } from '../../directives/directive.module';
import { FormValidatorModule } from '../../directives/form-validator/form-validator.module';
import { PasswordValidatorModule } from '../../directives/password/password-validator.module';
import { ButtonsModule } from '../buttons/buttons.module';
import { DashedCheckboxModule } from '../dashed-checkbox/dashed-checkbox.module';
import { InputFieldModule } from '../input-field/input-field.module';
import { LoginInputModule } from '../login-input/login-input.module';
import { SharedVerificationCodeModule } from '../shared-verification-code/shared-verification-code.module';
import { TelInputModule } from '../tel-input/tel-input.module';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { AuthSocialComponent } from './auth-social/auth-social.component';
import { ForgotPasswordScreenComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordScreenComponent } from './forgot-password/reset-password/reset-password.component';
import { VerificationCodeScreenComponent } from './forgot-password/verification-code/verification-code.component';
import { LoginScreenComponent } from './login/login.component';
import { OtpInputModule } from './otp-input/otp-input.module';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    DirectiveModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    OtpInputModule,
    InputFieldModule,
    FormValidatorModule,
    TranslateModule,
    ButtonsModule,
    DashedCheckboxModule,
    TelInputModule,
    LoginInputModule,
    PasswordValidatorModule,
    SharedVerificationCodeModule,
  ],
  declarations: [LoginScreenComponent, AuthSocialComponent, ForgotPasswordScreenComponent, ResetPasswordScreenComponent, VerificationCodeScreenComponent, AuthHeaderComponent],
  exports: [LoginScreenComponent, AuthSocialComponent, ForgotPasswordScreenComponent, ResetPasswordScreenComponent, VerificationCodeScreenComponent, AuthHeaderComponent],
  providers: [],
})
export class AuthenticationModule {}
