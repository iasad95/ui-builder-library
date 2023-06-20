import { SafeHtml } from '@angular/platform-browser';
export class ItemActionHandler {
  public displayHtml: SafeHtml;
  public action: (arg: any) => any;
  public toolTip: SafeHtml;
  constructor(displayHtml: SafeHtml, action: (arg: any) => any, toolTip?: SafeHtml) {
    this.displayHtml = displayHtml;
    this.action = action;
    this.toolTip = toolTip;
  }
}
