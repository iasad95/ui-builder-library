import { SelectOption } from '../select-option';
export class FormRadioConfig {
  public options: SelectOption<any>[];
  constructor(options: SelectOption<any>[]) {
    this.options = options;
  }
}
