import { SelectOption } from '../select-option';
export class FormRatingConfig {
  options: SelectOption<any>[];
  constructor(options: SelectOption<any>[]) {
    this.options = options;
  }
}
