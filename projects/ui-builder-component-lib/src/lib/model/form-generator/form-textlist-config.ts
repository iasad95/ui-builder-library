export class FormTextlistConfig {
  textlist: string[];
  isUrlList = false;
  constructor(textlist: string[], isUrlList = false) {
    this.textlist = textlist;
    this.isUrlList = isUrlList;
  }
}
