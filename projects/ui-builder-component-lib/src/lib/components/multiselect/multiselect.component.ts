import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ItemActionHandler } from '../../model/item-action-handler';
import { SelectOption } from '../../model/select-option';
import { MultiselectDialogComponent } from './multiselect-dialog.component';
@Component({
  selector: 'lib-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiselectComponent implements OnInit, OnDestroy {
  @Input() optionGroups: { groupName: string; options: SelectOption<any>[] }[] = [];
  @Input() selectedOptions: SelectOption<any>[] = [];
  @Input() fieldName = '';
  @Input() dialogTitle = '';
  @Input() required = false;
  @Input() showRequiredIndicator: boolean = false;
  @Input() submitted = false;
  @Input() optionDeleteConfirmationObsv: Observable<{
    fieldName: string;
    fieldValue: any;
  }>;
  @Input() headerIconTray: ItemActionHandler[] = [];
  @Input() showDialogMessage = true;
  @Input() disabled = false;
  @Output() optionDelete: EventEmitter<{ fieldName: string; fieldValue: any }> = new EventEmitter();
  @Output() selectedOptionsChange: EventEmitter<SelectOption<any>[]> = new EventEmitter();
  private componentDestroyed$: Subject<void> = new Subject();
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public dialog: MatDialog,
  ) {}
  ngOnInit(): void {
    this.optionDeleteConfirmationObsv?.pipe(takeUntil(this.componentDestroyed$)).subscribe((response) => {
      if (response?.fieldName === this.fieldName && typeof response.fieldValue === 'object') {
        this.handleOptionDeletedAction(response.fieldValue);
      }
    });
  }
  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
  private handleDialogResult(options: SelectOption<any>[]): void {
    if (options) {
      this.selectedOptions.push(...options);
      this.selectedOptions = [
        ...this.selectedOptions.sort((a, b) => {
          return a.label.localeCompare(b.label);
        }),
      ];
      this.selectedOptionsChange.emit(this.selectedOptions);
      this.changeDetectorRef.detectChanges();
    }
  }
  public handleOptionRemove(option: SelectOption<any>, event: any): void {
    if (this.disabled) {
      return;
    }
    event?.stopPropagation();
    if (this.optionDelete && this.optionDeleteConfirmationObsv) {
      this.optionDelete.emit({ fieldName: this.fieldName, fieldValue: option });
    } else {
      this.handleOptionDeletedAction(option);
    }
  }
  public handleOptionDeletedAction(option: SelectOption<any>): void {
    this.selectedOptions.splice(this.selectedOptions.indexOf(option), 1);
    this.selectedOptionsChange.emit(this.selectedOptions);
    this.changeDetectorRef.detectChanges();
  }
  public handleOptionAdd() {
    if (this.disabled) {
      return;
    }
    const availableOptions = [];
    this.optionGroups.forEach((optionGroup) => {
      const filteredGroupOptions = optionGroup.options.filter((option) => {
        return !this.selectedOptions.find((selectedOption) => {
          return selectedOption.label === option.label;
        });
      });
      if (filteredGroupOptions.length) {
        availableOptions.push({
          groupName: optionGroup.groupName,
          options: filteredGroupOptions,
        });
      }
    });
    const dialogRef = this.dialog.open(MultiselectDialogComponent, {
      panelClass: 'resizable-dialog',
      data: {
        title: this.dialogTitle,
        options: availableOptions,
        headerIconTray: this.headerIconTray,
        showDialogMessage: this.showDialogMessage,
      },
    });
    dialogRef.afterClosed().subscribe((options: SelectOption<any>[]) => {
      this.handleDialogResult(options);
    });
  }
  public getTotalCount() {
    let count = 0;
    this.optionGroups.forEach((optionGroup) => {
      optionGroup.options.sort((a: SelectOption<any>, b: SelectOption<any>) => {
        const label1: string = a.label || '';
        const label2: string = b.label || '';
        return label1.localeCompare(label2);
      });
      count += optionGroup.options.length;
    });
    return count;
  }
}
