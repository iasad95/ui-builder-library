import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthIcons } from 'ui-builder-component-lib';

@Component({
  selector: 'app-login-input-demo',
  templateUrl: './login-input-demo.component.html',
  styleUrls: ['./login-input-demo.component.scss'],
})
export class LoginInputDemoComponent implements OnInit {
  public icons: AuthIcons;
  public loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
    });

    // For demo purpose only, using hardcoded values
    const toggleIcons = {
      left: {
        enable: 'assets/icons/mail.svg',
        disable: 'assets/icons/disable-mail.svg',
      },
      right: {
        enable: 'assets/icons/phone.svg',
        disable: 'assets/icons/disable-phone.svg',
      },
      thumb: 'assets/icons/dark-thumb.svg',
    };
    const telInputIcons = { countrySelectorImage: 'assets/icons/tel-input/concave-phone-num-bg.svg' };

    this.icons = { ...this.icons, toggleIcons, telInputIcons };
  }
}
