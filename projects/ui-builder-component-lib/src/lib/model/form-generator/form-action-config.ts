export class FormActionConfig {
  action: (...args: any[]) => void;
  constructor(action: (...args: any[]) => void) {
    this.action = action;
  }
}
