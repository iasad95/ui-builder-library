import { StatusTypes } from '../enums/status-types';
export interface ToastrData {
  clickToClose?: boolean;
  description: string;
  hideClose?: boolean;
  life?: number;
  loading?: boolean;
  markCheck?: boolean;
  title: string;
  toastrIcon: string;
  type?: `${StatusTypes}`;
}
