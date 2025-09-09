import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SelectOption } from 'ui-builder-component-lib';

@Component({
  selector: 'app-rating-field-demo',
  templateUrl: './rating-field-demo.component.html',
  styleUrls: ['./rating-field-demo.component.scss'],
})
export class RatingFieldDemoComponent {
  public formFieldControl = new FormControl<string>('');
  public label = 'Custom Rating Field';
  public required = false;
  public submitted = false;
  public readOnly = false;
  public options: SelectOption<any>[] = [
    new SelectOption('10', '10'),
    new SelectOption('9', '9'),
    new SelectOption('8', '8'),
    new SelectOption('7', '7'),
    new SelectOption('6', '6'),
    new SelectOption('5', '5'),
    new SelectOption('4', '4'),
    new SelectOption('3', '3'),
    new SelectOption('2', '2'),
    new SelectOption('1', '1'),
  ];
  public showLabelInRequiredErrorMessage = false;
  public ratingFieldCode: string = `<lib-rating-field [label]="Example Label" [options]="exampleOptions" [formFieldControl]="formFieldControl" [showLabelInRequiredErrorMessage]="false" [submitted]="false" [required]="true" [readOnly]="false"></lib-rating-field>`;

  public resetForm() {
    this.formFieldControl.setValue('');
  }

  public handleRequiredChange(event: boolean): void {
    if (this.required) {
      this.formFieldControl.setValidators(Validators.required);
    } else {
      this.formFieldControl.clearValidators();
      this.formFieldControl.setErrors(null);
    }
  }
}
