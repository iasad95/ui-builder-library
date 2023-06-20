import { MenuItem } from 'primeng/api';
export type GridControlType =
  | 'Date'
  | 'MultiSelect'
  | 'Number'
  | 'Percent'
  | 'SingleSelect'
  | 'Text'
  | 'AutoComplete'
  | 'AutoCompleteMulti'
  | 'Currency'
  | 'Boolean'
  | 'MultiField'
  | null;
export interface GridKeyValueDto {
  Key: string | number;
  Value: string;
}
export interface GridColumn {
  name: string;
  label?: string;
  visible: boolean;
  editable?: boolean;
  requiredForEdit?: boolean;
  filterable?: boolean;
  sortable?: boolean;
  defaultSortColumn?: string;
  controlType?: GridControlType;
  values?: GridKeyValueDto[];
  apiUrl?: string;
  pinned?: boolean;
  menuItems?: MenuItem[];
  groupName?: string;
  groupOrder?: number;
  width?: number;
  pinLocationInPx?: number;
  sortOrder?: number;
}
