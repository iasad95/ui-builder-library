import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { InjectableFormField } from 'ui-builder-component-lib';

@Component({
  selector: 'app-injectable-form-field-demo',
  templateUrl: './injectable-form-field-demo.component.html',
  styleUrls: ['./injectable-form-field-demo.component.scss'],
})
export class InjectableFormFieldDemoComponent implements InjectableFormField {
  private formFieldControl: UntypedFormControl;
  public extraText: string;
  private extraTextAction: () => any;

  setConfig(config: { extraText: string; extraTextAction: () => any }): void {
    this.extraText = config.extraText;
    this.extraTextAction = config.extraTextAction;
  }

  setFormControl(formFieldControl: UntypedFormControl) {
    this.formFieldControl = formFieldControl;
  }

  handleExtraTextClick(): void {
    if (this.extraTextAction) {
      this.extraTextAction();
    }
  }
}
