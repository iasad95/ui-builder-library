import { SelectOption } from '../select-option';
export class FormMultiselectConfig {
  options: { groupName: string; options: SelectOption<any>[] }[];
  defaultOptions: SelectOption<any>[];
  constructor(options: { groupName: string; options: SelectOption<any>[] }[], defaultOptions: SelectOption<any>[]) {
    this.options = options;
    this.defaultOptions = defaultOptions;
  }
}
