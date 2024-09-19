import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { OtpInputModule } from '../authentication/otp-input/otp-input.module';
import { ButtonsModule } from '../buttons/buttons.module';
import { SharedVerificationComponent } from './shared-verification-code.component';
@NgModule({
  declarations: [SharedVerificationComponent],
  imports: [CommonModule, IonicModule, OtpInputModule, ReactiveFormsModule, TranslateModule, ButtonsModule],
  exports: [SharedVerificationComponent],
})
export class SharedVerificationCodeModule {}
