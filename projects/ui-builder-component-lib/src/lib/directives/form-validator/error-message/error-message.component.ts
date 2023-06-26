import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
@Component({
  selector: 'lib-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {
  @Input() control: FormControl | AbstractControl;
  @Input() minLength: number;
  @Input() maxlength: number;
  @Input() customErrorMessage: string;
  @Input() requiredErrorMessage: string;
  @Input() freeContent: boolean;
}
