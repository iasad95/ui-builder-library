import { UntypedFormControl } from '@angular/forms';
import { FormSectionVariables } from './form-section-variables';
export class FormMultifieldConfig {
  public config: FormSectionVariables;
  public handleRowEdit?: (event: { rowFormControls: UntypedFormControl[][]; config: FormSectionVariables }) => void;
  public handleValueChanged?: (event: { formControl: UntypedFormControl; config: FormSectionVariables }) => void;
  public newRowText?: string;
  public maxLength = 0;
  public errorMessage? = '';
  constructor(config: FormSectionVariables) {
    this.config = config;
  }
}
