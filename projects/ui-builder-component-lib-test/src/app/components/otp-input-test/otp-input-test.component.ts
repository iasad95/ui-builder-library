import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp-input-test',
  templateUrl: './otp-input-test.component.html',
  styleUrls: ['./otp-input-test.component.scss'],
})
export class OtpInputTestComponent implements OnInit {
  public code: FormControl<string>;
  public length: number = 6;
  public otpInputCode: string = `<lib-otp-input [formCtrl]="formControl" [length]="5"></lib-otp-input>`;

  ngOnInit(): void {
    this.code = new FormControl('', [Validators.required]);
  }
}
