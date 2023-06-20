import { Type } from '@angular/core';
import { InjectableFormField } from '../../interfaces/injectable-form-field';
export class FormInjectableFormFieldConfig {
  public componentType: Type<InjectableFormField>;
  public componentConfig: any;
  constructor(componentType: Type<InjectableFormField>, componentConfig: any) {
    this.componentType = componentType;
    this.componentConfig = componentConfig;
  }
}
