import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ItemActionHandler } from '../../model/item-action-handler';
import { SelectOption } from '../../model/select-option';
@Component({
  selector: 'lib-multiselect-dialog',
  templateUrl: './multiselect-dialog.component.html',
  styleUrls: ['./multiselect-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiselectDialogComponent {
  public title: string;
  public headerIconTray: ItemActionHandler[] = [];
  public optionGroups: { groupName: string; options: SelectOption<any>[] }[] = [];
  public selectedOptions: SelectOption<any>[] = [];
  public totalOptionGroups: {
    groupName: string;
    options: SelectOption<any>[];
  }[] = [];
  public totalCount = 0;
  public showDialogMessage: boolean;
  public readonly searchModeThreshold = 50;
  constructor(
    public dialogRef: MatDialogRef<MultiselectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.title = data.title;
    this.totalOptionGroups = data.options;
    this.headerIconTray = data.headerIconTray;
    this.showDialogMessage = data.showDialogMessage;
    this.totalOptionGroups.forEach((optionGroup) => {
      optionGroup.options.sort((a: SelectOption<any>, b: SelectOption<any>) => {
        const label1: string = a.label || '';
        const label2: string = b.label || '';
        return label1.localeCompare(label2);
      });
      this.totalCount += optionGroup.options.length;
    });
    this.optionGroups = this.totalOptionGroups;
  }
  public search(value: string): void {
    this.optionGroups = [];
    this.totalOptionGroups.forEach((optionGroup) => {
      const filteredOptions = optionGroup.options.filter((option) => option.label.toLocaleUpperCase().includes(value.toLocaleUpperCase()));
      if (filteredOptions.length) {
        this.optionGroups.push({
          groupName: optionGroup.groupName,
          options: filteredOptions,
        });
      }
    });
  }
  public clearSearch(): void {
    this.optionGroups = this.totalOptionGroups;
  }
  public handleCheckedValueChange(event: [SelectOption<any>, boolean]): void {
    if (event[1]) {
      this.selectedOptions.push(event[0]);
    } else {
      this.selectedOptions.splice(this.selectedOptions.indexOf(event[0]), 1);
    }
  }
  public handleClickCancel(): void {
    this.dialogRef.close();
  }
  public getLeftOptions(options: SelectOption<any>[]): SelectOption<any>[] {
    return options.slice(0, Math.ceil(options.length / 2));
  }
  public getRightOptions(options: SelectOption<any>[]): SelectOption<any>[] {
    return options.slice(Math.ceil(options.length / 2), options.length);
  }
  public headerIconClicked(icon: ItemActionHandler) {
    if (icon && icon.action) {
      icon.action({});
    }
  }
  public handleClickSave(): void {
    this.dialogRef.close(this.selectedOptions);
  }
}
