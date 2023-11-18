import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FilterDataRequest } from '../../../model/filter-data-request';
import { ItemActionHandler } from '../../../model/item-action-handler';
import { ConfirmationModalComponent } from '../../confirmation-modal/confirmation-modal.component';
import { GridService } from '../../grid/grid.service';
import { PopupModalService } from '../../modal/popup-modal/popup-modal.service';
import { GridModal } from '../enums/grid-modal.enum';
import { GridFiltersModalComponent } from '../grid-filters-modal/grid-filters-modal.component';
import { GridFilterService } from '../services/grid-filter.service';
import { ManageFiltersModalMiscellaneousData } from './manage-filters-modal.interface';
@Component({
  selector: 'lib-manage-filters-modal',
  templateUrl: './manage-filters-modal.component.html',
  styleUrls: ['./manage-filters-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ManageFiltersModalComponent implements OnInit, OnDestroy {
  public manageFiltersModalMiscellaneousData: ManageFiltersModalMiscellaneousData;
  public userFiltersList: FilterDataRequest[] = [];
  public tempUserFiltersList: FilterDataRequest[];
  public headerIconTray: ItemActionHandler[] = [];
  private componentDestroyed$: Subject<void> = new Subject();
  constructor(
    private dialogRef: MatDialogRef<ManageFiltersModalComponent>,
    private dialog: MatDialog,
    private domSanitizer: DomSanitizer,
    private gridFilterService: GridFilterService,
    private popupModalService: PopupModalService,
    private gridService: GridService,
    @Inject(MAT_DIALOG_DATA) public modalData: FilterDataRequest,
  ) {
    this.gridFilterService.gridFilters.pipe(takeUntil(this.componentDestroyed$)).subscribe((userFiltersList) => {
      this.userFiltersList = userFiltersList;
      this.tempUserFiltersList = this.userFiltersList.map((filter) => filter);
    });
  }
  ngOnInit(): void {
    this.headerIconTray.push(
      new ItemActionHandler(this.domSanitizer.bypassSecurityTrustHtml('<i class="icon-gen3-warning"></i>'), null, this.domSanitizer.bypassSecurityTrustHtml('test')),
    );
    this.manageFiltersModalMiscellaneousData = this.gridService.gridMiscellaneousData?.manageFiltersModal;
  }
  ngOnDestroy(): void {
    this.componentDestroyed$.next(null);
    this.componentDestroyed$.complete();
  }
  public handleClose(): void {
    this.dialogRef.close(true);
  }
  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tempUserFiltersList, event.previousIndex, event.currentIndex);
  }
  public handleApplyAll(): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      disableClose: true,
      width: '500px',
      data: {
        title: 'Are you sure want to save changes?',
        headerIconTray: this.headerIconTray,
        dialogMessage: `This action can't be undone.`,
        confirmText: 'Continue',
      },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((response) => {
        if (!response) {
          return;
        }
        this.saveFiltersList();
        this.handleClose();
      });
  }
  public saveFiltersList(): void {
    this.gridFilterService.updateAllFilters(
      this.tempUserFiltersList.map((userFilter, order) => ({
        ...userFilter,
        order,
      })),
    );
  }
  public handleClearAll(): void {
    this.tempUserFiltersList = [];
  }
  public handleApplyFilter(filterDataRequest: FilterDataRequest): void {
    this.gridFilterService.applyUserFilter(filterDataRequest);
  }
  public handleEditFilter(filterDataRequest: FilterDataRequest): void {
    this.dialog.open(GridFiltersModalComponent, {
      disableClose: true,
      width: '750px',
      minHeight: '500px',
      maxHeight: '750px',
      maxWidth: '80vw',
      panelClass: GridModal.GridFiltersModal,
      data: filterDataRequest,
    });
  }
  public canApplyChanges(): boolean {
    return JSON.stringify(this.userFiltersList) !== JSON.stringify(this.tempUserFiltersList);
  }
  public handleDeleteFilter(filterIndex: number): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      disableClose: true,
      width: '500px',
      data: {
        title: 'Are you sure want to delete filter?',
        headerIconTray: this.headerIconTray,
        dialogMessage: `This action can't be undone.`,
        confirmText: 'Continue',
      },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((response) => {
        if (response) {
          this.tempUserFiltersList = this.tempUserFiltersList.filter((userFilter, index) => filterIndex !== index);
        }
      });
  }
}
