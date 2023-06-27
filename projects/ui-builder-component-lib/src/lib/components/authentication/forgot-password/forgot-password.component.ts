import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgetPasswordForm } from '../../../model/auth.models';
import { AbstractAuthService } from '../abstract-auth.service';
import { AuthModuleViewComponent } from '../auth-module-view';
@Component({
  selector: 'lib-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordScreenComponent extends AuthModuleViewComponent implements OnInit {
  @Input() customClass: string = '';
  public declare form: FormGroup<ForgetPasswordForm>;
  constructor(public override authService: AbstractAuthService) {
    super(authService);
  }
  override ngOnInit(): void {
    super.ngOnInit();
    this.buildForm();
  }
  ionViewWillLeave(): void {
    this.form = null;
  }
  public onSubmit(): void {
    if (this.form.valid) {
      this.authService.sendForgetPasswordRequest(this.form.getRawValue());
    } else {
      this.form.markAllAsTouched();
    }
  }
  private buildForm(): void {
    this.form = new FormGroup<ForgetPasswordForm>({
      email: new FormControl(this.username, [Validators.required, Validators.email]),
    });
  }
}
