import { ManageFiltersModalMiscellaneousData } from '../../grid-filters/manage-filters-modal/manage-filters-modal.interface';
import { SelectFilterGridMiscellaneousData } from '../../grid-filters/select-filter/select-filter.interface';
export interface GridMiscellaneousData {
  gridFiltersModal?: {
    selectFilter?: SelectFilterGridMiscellaneousData;
  };
  manageFiltersModal?: ManageFiltersModalMiscellaneousData;
}
