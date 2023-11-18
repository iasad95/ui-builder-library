import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { FilterType } from '../../../enums/filter-type';
import { FilterDataRequest } from '../../../model/filter-data-request';
import { FilterDefinition } from '../../../model/filter-definition';
import { FilterOperator } from '../../../model/filter-operator';
import { GridFilterConfig } from '../../../model/grid-filter-config';
import { CommonOperations } from '../../../operations/operations';
@Injectable({ providedIn: 'root' })
export class GridFilterService {
  public gridFilterConfig: GridFilterConfig;
  public userFiltersList: FilterDataRequest[] = [];
  public savedFiltersList: FilterDataRequest[] = [];
  public dateFormat: string;
  public filterDefinitions: FilterDefinition[];
  public standardFilters: FilterDataRequest[] = [];
  public options = [];
  public operators = [];
  public values = [];
  private _activeFilterIndex: number;
  private gridFiltersSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  private gridFilterDefinitionsSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  private activeFilterChanged: BehaviorSubject<any> = new BehaviorSubject(null);
  private currencyDisplaySymbolSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  get gridFilters(): Observable<FilterDataRequest[]> {
    return this.gridFiltersSubject.asObservable();
  }
  get gridFilterDefinitions(): Observable<FilterDefinition[]> {
    return this.gridFilterDefinitionsSubject.asObservable();
  }
  get activeFilter(): Observable<FilterDataRequest> {
    return this.activeFilterChanged.asObservable();
  }
  get currencyDisplaySymbol(): Observable<string> {
    return this.currencyDisplaySymbolSubject.asObservable();
  }
  applyUserFilter(activeFilter, standardFilter?: boolean): void {
    if (standardFilter) {
      this.activeFilterChanged.next(this.standardFilters.find((filter) => filter.projectGridFilterId === activeFilter));
    } else {
      this.activeFilterChanged.next(activeFilter);
    }
  }
  getUserFilters(): void {
    if (this.gridFilterConfig) {
      this.gridFilterConfig?.handleGetFilters().subscribe((filters) => {
        this.userFiltersList = filters;
        this.savedFiltersList = filters;
        this.gridFiltersSubject.next(filters);
      });
    } else {
      this.gridFiltersSubject.next(this.userFiltersList);
    }
  }
  public updateAllFilters(userFiltersList: Array<FilterDataRequest>): void {
    if (this.gridFilterConfig && this.gridFilterConfig?.handleUpdateAllFilters) {
      this.gridFilterConfig?.handleUpdateAllFilters(userFiltersList).subscribe(() => this.getUserFilters());
    } else {
      this.userFiltersList = userFiltersList.sort(({ order: a }, { order: b }) => b - a);
      this.gridFiltersSubject.next(this.userFiltersList);
    }
  }
  getGridFilterDefinations(): void {
    if (this.gridFilterConfig) {
      this.gridFilterConfig?.handleGetFilterDefinitions().subscribe((filterDefinitions) => {
        this.filterDefinitions = filterDefinitions;
        this.processFilterDefinitions();
        this.gridFilterDefinitionsSubject.next(filterDefinitions);
      });
    } else {
      this.processFilterDefinitions();
      this.gridFilterDefinitionsSubject.next(this.filterDefinitions);
    }
  }
  createUpdateUserFilter(userFilter: FilterDataRequest, applyOnly: boolean = false): Observable<any> {
    if (userFilter) {
      if (this.gridFilterConfig && !applyOnly) {
        if (userFilter.projectGridFilterId) {
          return this.gridFilterConfig?.handleUpdateFilters(userFilter).pipe(tap((response) => this.getUserFilters()));
        } else {
          return this.gridFilterConfig?.handleCreateFilters(userFilter).pipe(tap((response) => this.getUserFilters()));
        }
      } else {
        return of({}).pipe(
          tap(() => {
            if (userFilter.projectGridFilterId) {
              this._activeFilterIndex = this.userFiltersList.findIndex((userFilterCriteria) => userFilterCriteria.projectGridFilterId === userFilter.projectGridFilterId);
            }
            if (this.userFiltersList[this._activeFilterIndex]) {
              this.userFiltersList[this._activeFilterIndex] = userFilter;
            } else {
              userFilter.projectGridFilterId = CommonOperations.randomString();
              userFilter.order = this.userFiltersList.length;
              this.userFiltersList.push(userFilter);
            }
            this.gridFiltersSubject.next(this.userFiltersList);
          }),
        );
      }
    }
    return null;
  }
  deleteUserFilter(filterIndex: number): void {
    const projectGridFilterId = this.userFiltersList[filterIndex]?.projectGridFilterId;
    if (this.gridFilterConfig) {
      this.gridFilterConfig?.handleDeleteFilters(projectGridFilterId).subscribe((response) => {
        this.getUserFilters();
      });
    } else {
      this.userFiltersList.splice(filterIndex, 1);
      this.getUserFilters();
    }
  }
  setCurrencyDisplaySymbol(currencyDisplaySymbol: string): void {
    this.currencyDisplaySymbolSubject.next(currencyDisplaySymbol);
  }
  private getListSortedByMostAccurateMatch(source: { key: string }[], query: string) {
    const sort = (a: { key: string }, b: { key: string }) => {
      const aFirstName = a.key.split(' ')[0];
      const aLastName = a.key.split(' ')[1];
      const bFirstName = b.key.split(' ')[0];
      const bLastName = b.key.split(' ')[1];
      const result = aFirstName?.localeCompare(bFirstName);
      return result !== 0 ? result : aLastName?.localeCompare(bLastName);
    };
    const breakListIntoSortSections = (list: { key: string }[], searchString: string) => {
      const searchLowercased: string = searchString.toLowerCase();
      const exactMatchList = [];
      const startsWithList = [];
      const includesList = [];
      list.forEach((nextSummary) => {
        const infoLines: string[] = [];
        infoLines.push(nextSummary.key.toLowerCase());
        if (infoLines.find((nextLine) => nextLine === searchLowercased)) {
          exactMatchList.push(nextSummary);
        } else if (infoLines.find((nextLine) => nextLine.startsWith(searchLowercased))) {
          startsWithList.push(nextSummary);
        } else if (infoLines.find((nextLine) => nextLine.includes(searchLowercased))) {
          includesList.push(nextSummary);
        }
      });
      return [exactMatchList, startsWithList, includesList];
    };
    const separatedLists = breakListIntoSortSections(source, query);
    const resultList = [];
    for (let i = 0; i < 3; i++) {
      separatedLists[i] = separatedLists[i].sort(sort);
      resultList.push(...separatedLists[i]);
    }
    return resultList;
  }
  getFiltersOptions(backendQueryUrl: string, searchString: string): Observable<any> {
    if (this.gridFilterConfig) {
      return this.gridFilterConfig?.handleGetFilterOptions(backendQueryUrl, searchString).pipe(map((list) => this.getListSortedByMostAccurateMatch(list, searchString)));
    } else {
      return of([
        {
          key: 'Testing Value - 1',
          value: 123,
        },
        {
          key: 'Test Venti - 2',
          value: 124,
        },
        {
          key: 'Test Value - 2',
          value: 125,
        },
        {
          key: 'First Value - 3',
          value: 126,
        },
      ]).pipe(map((list) => this.getListSortedByMostAccurateMatch(list, searchString)));
    }
  }
  getFilterOptionData(backendQueryUrl: string, value: string): Observable<any> {
    if (this.gridFilterConfig) {
      return this.gridFilterConfig?.handleGetFilterOptionData(backendQueryUrl, value);
    } else {
      return of({
        key: 'Test Value - ' + value,
        value: value,
      }).pipe(delay(500));
    }
  }
  processFilterDefinitions(): void {
    let filterDefinitionIndex = 0;
    this.options = [];
    this.operators = [];
    this.values = [];
    this.filterDefinitions?.forEach((filterDefinition) => {
      if (filterDefinition.displayedToUser) {
        const operators = [];
        const values = [];
        filterDefinition.filterCriterias.forEach((userFilter, userFilterIndex) => {
          const userFiltersValues = [];
          userFilter.filterParameters.some((filterParameter, filterParameterIndex) => {
            const filterParametersValues = [];
            if (
              filterParameter.values.length === 0 &&
              filterParameter.controlType === FilterType.DateFilter &&
              ((userFilter.operator.value === 'Between' && filterParameterIndex !== 1) || userFilter.operator.value !== 'Between')
            ) {
              filterParametersValues.push(new FilterOperator(null, null, filterParameter.controlType, filterParameter.separator));
            } else if (
              filterParameter.values.length === 0 &&
              (filterParameter.controlType === FilterType.Currency || filterParameter.controlType === FilterType.Text || filterParameter.controlType === FilterType.Number)
            ) {
              filterParametersValues.push(new FilterOperator(null, null, filterParameter.controlType, filterParameter.separator, filterDefinition.publicFieldName));
            } else if (filterParameter.values.length === 0 && filterParameter.controlType === FilterType.AutoCompleteMulti) {
              filterParametersValues.push(new FilterOperator(null, null, filterParameter.controlType, filterParameter.separator, filterDefinition.publicFieldName));
            } else {
              filterParameter.values.forEach((filterValue) => {
                if (filterParameter.controlType === FilterType.AutoCompleteMulti) {
                  filterParametersValues.push(
                    new FilterOperator(filterValue.value, filterValue.key, filterParameter.controlType, filterParameter.separator, filterDefinition.publicFieldName),
                  );
                } else {
                  filterParametersValues.push(new FilterOperator(filterValue.value, filterValue.key, filterParameter.controlType, filterParameter.separator));
                }
              });
            }
            userFiltersValues.push(filterParametersValues);
          });
          if (userFiltersValues.length || userFilter.filterParameters.length === 0) {
            values.push(userFiltersValues);
            operators.push(new FilterOperator(userFilter.operator.label, userFilter.operator.value, userFilterIndex, userFilter.filterParameters[0]?.controlType));
          }
        });
        if (operators.length) {
          this.options.push(new FilterOperator(filterDefinition.label, filterDefinition.publicFieldName, filterDefinitionIndex));
          this.operators.push(operators);
          this.values.push(values);
          filterDefinitionIndex += 1;
        }
      }
    });
  }
}
