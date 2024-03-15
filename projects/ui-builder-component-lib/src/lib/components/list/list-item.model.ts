export class ListItemModel {
  title?: string;
  label: string;
  labelIconUrl?: string;
  labelIconName?: string;
  value?: string;
  actionName?: string;
  cssClass?: string;
  disabled?: boolean;
  checked?: boolean;
  command?: (event?: ListItemModel) => void;
}
