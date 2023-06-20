import { ItemActionHandler } from './item-action-handler';
export class ItemInfoLine {
  public label: string;
  public tooltipText: string;
  public action: (...args: unknown[]) => unknown;
  public iconTray: ItemActionHandler[];
  public inlineStyles: object;
  constructor(label: string, tooltipText: string, action: (...args: unknown[]) => unknown, iconTray?: ItemActionHandler[], inlineStyles?: object) {
    this.label = label;
    this.tooltipText = tooltipText;
    this.action = action;
    this.iconTray = iconTray ? iconTray : [];
    this.inlineStyles = inlineStyles;
  }
}
