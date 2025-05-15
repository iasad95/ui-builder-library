import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ConfirmationModalComponent, ItemActionHandler, SelectOption } from 'ui-builder-component-lib';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-multiselect-demo',
  templateUrl: './multiselect-demo.component.html',
  styleUrls: ['./multiselect-demo.component.scss'],
})
export class MultiselectDemoComponent implements OnInit {
  public dialogTitle = 'Example Options';
  public showDialogMessage = true;
  public required = false;
  public submitted = false;
  public disabled = false;
  public headerIconTray: ItemActionHandler[] = [];
  public optionGroups: { groupName: string; options: SelectOption<any>[] }[] = [];
  public selectedOptions: SelectOption<any>[] = [new SelectOption('0', 0), new SelectOption('33', 33)];
  public multiSelectCode: string = `<lib-multiselect [dialogTitle]="Example Options" [options]="exampleOptions" [selectedOptions]="exampleSelectedOptions" [submitted]="false" [required]="true"></lib-multiselect>`;

  private confirmationSubject: ReplaySubject<{ fieldName: string; fieldValue: any }> = new ReplaySubject();
  public confirmationObservable: Observable<{ fieldName: string; fieldValue: any }> = this.confirmationSubject.asObservable();

  constructor(
    private dialog: MatDialog,
    private domSanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.headerIconTray.push(
      new ItemActionHandler(this.domSanitizer.bypassSecurityTrustHtml("<i class='icon-info-circle'></i>"), null, this.domSanitizer.bypassSecurityTrustHtml('test')),
    );
    this.optionGroups.push({ groupName: 'Group 1', options: [] });
    this.optionGroups.push({ groupName: 'Group 2', options: [] });
    for (let i = 0; i < 50; i++) {
      this.optionGroups[0].options.push(new SelectOption(i.toString(), i));
    }
    for (let i = 50; i < 100; i++) {
      this.optionGroups[1].options.push(new SelectOption(i.toString(), i));
    }
  }

  public handleOptionDeleted(option: { fieldName: string; fieldValue: any }): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '50vw',
      minWidth: '300px',
      disableClose: true,
      data: {
        title: 'Warning',
        headerIconTray: this.headerIconTray,
        dialogMessage: "This is a warning message. Click 'ok' to remove an option.",
        confirmText: 'Ok',
      },
    });

    dialogRef.afterClosed().subscribe((value: boolean) => {
      this.confirmationSubject.next(value ? option : { ...option, fieldValue: -1 });
    });
  }
}
