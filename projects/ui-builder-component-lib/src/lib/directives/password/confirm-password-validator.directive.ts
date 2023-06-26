import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { take } from 'rxjs/operators';
@Directive({
  selector: '[libConfirmPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ConfirmPasswordValidatorDirective,
      multi: true,
    },
  ],
})
export class ConfirmPasswordValidatorDirective implements Validator {
  @Input('libConfirmPasswordValidator') appConfirmPasswordValidator: string;
  validate(control: FormControl): ValidationErrors | null {
    if (!control || !control.value) {
      return null;
    }
    const password = control.root.get(this.appConfirmPasswordValidator);
    if (password) {
      password.valueChanges.pipe(take(1)).subscribe(() => {
        control.updateValueAndValidity();
      });
    }
    return password.value !== control.value ? { confirmPasswordError: true } : null;
  }
}
