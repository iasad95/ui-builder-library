import { moveItemInArray } from '@angular/cdk/drag-drop';
import { CurrencyPipe } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { cloneDeep } from 'lodash';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { Paginator } from 'primeng/paginator';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { EditCompleteEvent, PrimeNgEditEvent } from '../../model/edit-complete-event';
import { FilterDataRequest } from '../../model/filter-data-request';
import { FilterDefinition } from '../../model/filter-definition';
import { GridColumn } from '../../model/grid-column';
import { GridColumnChange } from '../../model/grid-column-change';
import { GridDataRequest } from '../../model/grid-data-request';
import { GridFilterConfig } from '../../model/grid-filter-config';
import { GridRow } from '../../model/grid-row';
import { GridSortDirection } from '../../model/grid-sort-direction';
import { ItemInfoLine } from '../../model/item-info-line';
import { ItemSummary } from '../../model/item-summary';
import { SelectOption } from '../../model/select-option';
import { UserFilter } from '../../model/user-filter';
import { GetDisplayValuePipe } from '../../pipes/get-display-value/get-display-value.pipe';
import { ColumnManagementData, ColumnManagementModalComponent } from '../column-management-modal/column-management-modal.component';
import { GridFilterService } from '../grid-filters/services/grid-filter.service';
import { GridService } from './grid.service';
import { GridMiscellaneousData } from './interfaces/grid-miscellaneous-data.interface';
@Component({
  selector: 'lib-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class GridComponent<T = unknown> implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  readonly paginatorManipulations = [
    { src: 'assets/icons/last-page.svg', elem: 'angledoublerighticon' },
    { src: 'assets/icons/prev-page.svg', elem: 'angledoublelefticon' },
    { src: 'assets/icons/down-chevron.svg', elem: 'chevrondownicon' },
  ];
  readonly defaultRowPerPageOptions: number[] = [10, 25, 50];
  readonly defaultRowsPerPage: number = 10;
  @Input() enableSelection = false;
  @Input() enableGridFilters = false;
  @Input() enableCreate = false;
  @Input() enableRefresh = false;
  @Input() enableTrash = false;
  @Input() isLoading = false;
  @Input() totalRecords = 0;
  @Input() rowsPerPage = this.defaultRowsPerPage;
  @Input() first = 0;
  @Input() rowsPerPageOptions: number[] = this.defaultRowPerPageOptions;
  @Input() paginatorDataTypeLabel = 'Records';
  @Input() selectAllConfirmButtonLabel: string;
  @Input() selectAllConfirmMsg: string;
  @Input() selectAllConfirmedMsg: string;
  @Input() selectAllExceptSomeRecordsConfirmedMsg: string;
  @Input() clearSelectionMsg = 'Clear selection';
  @Input() actionButtons: string[] = [];
  @Input() currencyDisplayCode: string = 'USD';
  @Input() minimumColumnWidth: number = -1;
  @Input() set sortField(value: string) {
    value ? (this.parsedSortField = this.allColumns?.find((c) => c.defaultSortColumn == value)?.name ?? value) : null;
  }
  get sortField(): string {
    return this.parsedSortField;
  }
  @Input() groupByField: GridColumn = null;
  @Input() gridFilterConfig: GridFilterConfig;
  @Input()
  set sortOrder(value: GridSortDirection) {
    this.parsedSortOrder = value === 'Ascending' ? 1 : value === 'Descending' ? -1 : null;
    this.createMenuItems(!!this.groupByField);
  }
  get sortOrder(): GridSortDirection {
    if (this.parsedSortOrder > 0) {
      return 'Ascending';
    }
    return this.parsedSortOrder < 0 ? 'Descending' : null;
  }
  @Input()
  set columns(columns: GridColumn[]) {
    this.allColumns = columns ?? [];
    this.filteredColumns = (columns ?? []).filter((c) => c.visible);
    this.calculateNumberAndPositionOfPinnedColumns();
  }
  get columns(): GridColumn[] {
    return this.allColumns ?? [];
  }
  @Input() set data(data: GridRow<T>[]) {
    this.processDisplayValues(data);
    if (!this.totalRecords) {
      this.totalRecords = data?.length;
    }
    if (this.columns?.length) {
      this.isLoading = false;
    }
    if (this.didPaginate) {
      setTimeout(() => {
        const els = this.getBtnElements();
        els.forEach((x) => {
          if (this.allRowsExpanded && !x.classList.contains('expanded')) {
            x.click();
          } else if (!this.allRowsExpanded && x.classList.contains('expanded')) {
            x.click();
          }
        });
      }, 200);
    } else if (this.groupByField) {
      this.expandAllGroups();
    }
  }
  get data(): GridRow<T>[] {
    return this.processedData;
  }
  @Input() filterDefinitions: FilterDefinition[] = [];
  @Input() userFiltersList: FilterDataRequest[] = [];
  @Input() dateFormat: string;
  @Input() maxPinnedColumns = 3;
  @Input() errorInlineMode = false;
  @Input() gridMiscellaneousData?: GridMiscellaneousData;
  @Output() lazyLoad = new EventEmitter<GridDataRequest>();
  @Output() columnsChange = new EventEmitter<GridColumnChange>();
  @Output() editComplete = new EventEmitter<EditCompleteEvent>();
  @Output() editChange = new EventEmitter<boolean>();
  @Output() bulkDelete = new EventEmitter<{ selectedRows: GridRow<T>[] }>();
  @Output() selectAllPages = new EventEmitter<boolean>();
  @Output() cellClicked = new EventEmitter<{ data: T; colName: string }>();
  @Output() createClicked = new EventEmitter<boolean>();
  @Output() refreshData = new EventEmitter<boolean>();
  @Output() showTrash = new EventEmitter<boolean>();
  @Output() actionButtonClicked = new EventEmitter<{
    event: string;
    data: T;
  }>();
  @Output() excludeItem = new EventEmitter<(string | number)[]>();
  @ViewChild('paginator') paginator: Paginator;
  private _paginatorContainerRef: ElementRef;
  @ViewChild('paginatorContainer')
  set paginatorContainerRef(value: ElementRef) {
    this._paginatorContainerRef = value;
    if (value) {
      this.updatePaginationButtons();
    }
  }
  public display = true;
  public selectedRows: GridRow<T>[] = [];
  public excludedRows: (string | number)[] = [];
  public processedData: GridRow<T>[] = [];
  public filteredColumns: GridColumn[] = [];
  public parsedSortOrder: number | null;
  public editFormControl: UntypedFormControl = new UntypedFormControl(null);
  public editSelectOptions: SelectOption<string | number | boolean>[] = [];
  public totalNumberOfPinnedColumns = 0;
  public columnManagementModalOpen = false;
  public expanded = true;
  public isEditInProgress = false;
  public allRowsExpanded = false;
  public selectAllPagesConfirmed = false;
  public currentPage: number = 0;
  private parsedSortField: string;
  private allColumns: GridColumn[] = [];
  private searchString: string;
  private searchStringSubject: Subject<string> = new Subject();
  private componentDestroyed$: Subject<void> = new Subject();
  private userFilter: UserFilter[];
  private lastChangedFieldValue;
  private didPaginate = false;
  private lazyLoadEvent: string;
  private firstChange: boolean = true;
  constructor(
    private dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef,
    private gridFilterService: GridFilterService,
    private getDisplayValuePipe: GetDisplayValuePipe,
    private currencyPipe: CurrencyPipe,
    private gridService: GridService,
  ) {}
  ngOnInit() {
    this.validateConfig();
    this.searchStringSubject
      .asObservable()
      .pipe(debounceTime(500), distinctUntilChanged(), takeUntil(this.componentDestroyed$))
      .subscribe((searchString) => {
        this.searchString = searchString;
        this.first = 0;
        this.emitLazyLoad();
      });
    this.createMenuItems(!!this.groupByField);
    this.emitGridMiscellaneousData();
  }
  ngAfterViewInit(): void {
    this.updatePaginationButtons();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['dateFormat']) {
      this.dateFormat = (changes?.['dateFormat'].currentValue || 'MM/DD/YYYYY').toUpperCase();
      this.gridFilterService.dateFormat = this.dateFormat;
    }
    if (changes?.['gridFilterConfig']) {
      this.gridFilterService.gridFilterConfig = changes['gridFilterConfig'].currentValue;
      this.gridFilterService.getGridFilterDefinations();
      this.gridFilterService.getUserFilters();
    }
    if (changes?.['filterDefinitions']) {
      this.gridFilterService.filterDefinitions = changes['filterDefinitions'].currentValue;
      this.gridFilterService.getGridFilterDefinations();
    }
    if (changes?.['userFiltersList']) {
      this.gridFilterService.userFiltersList = changes['userFiltersList'].currentValue;
      this.gridFilterService.getUserFilters();
    }
    if (changes?.['currencyDisplayCode']) {
      const currencyDisplaySymbol = this.currencyPipe.transform(0, changes?.['currencyDisplayCode'].currentValue).split('0.00')[0] ?? '$';
      this.gridFilterService.setCurrencyDisplaySymbol(currencyDisplaySymbol);
      this.processDisplayValues(this.data);
    }
  }
  ngOnDestroy() {
    this.componentDestroyed$.next(null);
    this.componentDestroyed$.complete();
  }
  private emitGridMiscellaneousData(): void {
    if (this.gridMiscellaneousData) {
      this.gridService.setGridMiscellaneousData(this.gridMiscellaneousData);
    }
  }
  private processDisplayValues(data: GridRow<T>[]): void {
    if (data && data.length) {
      this.selectedRows = [];
      data.forEach((row) => {
        Object.entries(row.data).forEach((entry) => {
          const col = this.allColumns.find((nextCol) => nextCol.name === entry[0]);
          this.setDisplayValue(col, row, entry[0]);
        });
        if (this.selectAllPagesConfirmed && !this.excludedRows.includes(row.id)) {
          this.selectedRows.push(row);
        }
      });
      this.processedData = data;
    } else {
      this.processedData = [];
    }
  }
  toggleAll() {
    const els = this.getBtnElements();
    els.forEach((x) => {
      if (this.allRowsExpanded && !x.classList.contains('expanded')) {
      } else if (!this.allRowsExpanded && x.classList.contains('expanded')) {
      } else {
        x.click();
      }
    });
  }
  public onSelectionChange(rowsData: GridRow<T>[]): void {
    if (this.selectAllPagesConfirmed && (rowsData.length === 0 || rowsData.length === this.data.length)) {
      this.data.map((item) => {
        const index = this.excludedRows.indexOf(item.id);
        if (index === -1 && rowsData.length === 0) {
          this.excludedRows.push(item.id);
        }
        if (index !== -1 && rowsData.length === this.data.length) {
          this.excludedRows.splice(index, 1);
        }
      });
      this.excludeItem.emit(this.excludedRows);
    }
  }
  private setDisplayValue(col: GridColumn, row: GridRow<Partial<T>>, fieldName: string): void {
    if (!row.displayValues) {
      row.displayValues = {};
    }
    row.displayValues[fieldName] = this.getDisplayValuePipe.transform(row.data?.[col?.name], col, this.dateFormat, this.currencyDisplayCode);
  }
  public isArray(data: any): boolean {
    return Array.isArray(data);
  }
  public onLazyLoad(event: LazyLoadEvent): void {
    if (this.lazyLoadEvent === JSON.stringify(event)) return;
    this.lazyLoadEvent = JSON.stringify(event);
    this.parsedSortOrder = event.sortOrder;
    this.sortField = event.sortField;
    this.first = this.getFirstNthOfPage(this.currentPage, this.rowsPerPage);
    if (this.firstChange) {
      this.firstChange = false;
      return;
    }
    this.emitLazyLoad();
  }
  public handleSearchStringChange(query: string): void {
    this.searchStringSubject.next(query);
  }
  public paginate(event: { first: number; rows: number; page: number }): void {
    this.currentPage = event.page;
    this.didPaginate = true;
    this.first = this.getFirstNthOfPage(event.page, event.rows);
    this.rowsPerPage = event.rows;
    this.updatePaginationButtons();
    this.emitLazyLoad();
  }
  private updatePaginationButtons(): void {
    const paginatorHtmlRef = this._paginatorContainerRef?.nativeElement as HTMLDivElement;
    if (paginatorHtmlRef) {
      this.paginatorManipulations.forEach(({ src, elem }) => {
        paginatorHtmlRef?.querySelector(elem)?.firstChild?.replaceWith(Object.assign(document.createElement('img'), { src }));
      });
    }
  }
  public onSelectAllPages($event): void {
    this.selectAllPagesConfirmed = $event;
    if (!$event) {
      this.selectedRows = [];
      this.excludedRows = [];
      this.excludeItem.emit([]);
    }
    this.selectAllPages.emit($event);
  }
  public onBulkDelete(): void {
    this.bulkDelete.emit({ selectedRows: this.selectedRows });
  }
  private emitLazyLoad() {
    const request: GridDataRequest = {
      from: this.first,
      size: this.rowsPerPage,
      userFilters: this.userFilter,
      sortField: this.allColumns?.find((c) => c.name == this.sortField)?.defaultSortColumn ?? this.sortField,
      sortDirection: this.parsedSortOrder > 0 ? 'Ascending' : 'Descending',
      groupByField: this.allColumns?.find((c) => c.name == this.groupByField?.name)?.defaultSortColumn ?? this.groupByField?.name,
      searchString: this.searchString,
    };
    this.lazyLoad.emit(request);
  }
  private validateConfig() {
    this.rowsPerPage = this.rowsPerPage ?? this.rowsPerPageOptions?.[0] ?? this.defaultRowsPerPage;
    if (this.rowsPerPageOptions?.every((option) => option !== this.rowsPerPage)) {
      this.rowsPerPageOptions.unshift(this.rowsPerPage);
    }
    this.rowsPerPageOptions = this.rowsPerPageOptions?.sort((a, b) => a - b);
  }
  private createMenuItems(ungroup = false) {
    this.allColumns.forEach((column) => {
      const menuItems: MenuItem[] = [
        {
          label: column.pinned ? 'Unpin' : 'Pin',
          icon: 'icon-pin',
          styleClass: column.pinned ? '' : 'pin-menu-item',
          command: (event) => {
            if (!column.pinned && this.totalNumberOfPinnedColumns >= this.maxPinnedColumns) {
              return;
            }
            column.pinned = !column.pinned;
            if (column.pinned) {
              event.item.label = 'Unpin';
              event.item.styleClass = '';
            } else {
              event.item.styleClass = 'pin-menu-item';
            }
            this.filterGridColumns();
            this.calculateNumberAndPositionOfPinnedColumns();
            this.columnsChange.emit({
              columns: this.allColumns,
              groupByField: this.groupByField,
            });
          },
        },
      ];
      if (column.sortable) {
        menuItems.push({
          label: ungroup ? 'Ungroup Grid' : 'Group by this field',
          icon: 'icon-group-by',
          command: () => {
            if (ungroup) {
              const field = this.allColumns.find((x) => x.name === this.groupByField.name);
              if (field) {
                field.visible = true;
              }
              this.groupByField = null;
              this.filteredColumns = this.allColumns.filter((nextColumn) => nextColumn.visible);
            } else {
              column.pinned = false;
              column.visible = false;
              this.filteredColumns = this.filteredColumns.filter((col) => col.visible);
              this.groupByField = column;
            }
            this.createMenuItems(!ungroup);
            this.display = false;
            this.changeDetectorRef.detectChanges();
            this.display = true;
            this.changeDetectorRef.detectChanges();
            this.calculateNumberAndPositionOfPinnedColumns();
            this.columnsChange.emit({
              groupByField: this.groupByField,
              columns: this.allColumns,
            });
          },
        } as MenuItem);
      }
      menuItems.push({
        label: 'Remove',
        icon: 'icon-remove',
        command: () => {
          column.visible = false;
          this.filteredColumns = this.filteredColumns.filter((col) => col.visible);
          this.changeDetectorRef.detectChanges();
          this.columnsChange.emit({
            groupByField: this.groupByField,
            columns: this.allColumns,
          });
        },
      } as MenuItem);
      if (column.sortable) {
        menuItems.push({ separator: true } as MenuItem);
        menuItems.push({
          label: 'Sort Ascending',
          icon: 'icon-long-arrow-up',
          styleClass: this.sortOrder === 'Ascending' && this.sortField === column.name ? 'selected' : '',
          command: () => {
            this.sortField = column.name;
            this.sortOrder = 'Ascending';
            this.first = 0;
            this.changeDetectorRef.detectChanges();
          },
        } as MenuItem);
        menuItems.push({
          label: 'Sort Descending',
          icon: 'icon-long-arrow-down',
          styleClass: this.sortOrder === 'Descending' ? 'selected' : '',
          command: () => {
            this.sortField = column.name;
            this.sortOrder = 'Descending';
            this.first = 0;
            this.changeDetectorRef.detectChanges();
          },
        } as MenuItem);
      }
      column.menuItems = menuItems;
    });
  }
  public openManagementModal(): void {
    const dialogRef = this.dialog.open(ColumnManagementModalComponent, {
      disableClose: true,
      panelClass: 'grid-column-management-component',
      data: {
        columns: cloneDeep(this.allColumns),
        groupByField: this.groupByField ?? {},
        maxPinnedColumns: this.maxPinnedColumns,
      } as ColumnManagementData,
    });
    this.columnManagementModalOpen = true;
    dialogRef.afterClosed().subscribe((gridColumnChange: GridColumnChange) => {
      if (gridColumnChange) {
        const columns = gridColumnChange.columns;
        this.groupByField = gridColumnChange.groupByField;
        this.emitLazyLoad();
        this.display = false;
        this.changeDetectorRef.detectChanges();
        this.display = true;
        if (columns && columns.length) {
          this.allColumns = columns;
          this.filteredColumns = gridColumnChange.filteredColumns;
          this.calculateNumberAndPositionOfPinnedColumns();
          this.columnsChange.emit({ columns, groupByField: this.groupByField });
        }
        this.createMenuItems(!!this.groupByField);
        this.columnManagementModalOpen = false;
        this.changeDetectorRef.detectChanges();
      }
    });
  }
  public handleEditComplete(event: PrimeNgEditEvent): void {
    this.isEditInProgress = false;
    this.editChange.emit(this.isEditInProgress);
    this.changeDetectorRef.detectChanges();
    if (!Array.isArray(this.lastChangedFieldValue) && !Array.isArray(this.editFormControl.value) && this.lastChangedFieldValue === this.editFormControl.value) {
      return;
    }
    event.data.row.data[event.field] = this.editFormControl.value;
    this.setDisplayValue(event.data.column, event.data.row, event.field);
    this.editComplete.emit(new EditCompleteEvent(event, this.lastChangedFieldValue));
  }
  public handleEditInit(event: PrimeNgEditEvent) {
    const col = event.data.column;
    let value = event.data.row.data[event.field];
    if (Array.isArray(value) && col.controlType === 'SingleSelect') {
      value = value[0];
    }
    this.lastChangedFieldValue = value;
    let prevValue = value;
    if (prevValue?.en) prevValue = prevValue?.en;
    this.editFormControl = new UntypedFormControl(prevValue);
    this.editSelectOptions = Array.isArray(col.values) ? col.values.map((v) => new SelectOption(v.Value, v.Key)) : [];
    if (col.controlType === 'Boolean') {
      this.editSelectOptions = [new SelectOption('Select one', null), new SelectOption('Yes', true), new SelectOption('No', false)];
    }
    if (col.controlType === 'AutoComplete') {
      if (col.apiUrl) {
      } else {
        event.data.row.data.entity = [
          {
            searchFunction: (text: string) => new BehaviorSubject(['test 1', 'test 2']).asObservable(),
            mappingFunction: (text: string) => {
              return new BehaviorSubject(new ItemSummary(new ItemInfoLine(text, text, () => {}), [], [], []));
            },
            filterFunction: () => true,
            sortFunction: () => 1,
          },
        ];
      }
    }
    this.isEditInProgress = true;
    this.editChange.emit(this.isEditInProgress);
    this.changeDetectorRef.detectChanges();
  }
  public handleEditCancel(event: PrimeNgEditEvent): void {
    this.isEditInProgress = false;
    this.editChange.emit(this.isEditInProgress);
    this.changeDetectorRef.detectChanges();
  }
  public handleUnpinColumn(column: GridColumn, event: MouseEvent): void {
    column.pinned = !column.pinned;
    if (!column.pinned) {
      column.menuItems[0].label = 'Pin';
    }
    this.filterGridColumns();
    this.calculateNumberAndPositionOfPinnedColumns();
    event.stopPropagation();
    event.preventDefault();
    this.columnsChange.emit({
      columns: this.allColumns,
      groupByField: this.groupByField,
    });
  }
  public colReorder(event: { columns: GridColumn[]; dragIndex: number; dropIndex: number }): void {
    const firstUnpinnedColumnIndex = this.filteredColumns.findIndex((column, i) => i !== event.dropIndex && !column.pinned);
    if (event.dropIndex > firstUnpinnedColumnIndex && this.filteredColumns[event.dropIndex].pinned) {
      this.filteredColumns[event.dropIndex].pinned = false;
      this.calculateNumberAndPositionOfPinnedColumns();
    } else if (firstUnpinnedColumnIndex > 0 && event.dropIndex < firstUnpinnedColumnIndex - 1) {
      if (!this.filteredColumns[event.dropIndex].pinned && firstUnpinnedColumnIndex <= this.maxPinnedColumns) {
        this.filteredColumns[event.dropIndex].pinned = true;
        this.calculateNumberAndPositionOfPinnedColumns();
        return;
      } else if (!this.filteredColumns[event.dropIndex].pinned) {
        moveItemInArray(this.filteredColumns, event.dropIndex, event.dragIndex);
        this.calculateNumberAndPositionOfPinnedColumns();
        return;
      }
    }
    this.calculateNumberAndPositionOfPinnedColumns();
    const reorderedColumnIndex = this.allColumns.findIndex((column) => column.name === this.filteredColumns[event.dropIndex].name);
    if (event.dropIndex !== 0) {
      let precedingColumnIndex = this.allColumns.findIndex((column) => column === this.filteredColumns[event.dropIndex - 1]);
      if (precedingColumnIndex < reorderedColumnIndex) {
        precedingColumnIndex += 1;
      }
      moveItemInArray(this.allColumns, reorderedColumnIndex, precedingColumnIndex);
    } else {
      moveItemInArray(this.allColumns, reorderedColumnIndex, 0);
    }
    this.columnsChange.emit({
      groupByField: this.groupByField,
      columns: this.allColumns,
    });
  }
  public colResize(event): void {
    const col = this.allColumns.find((nextCol) => nextCol.label === event.element.innerText);
    col.width = (col.width ?? 200) + event.delta;
    if (this.minimumColumnWidth > 0) col.width = col.width >= this.minimumColumnWidth ? col.width : this.minimumColumnWidth;
    this.calculateNumberAndPositionOfPinnedColumns();
    this.changeDetectorRef.detectChanges();
    this.columnsChange.emit({
      groupByField: this.groupByField,
      columns: this.allColumns,
    });
  }
  public calculateNumberAndPositionOfPinnedColumns(): void {
    this.totalNumberOfPinnedColumns = this.filteredColumns.filter((column) => column.pinned).length;
    let position = 70;
    this.filteredColumns.forEach((column, index) => {
      if (index > 0) {
        position += this.filteredColumns[index - 1].width ?? 200;
      }
      column.pinLocationInPx = position;
    });
    this.createMenuItems(!!this.groupByField);
  }
  public handleApplyFilter(userFilter: FilterDataRequest) {
    if (!userFilter || Object.keys(userFilter).length < 1) {
      this.userFilter = [];
    } else {
      if (userFilter.userFilters) {
        this.userFilter = userFilter.userFilters;
      }
      if (userFilter.sort?.direction) {
        this.sortOrder = userFilter.sort.direction;
      }
      if (userFilter.sort?.field) {
        this.sortField = userFilter.sort.field;
      }
    }
    this.first = 0;
    this.emitLazyLoad();
  }
  private getBtnElements() {
    return document.querySelectorAll<HTMLButtonElement>('#expandBtn');
  }
  private expandAllGroups() {
    setTimeout(() => {
      const els = this.getBtnElements();
      els.forEach((x) => {
        x.click();
      });
      this.allRowsExpanded = true;
    }, 200);
  }
  private filterGridColumns(): void {
    const columnsCopy: GridColumn[] = cloneDeep(this.filteredColumns);
    this.filteredColumns = this.allColumns
      .filter((nextColumn) => nextColumn.visible)
      .sort((a, b) => {
        if (a.pinned && b.pinned) {
          return columnsCopy.findIndex((k) => k.name === a.name) - columnsCopy.findIndex((k) => k.name === b.name);
        }
        return a.pinned ? -1 : 1;
      });
  }
  private getFirstNthOfPage(page: number, rowsPerPage: number): number {
    return page * rowsPerPage;
  }
  public emitClickCellEvent(rowData: GridRow<T>, colName: string, controlType: string): void {
    if (controlType !== 'ActionButtons') this.cellClicked.emit({ data: rowData.data, colName });
  }
  public emitRefreshEvent(): void {
    this.refreshData.emit(true);
  }
  public emitCreateEvent(): void {
    this.createClicked.emit(true);
  }
  public emitTrashEvent(event: boolean): void {
    this.selectedRows = [];
    this.excludedRows = [];
    this.showTrash.emit(event);
  }
  public emitActionButton(event: string, rowData: GridRow<T>): void {
    this.actionButtonClicked.emit({ event, data: rowData.data });
  }
  public updateCurrentPage(currentPage: number): void {
    this.paginator.changePage(currentPage);
  }
  public resetSelectedRows(): void {
    this.selectedRows = [];
    this.excludedRows = [];
    this.excludeItem.emit([]);
    this.selectAllPagesConfirmed = false;
  }
  public onRowSelected($event: GridRow<T>): void {
    if (this.selectAllPagesConfirmed) {
      this.excludedRows = this.excludedRows.filter((value) => value !== $event.data['id']);
      this.excludeItem.emit(this.excludedRows);
    }
  }
  public onRowUnselected($event: GridRow<T>): void {
    if (this.selectAllPagesConfirmed) {
      this.excludedRows.push($event.data['id']);
      this.excludeItem.emit(this.excludedRows);
    }
  }
}
