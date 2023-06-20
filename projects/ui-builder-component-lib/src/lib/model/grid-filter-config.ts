import { Observable } from 'rxjs';
import { FilterDataRequest } from './filter-data-request';
import { FilterDefinition } from './filter-definition';
export interface GridFilterConfig {
  handleGetFilters(): Observable<FilterDataRequest[]>;
  handleUpdateAllFilters(filterDataRequest: FilterDataRequest[]): Observable<FilterDataRequest[]>;
  handleGetFilterDefinitions(): Observable<FilterDefinition[]>;
  handleCreateFilters(userFilter: FilterDataRequest): Observable<any>;
  handleUpdateFilters(userFilter: FilterDataRequest): Observable<any>;
  handleDeleteFilters(projectGridFilterId: string): Observable<any>;
  handleGetFilterOptions(backendQueryUrl: string, searchString: string): Observable<any>;
  handleGetFilterOptionData(backendQueryUrl: string, searchKey: string): Observable<any>;
}
