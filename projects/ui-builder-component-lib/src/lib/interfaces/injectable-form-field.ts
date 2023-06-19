import { UntypedFormControl } from '@angular/forms';
export interface InjectableFormField {
  setConfig(config: object): void;
  setFormControl(formFieldControl: UntypedFormControl): void;
}
