import { FormControl } from '@angular/forms';
export interface AuthModel {
  username?: string;
  password: string;
  remember?: boolean;
}
export interface PhoneDetails {
  number?: string;
  internationalNumber?: string;
  nationalNumber?: string;
  e164Number?: string;
  countryCode?: string;
  dialCode?: string;
}
export interface LoginForm {
  username: FormControl<string>;
  password: FormControl<string>;
  remember?: FormControl<boolean>;
}
export interface ResetPasswordForm {
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}
export interface ForgetPasswordForm {
  email: FormControl<string>;
}
export interface RouteParams {
  route: any[];
  params?: {
    [key: string]: any;
  };
}
