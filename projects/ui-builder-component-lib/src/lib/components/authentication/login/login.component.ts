import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginFormType } from '../../../enums/login-input-form.enum';
import { LoginForm } from '../../../model/auth.models';
import { AbstractAuthService } from '../abstract-auth.service';
import { AuthModuleViewComponent } from '../auth-module-view';
@Component({
  selector: 'lib-login-screen',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginScreenComponent extends AuthModuleViewComponent implements OnInit {
  @Input() title: string;
  @Input() usernameLabel: string;
  @Input() phoneNumberPlaceHolder: string;
  @Input() enableRememberMe = true;
  @Input() enableForgetPassword: boolean;
  @Input() enableSocialLogin: boolean;
  @Input() enableRegistration: boolean;
  @Input() customClass: string = '';
  public hidePassword = true;
  public loginFormGroup: FormGroup<LoginForm>;
  constructor(public override authService: AbstractAuthService) {
    super(authService);
  }
  override ngOnInit(): void {
    super.ngOnInit();
    this.buildForm();
    this.showBackButton = false;
    this.showFooter = false;
  }
  public onSubmit(): void {
    if (this.loginFormGroup.valid) {
      this.authService.login(this.loginFormGroup.getRawValue());
    } else {
      this.loginFormGroup.markAllAsTouched();
    }
  }
  public navigateToRegister = (): void => this.authService.navigateToRegister();
  public navigateToForgetPassword = (email: string): void => this.authService.navigateToForgetPassword(email);
  private buildForm(): void {
    this.loginFormGroup = new FormGroup<LoginForm>({
      username: new FormControl(this.username, [Validators.required]),
      password: new FormControl('', [Validators.required]),
      remember: new FormControl(true),
    });
  }
  public onLoginFormTypeChange(loginFormType: LoginFormType): void {
    this.authService.onLoginFormTypeChange(loginFormType);
  }
}
