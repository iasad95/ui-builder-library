import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { NgOtpInputComponent } from 'ng-otp-input';
@Component({
  selector: 'lib-otp-input',
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpInputComponent implements AfterViewInit, OnChanges {
  @Input() length: number = 6;
  @Input() placeholder = '';
  @Input() formCtrl: FormControl = new FormControl();
  @ViewChild(NgOtpInputComponent) ngOtpInputComponent: NgOtpInputComponent;
  public loading: boolean = true;
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['length']?.currentValue !== changes['length']?.previousValue) {
      this.loading = false;
      this.cdr.detectChanges();
      this.loading = true;
      this.cdr.detectChanges();
    }
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      Object.keys(this.ngOtpInputComponent.otpForm.controls).forEach((key) => {
        const control: AbstractControl = this.ngOtpInputComponent.otpForm.get(key);
        control.setValidators([Validators.required]);
        this.ngOtpInputComponent.setValue(this.formCtrl.value);
        control.updateValueAndValidity();
      });
    });
  }
  public resetOtpInput(): void {
    this.ngOtpInputComponent.setValue('');
  }
}
