import { ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PhoneNumber, PhoneNumberUtil } from 'google-libphonenumber';
export const phoneNumberValidator = (control: FormControl & ElementRef<HTMLElement>) => {
  if (!control.value) {
    return null;
  }
  const el: HTMLElement = control.nativeElement as HTMLElement;
  const inputBox: HTMLInputElement | any = el ? el.querySelector('input[type="tel"]') : undefined;
  if (inputBox) {
    const isCheckValidation = 'true';
    if (isCheckValidation === 'true') {
      const isRequired = control.errors?.['required'] === true;
      const error = { invalidPhoneNumber: true };
      inputBox.setCustomValidity('Invalid field.');
      let number: PhoneNumber;
      try {
        number = PhoneNumberUtil.getInstance().parse(control.value.number, control.value.countryCode);
      } catch (e) {
        if (isRequired) {
          return error;
        } else {
          inputBox.setCustomValidity('');
        }
      }
      if (control.value) {
        if (!number) {
          return error;
        } else {
          if (!PhoneNumberUtil.getInstance().isValidNumberForRegion(number, control.value.countryCode)) {
            return error;
          } else {
            inputBox.setCustomValidity('');
          }
        }
      }
    } else if (isCheckValidation === 'false') {
      inputBox.setCustomValidity('');
      control.clearValidators();
    }
  }
  return null;
};
