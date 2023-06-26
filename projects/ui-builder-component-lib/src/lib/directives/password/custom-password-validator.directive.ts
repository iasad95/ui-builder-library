import { Directive } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { PasswordErrorMessages } from '../../enums/form-error-messages.enum';
@Directive({
  selector: '[formControlName][customPasswordValidator],[ngModel][customPasswordValidator],[formControl][customPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomPasswordValidatorDirective,
      multi: true,
    },
  ],
})
export class CustomPasswordValidatorDirective implements Validator {
  constructor(private translateService: TranslateService) {}
  validate(control: FormControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const filteredMessages = [];
    const atLeastOneLowerCase = /.*[a-z].*/;
    const atLeastOneUpperCase = /.*[A-Z].*/;
    const atLeastOneDigit = /.*\d.*/;
    const atLeastOneSymbol = /[*$@!#%&()^~{}]+/;
    let prefixAdded = false;
    if (control.value?.length < 6) {
      filteredMessages.push(this.translateService.instant(PasswordErrorMessages.minimum));
    }
    if (!atLeastOneLowerCase.test(control.value)) {
      if (!prefixAdded) {
        filteredMessages.push(this.translateService.instant(PasswordErrorMessages.prefix) + ' ' + this.translateService.instant(PasswordErrorMessages.lowercase));
        prefixAdded = true;
      } else {
        filteredMessages.push(this.translateService.instant(PasswordErrorMessages.lowercase));
      }
    }
    if (!atLeastOneUpperCase.test(control.value)) {
      if (!prefixAdded) {
        filteredMessages.push(this.translateService.instant(PasswordErrorMessages.prefix) + ' ' + this.translateService.instant(PasswordErrorMessages.uppercase));
        prefixAdded = true;
      } else {
        filteredMessages.push(this.translateService.instant(PasswordErrorMessages.uppercase));
      }
    }
    if (!atLeastOneDigit.test(control.value)) {
      if (!prefixAdded) {
        filteredMessages.push(this.translateService.instant(PasswordErrorMessages.prefix) + ' ' + this.translateService.instant(PasswordErrorMessages.number));
        prefixAdded = true;
      } else {
        filteredMessages.push(this.translateService.instant(PasswordErrorMessages.number));
      }
    }
    if (!atLeastOneSymbol.test(control.value)) {
      if (!prefixAdded) {
        filteredMessages.push(this.translateService.instant(PasswordErrorMessages.prefix) + ' ' + this.translateService.instant(PasswordErrorMessages.specialCharacter));
        prefixAdded = true;
      } else {
        filteredMessages.push(this.translateService.instant(PasswordErrorMessages.specialCharacter));
      }
    }
    if (filteredMessages && filteredMessages.length > 0) {
      return { message: filteredMessages.join(', ') };
    }
    return null;
  }
  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }
}
