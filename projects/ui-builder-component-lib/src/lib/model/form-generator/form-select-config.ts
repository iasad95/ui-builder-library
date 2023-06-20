import { SelectOption } from '../select-option';
export class FormSelectConfig {
  public options: SelectOption<any>[];
  constructor(options: SelectOption<any>[]) {
    this.options = options;
  }
}
