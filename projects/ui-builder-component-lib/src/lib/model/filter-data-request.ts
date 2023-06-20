import { GridSortDirection } from './grid-sort-direction';
import { UserFilter } from './user-filter';
export interface FilterDataRequest {
  name: string;
  projectGridFilterId?: string;
  collectionName?: string;
  userFilters: UserFilter[];
  sort?: {
    field: string;
    direction: GridSortDirection;
  };
  order?: number;
}
