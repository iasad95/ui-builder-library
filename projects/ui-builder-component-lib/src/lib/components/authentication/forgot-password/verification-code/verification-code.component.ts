import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AbstractAuthService } from '../../abstract-auth.service';
import { AuthModuleViewComponent } from '../../auth-module-view';
@Component({
  selector: 'lib-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerificationCodeScreenComponent extends AuthModuleViewComponent implements OnInit {
  @Input() customClass: string;
  @Input() noOfBox: number;
  @Output() handleEdit: EventEmitter<void> = new EventEmitter();
  public resendInfo: { retriesMax: number; retries: number };
  public secondsLeft: number;
  public secondsLeft$: Observable<number>;
  declare form: FormControl<string>;
  constructor(public override authService: AbstractAuthService) {
    super(authService);
  }
  override ngOnInit(): void {
    super.ngOnInit();
    this.secondsLeft$ = this.authService.secondsLeft$;
    this.buildForm();
  }
  public onSubmit(): void {
    this.authService.verifyForgetPasswordRequest({
      code: this.form.value,
      email: this.username,
    });
  }
  public reSendVerificationCode(): void {
    this.authService.verifyForgetPasswordRequestResend({
      email: this.username,
    });
  }
  public onEdit(): void {
    this.handleEdit.emit();
  }
  private buildForm(): void {
    this.form = new FormControl('', [Validators.required, Validators.minLength(6)]);
  }
}
