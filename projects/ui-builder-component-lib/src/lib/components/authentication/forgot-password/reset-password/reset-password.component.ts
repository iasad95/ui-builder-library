import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResetPasswordForm } from '../../../../model/auth.models';
import { AbstractAuthService } from '../../abstract-auth.service';
import { AuthModuleViewComponent } from '../../auth-module-view';
@Component({
  selector: 'lib-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordScreenComponent extends AuthModuleViewComponent implements OnInit {
  public passwordHide: boolean = true;
  public confirmPasswordHide: boolean = true;
  public declare form: FormGroup;
  constructor(public override authService: AbstractAuthService) {
    super(authService);
  }
  override ngOnInit(): void {
    super.ngOnInit();
    this.buildForm();
  }
  public onSubmit(): void {
    if (this.form.valid) {
      this.authService.sendResetPasswordRequest({
        password: this.form.value.password,
        email: this.username,
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
  private buildForm(): void {
    this.form = new FormGroup<ResetPasswordForm>({
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }
}
