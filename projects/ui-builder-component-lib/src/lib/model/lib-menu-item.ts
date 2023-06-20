import { TemplateRef } from '@angular/core';
export interface LibMenuItem {
  templateRef?: TemplateRef<HTMLElement>;
  title?: string;
  titlePrefix?: string;
  titleSuffix?: string;
  iconUrl?: string;
  iconName?: string;
  cssClass?: string;
  active?: boolean;
  disabled?: boolean;
  separator?: boolean;
  subMenu?: LibMenuItem[];
  listItem?: unknown;
  listItemIndex?: number;
  command?: (event?: LibMenuItem) => void;
}
