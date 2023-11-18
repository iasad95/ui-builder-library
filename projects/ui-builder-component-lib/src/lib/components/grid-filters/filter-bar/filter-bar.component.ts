import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostListener, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { cloneDeep } from 'lodash';
import moment from 'moment';
import { Subject, forkJoin } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FilterType } from '../../../enums/filter-type';
import { FilterDataRequest } from '../../../model/filter-data-request';
import { FilterOperator } from '../../../model/filter-operator';
import { GridFilterConfig } from '../../../model/grid-filter-config';
import { SelectOption } from '../../../model/select-option';
import { UserFilter } from '../../../model/user-filter';
import { GridModal } from '../enums/grid-modal.enum';
import { GridFiltersModalComponent } from '../grid-filters-modal/grid-filters-modal.component';
import { ManageFiltersModalComponent } from '../manage-filters-modal/manage-filters-modal.component';
import { GridFilterService } from '../services/grid-filter.service';
@Component({
  selector: 'lib-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss', '../styles/common-grid-modal.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FilterBarComponent implements OnInit, OnDestroy {
  @Output() applyFilter = new EventEmitter();
  @Output() searchStringChange: EventEmitter<string> = new EventEmitter<string>();
  public dateFormat: string;
  public gridFilterConfig: GridFilterConfig;
  public userFiltersList: FilterDataRequest[] = [];
  public standardFilters: SelectOption<any>[] = [];
  public savedFilters: SelectOption<any>[] = [];
  public showAllFilters = false;
  public readonly maxFilterCount = 3;
  public filters: SelectOption<number>[] = [];
  public activeFilter: FilterDataRequest;
  public responsiveWindowWidth: number;
  private componentDestroyed$: Subject<void> = new Subject();
  private filterOptions: FilterOperator<any>[] = [];
  private filterOperators: FilterOperator<any>[][] = [];
  private filterValues: FilterOperator<any>[] = [];
  @HostListener('window:resize', ['$event'])
  public onResize(event: Event): void {
    this.responsiveWindowWidth = (event.target as Window).innerWidth;
  }
  constructor(
    private readonly dialog: MatDialog,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly gridFilterService: GridFilterService,
  ) {}
  ngOnInit(): void {
    this.gridFilterService.standardFilters.forEach((standardFilter) => {
      this.standardFilters.push(new SelectOption(standardFilter.name, standardFilter.projectGridFilterId));
    });
    this.gridFilterService.gridFilterDefinitions.pipe(takeUntil(this.componentDestroyed$)).subscribe((filterDefinitions) => {
      this.filterOptions = this.gridFilterService.options;
      this.filterOperators = this.gridFilterService.operators;
      this.filterValues = this.gridFilterService.values;
      this.processFilterDataRequest();
    });
    this.gridFilterService.gridFilters.pipe(takeUntil(this.componentDestroyed$)).subscribe((userFiltersList) => {
      this.userFiltersList = userFiltersList;
      this.processFilterDataRequest();
    });
    this.gridFilterService.activeFilter.pipe(takeUntil(this.componentDestroyed$)).subscribe((activeFilter) => {
      this.activeFilter = cloneDeep(activeFilter);
      this.processFilterDataRequest();
      this.applyFilter.emit(this.activeFilter);
    });
    this.dateFormat = this.gridFilterService.dateFormat;
    this.responsiveWindowWidth = window.innerWidth;
  }
  ngOnDestroy(): void {
    this.componentDestroyed$.next(null);
    this.componentDestroyed$.complete();
  }
  public removeFilter(filter: SelectOption<number>): void {
    if (this.activeFilter?.userFilters.length === 1) {
      this.removeAllFilters();
    } else {
      this.activeFilter?.userFilters.splice(filter.value, 1);
      this.gridFilterService.applyUserFilter(this.activeFilter);
    }
  }
  public removeAllFilters(): void {
    this.filters = [];
    this.activeFilter = {
      ...this.activeFilter,
      userFilters: [],
    };
    this.gridFilterService.applyUserFilter({});
  }
  public toggleShowAllFilters(): void {
    this.showAllFilters = !this.showAllFilters;
    this.changeDetectorRef.detectChanges();
  }
  public handleApplyFilter(filter: FilterDataRequest): void {
    this.gridFilterService.applyUserFilter(filter);
  }
  public handleApplyStandardFilter(standardFilterValue: number): void {
    this.gridFilterService.applyUserFilter(standardFilterValue, true);
  }
  public handleOpenFilterModal(): void {
    this.dialog.open(GridFiltersModalComponent, {
      disableClose: true,
      width: '750px',
      minHeight: '500px',
      maxHeight: '750px',
      maxWidth: '80vw',
      panelClass: GridModal.GridFiltersModal,
      data: {},
    });
  }
  public handleManageFilterModal(): void {
    this.dialog.open(ManageFiltersModalComponent, {
      disableClose: true,
      width: '750px',
      minHeight: '500px',
      maxHeight: '750px',
      maxWidth: '80vw',
      panelClass: GridModal.ManageFiltersModal,
      data: {},
    });
  }
  public updateUserFilters(userFilter: FilterDataRequest): void {
    this.gridFilterService.createUpdateUserFilter(userFilter).subscribe((response) => {
      this.gridFilterService.applyUserFilter(userFilter);
    });
  }
  private processFilterDataRequest(): void {
    this.filters = [];
    this.activeFilter?.userFilters?.forEach((userFilterCriteria, userFilterCriteriaIndex) => {
      const filterOption = this.filterOptions.find((option) => option.value === userFilterCriteria.publicFieldName);
      if (!filterOption) {
        return;
      }
      const filterOperator = this.filterOperators[filterOption.identifier].find((operator) => operator.value === userFilterCriteria.operatorType);
      const filterString = filterOption.label + ' ' + filterOperator.label + ' ';
      const filterObservables = [];
      if (filterOperator.identifier2 === FilterType.AutoCompleteMulti) {
        const filterValues = this.filterValues[filterOption.identifier][filterOperator.identifier][0];
        userFilterCriteria.values.forEach((filterValue) => {
          if (filterValues.findIndex((controlFieldValue) => controlFieldValue.value?.toString() === filterValue?.toString()) < 0) {
            filterObservables.push(this.gridFilterService.getFilterOptionData(filterValues[0].backendQueryUrl, filterValue));
          }
        });
        if (filterObservables.length) {
          forkJoin(filterObservables).subscribe((filteredOptions) => {
            filteredOptions.forEach((filteredOption: any) => {
              if (filterValues.findIndex((option) => option.value === filteredOption.value) < 0) {
                filterValues.push(
                  new FilterOperator(filteredOption.key, filteredOption.value, filterValues[0].identifier, filterValues[0].identifier2, filterValues[0].backendQueryUrl),
                );
              }
            });
            this.processUserFilters(userFilterCriteria, filterOption, filterOperator, filterString, userFilterCriteriaIndex);
          });
        } else {
          this.processUserFilters(userFilterCriteria, filterOption, filterOperator, filterString, userFilterCriteriaIndex);
        }
      } else {
        this.processUserFilters(userFilterCriteria, filterOption, filterOperator, filterString, userFilterCriteriaIndex);
      }
    });
  }
  private processUserFilters(
    userFilterCriteria: UserFilter,
    filterOption: FilterOperator<any>,
    filterOperator: FilterOperator<any>,
    filterString: string,
    userFilterCriteriaIndex: number,
  ) {
    userFilterCriteria.values.forEach((filterValueKey, filterValueIndex) => {
      const filterValueObject = this.filterValues[filterOption.identifier][filterOperator.identifier][0].find(
        (filterParameterValue) => filterParameterValue.value?.toString() === filterValueKey,
      );
      let filterValue =
        this.filterValues[filterOption.identifier][filterOperator.identifier][0].find((filterParameterValue) => filterParameterValue.value?.toString() === filterValueKey)?.label ||
        '';
      if (filterOperator.identifier2 === FilterType.DateFilter) {
        filterValue = moment(filterValueKey).format(this.dateFormat);
      }
      if (filterOperator.identifier2 === FilterType.Text || filterOperator.identifier2 === FilterType.Number) {
        filterValue = filterValueKey;
      }
      filterString += filterValue + ' ';
      if (filterValueIndex !== userFilterCriteria.values?.length - 1 && filterValueObject?.identifier2) {
        filterString += filterValueObject.identifier2 + ' ';
      } else if (filterOperator.identifier2 === FilterType.DateFilter && filterValueIndex !== userFilterCriteria.values?.length - 1) {
        filterString += 'And ';
      }
    });
    this.filters.push(new SelectOption(filterString, userFilterCriteriaIndex));
    this.changeDetectorRef.detectChanges();
  }
  public onSearchStringChange(query: string): void {
    this.searchStringChange.emit(query);
  }
}
