import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { FilterDataRequest } from '../../model/filter-data-request';
import { GridRow } from '../../model/grid-row';
@Component({
  selector: 'lib-grid-toolbar',
  templateUrl: `./grid-toolbar.component.html`,
  styleUrls: [`./grid-toolbar.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarComponent<T = unknown> {
  @Input() enableCreate: boolean = false;
  @Input() enableRefresh: boolean = false;
  @Input() enableTrash: boolean = false;
  @Input() enableSelection: boolean = false;
  @Input() enableGridFilters: boolean = false;
  @Input() isEditInProgress: boolean = false;
  @Input() rowsPerPage: number;
  @Input() selectAllConfirmMsg: string;
  @Input() selectAllConfirmedMsg: string;
  @Input() selectAllExceptSomeRecordsConfirmedMsg: string;
  @Input() clearSelectionMsg = 'Clear selection';
  @Input() totalRecords = 0;
  @Input() excludedRows: (string | number)[];
  @Input() selectAllConfirmButtonLabel: string;
  @Input() selectedRows: GridRow<T>[] = [];
  @Input() selectAllPagesConfirmed: boolean;
  @Output() createClicked = new EventEmitter<boolean>();
  @Output() refreshData = new EventEmitter<boolean>();
  @Output() showTrash = new EventEmitter<boolean>();
  @Output() userFilter = new EventEmitter<FilterDataRequest>();
  @Output() selectAllPages = new EventEmitter<boolean>();
  @Output() searchStringSubject: Subject<string> = new Subject();
  private trashSelected: boolean = false;
  public emitRefreshEvent(): void {
    this.refreshData.emit(true);
  }
  public emitCreateEvent(): void {
    this.createClicked.emit(true);
  }
  public emitTrashEvent(): void {
    this.trashSelected = !this.trashSelected;
    this.showTrash.emit(this.trashSelected);
  }
  public handleSearchStringChange(query: string): void {
    this.searchStringSubject.next(query);
  }
  public handleApplyFilter(userFilter: FilterDataRequest) {
    this.userFilter.emit(userFilter);
  }
  public onSelectAllPages(): void {
    this.selectAllPages.emit(!this.selectAllPagesConfirmed);
  }
}
