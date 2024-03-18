import { AutofillMonitor } from '@angular/cdk/text-field';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subject, filter, merge, takeUntil, tap } from 'rxjs';
import { LoginFormType } from '../../enums/login-input-form.enum';
import { PhoneDetails } from '../../model/auth.models';
import { AuthIcons } from '../../types/auth-icons';
import { InputFieldComponent } from '../input-field/input-field.component';
import { ToggleVariants } from '../toggle/enums/toggle-variants.enum';
@Component({
  selector: 'lib-login-input',
  templateUrl: './login-input.component.html',
  styleUrl: './login-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LoginInputComponent),
      multi: true,
    },
  ],
})
export class LoginInputComponent implements OnDestroy, OnInit, AfterViewInit, ControlValueAccessor {
  @Input() usernameLabel: string;
  @Input() phoneNumberPlaceHolder: string;
  @Input() icons: AuthIcons;
  @Output() loginFormTypeChange: EventEmitter<LoginFormType> = new EventEmitter<LoginFormType>();
  public LoginFormType = LoginFormType;
  public selectedLoginFormMode: LoginFormType;
  public isFormValid: Record<LoginFormType, boolean>;
  public firstChange: boolean = false;
  public TOGGLE_VARAINTS: typeof ToggleVariants = ToggleVariants;
  public phoneControl: FormControl<PhoneDetails>;
  public emailControl: FormControl<string>;
  private onChange: (value: string | PhoneDetails) => void = () => {};
  private onTouched: () => void = () => {};
  private destroy$ = new Subject<void>();
  @ViewChild('loginInputField')
  private loginInputFieldComponent!: InputFieldComponent;
  private loginInputFieldRef: ElementRef<HTMLInputElement>;
  private didBrowserAutofillEmail: boolean = false;
  constructor(private autofillMonitor: AutofillMonitor) {}
  public buildForm(): void {
    this.phoneControl = new FormControl({ countryCode: '+1' }, [Validators.required]);
    this.emailControl = new FormControl('', [Validators.required]);
  }
  ngOnInit(): void {
    this.isFormValid = { email: true, phone: true };
    this.buildForm();
    this.setEmailFormType();
    merge(
      this.emailControl.valueChanges.pipe(
        filter(() => this.firstChange),
        tap(() => {
          this.isFormValid.email = this.emailControl.valid;
        }),
      ),
      this.phoneControl.valueChanges.pipe(
        filter(() => this.firstChange),
        tap(() => {
          this.isFormValid.phone = this.phoneControl.valid;
        }),
      ),
    )
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.onChange(value);
        this.onTouched();
        this.firstChange = true;
      });
  }
  public emitAutofillEmailValue(): void {
    if (!this.didBrowserAutofillEmail) return;
    this.onChange(this.emailControl.value);
    this.didBrowserAutofillEmail = false;
  }
  ngAfterViewInit(): void {
    this.loginInputFieldRef = this.loginInputFieldComponent?.inputFieldRef;
    if (this.loginInputFieldComponent && this.loginInputFieldRef) {
      this.autofillMonitor
        .monitor(this.loginInputFieldRef)
        .pipe(takeUntil(this.destroy$))
        .subscribe((autofillEvent) => {
          if (autofillEvent.isAutofilled && this.selectedLoginFormMode === LoginFormType.Email) {
            this.didBrowserAutofillEmail = true;
          }
        });
    }
  }
  public onFieldClick(): void {
    this.firstChange = true;
  }
  public toggleInput(): void {
    switch (this.selectedLoginFormMode) {
      case LoginFormType.Email:
        this.setPhoneFormType();
        break;
      case LoginFormType.Phone:
        this.setEmailFormType();
        break;
    }
  }
  public writeValue(value: string | PhoneDetails): void {}
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
    let loginControl: FormControl<string | PhoneDetails>;
    switch (this.selectedLoginFormMode) {
      case LoginFormType.Email:
        loginControl = this.emailControl;
        break;
      case LoginFormType.Phone:
        loginControl = this.phoneControl;
        break;
    }
    if (isDisabled) {
      loginControl.disable();
    } else {
      loginControl.enable();
    }
  }
  ngOnDestroy(): void {
    if (this.loginInputFieldRef) this.autofillMonitor.stopMonitoring(this.loginInputFieldRef);
    this.destroy$.next();
    this.destroy$.complete();
  }
  public checkFormValidation(): void {
    switch (this.selectedLoginFormMode) {
      case LoginFormType.Email:
        this.isFormValid.email = this.emailControl.valid;
        break;
      case LoginFormType.Phone:
        this.isFormValid.phone = this.phoneControl.valid;
        break;
    }
  }
  private setEmailFormType(): void {
    this.selectedLoginFormMode = LoginFormType.Email;
    this.loginFormTypeChange.emit(LoginFormType.Email);
  }
  private setPhoneFormType(): void {
    this.selectedLoginFormMode = LoginFormType.Phone;
    this.loginFormTypeChange.emit(LoginFormType.Phone);
  }
}
