import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { OtpInputComponent } from '../authentication/otp-input/otp-input.component';
@Component({
  selector: 'lib-verification',
  templateUrl: './shared-verification-code.component.html',
  styleUrls: ['./shared-verification-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedVerificationComponent implements OnInit, OnDestroy {
  @Input() hideVerificationTitle: boolean;
  @Input() hideEdit: boolean;
  @Input() confirmBtnTitle: string;
  @Input() sourceOfCode: string = '';
  @Input() otpInput: string = '';
  @Input() loading$: Observable<boolean>;
  @Input() secondsLeft$: Observable<number>;
  @Input() customClass: string;
  @Input() noOfBox: number = 5;
  @Output() dataSubmit = new EventEmitter<string>();
  @Output() resend = new EventEmitter<boolean>();
  @Output() edit = new EventEmitter<boolean>();
  @ViewChild(OtpInputComponent) otpInputComponent: OtpInputComponent;
  @Input() otpCode: FormControl<string>;
  public secondsLeft = 30;
  public downloadTimer: number;
  public componentDestroyed$: Subject<void> = new Subject();
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    if (!this.otpCode) this.otpCode = new FormControl(this.otpInput, [Validators.required, Validators.minLength(this.noOfBox)]);
    this.startCount();
    this.secondsLeft$.pipe(takeUntil(this.componentDestroyed$)).subscribe((secondsLeft) => (this.secondsLeft = secondsLeft));
  }
  ngOnDestroy(): void {
    clearInterval(this.downloadTimer);
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
  public onResend(): void {
    this.resend.emit(true);
    this.secondsLeft = 30;
    this.otpCode.setValue('');
    this.otpInputComponent.resetOtpInput();
    this.startCount();
  }
  public confirm(): void {
    if (this.otpCode?.valid) {
      this.dataSubmit.emit(this.otpCode.value);
    } else {
      this.otpCode.markAsTouched();
    }
  }
  public onEdit(): void {
    this.edit.emit(true);
  }
  private startCount(): void {
    if (this.downloadTimer) {
      clearInterval(this.downloadTimer);
      this.downloadTimer = null;
    }
    this.downloadTimer = window.setInterval(() => {
      if (this.secondsLeft === 0) {
        clearInterval(this.downloadTimer);
        this.downloadTimer = null;
      } else {
        this.secondsLeft -= 1;
      }
      this.cdr.detectChanges();
    }, 1000);
  }
}
