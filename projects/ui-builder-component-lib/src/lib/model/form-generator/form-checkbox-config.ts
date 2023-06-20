import { SelectOption } from '../select-option';
export class FormCheckboxConfig {
  public options: SelectOption<any>[];
  constructor(options: SelectOption<any>[]) {
    this.options = options;
  }
}
