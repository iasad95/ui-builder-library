export class SelectOption<T> {
  public label: string;
  public value: T;
  public disabled? = false;
  public isHidden? = false;
  public selected? = false;
  constructor(label: string, value: T, disabled = false, isHidden = false, selected = false) {
    this.label = label;
    this.value = value;
    this.disabled = disabled;
    this.isHidden = isHidden;
    this.selected = selected;
  }
}
