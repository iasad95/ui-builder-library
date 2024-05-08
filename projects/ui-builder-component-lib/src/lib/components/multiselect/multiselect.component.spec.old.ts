import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipDirective } from '../../directives/tooltip/tooltip.directive';
import { SelectOption } from '../../model/select-option';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { MultiselectDialogComponent } from './multiselect-dialog.component';
import { MultiselectComponent } from './multiselect.component';
describe('MultiSelectComp', () => {
  let multiselectComp: MultiselectComponent;
  let multiselectFixture: ComponentFixture<MultiselectComponent>;
  let dialogComp: MultiselectDialogComponent;
  let dialogFixture: ComponentFixture<MultiselectDialogComponent>;
  let multiselectDe: DebugElement;
  let dialogDe: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultiselectComponent, MultiselectDialogComponent, SearchBarComponent, TooltipDirective],
      imports: [BrowserModule, BrowserAnimationsModule, FormsModule, MatDialogModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            title: 'Item',
            options: [new SelectOption('Item 3', null), new SelectOption('Item 2', null), new SelectOption('Item 1', null)],
          },
        },
        { provide: MatDialogRef, useValue: { close: () => null } },
      ],
    })
      .compileComponents()
      .then(() => {
        multiselectFixture = TestBed.createComponent(MultiselectComponent);
        multiselectComp = multiselectFixture.componentInstance;
        multiselectDe = multiselectFixture.debugElement;
        multiselectFixture.detectChanges();
        dialogFixture = TestBed.createComponent(MultiselectDialogComponent);
        dialogComp = dialogFixture.componentInstance;
        dialogDe = dialogFixture.debugElement;
        dialogFixture.detectChanges();
      });
  }));
  it('should display Add tile when options are available', async(() => {
    expect(multiselectDe.query(By.css('.multiselect__tile-add'))).toBeNull();
    multiselectComp.options = [new SelectOption('Item 1', null), new SelectOption('Item 2', null)];
    multiselectFixture.detectChanges();
    multiselectDe = multiselectDe.query(By.css('.multiselect__tile-add'));
    expect(multiselectDe).not.toBeNull();
    el = multiselectDe.nativeElement;
    expect(el.innerText.trim()).toEqual('Add');
  }));
  it('should remove tile when remove icon is clicked', async(() => {
    spyOn(multiselectComp.selectedOptionsChange, 'emit');
    multiselectComp.selectedOptions = [new SelectOption('Item 1', null), new SelectOption('Item 2', null)];
    multiselectFixture.detectChanges();
    multiselectComp.handleOptionRemove(multiselectComp.selectedOptions[0]);
    expect(multiselectComp.selectedOptions.length).toEqual(1);
    expect(multiselectComp.selectedOptionsChange.emit).toHaveBeenCalledWith(multiselectComp.selectedOptions);
    multiselectFixture.detectChanges();
    spyOn(multiselectComp, 'handleOptionRemove');
    multiselectDe = multiselectDe.query(By.css('.multiselect__tile-icon-remove'));
    expect(multiselectDe).not.toBeNull();
    el = multiselectDe.nativeElement;
    el.click();
    expect(multiselectComp.handleOptionRemove).toHaveBeenCalledWith(multiselectComp.selectedOptions[0]);
  }));
  it('should add tile when add icon is clicked', async(() => {
    spyOn(multiselectComp.selectedOptionsChange, 'emit');
    multiselectComp.options = [new SelectOption('Item 1', null), new SelectOption('Item 2', null), new SelectOption('Item 3', null)];
    multiselectComp.selectedOptions = [new SelectOption('Item 2', null)];
    multiselectComp['handleDialogResult']([new SelectOption('Item 1', null)]);
    expect(multiselectComp.selectedOptions.length).toEqual(2);
    expect(multiselectComp.selectedOptions[0].label).toEqual('Item 1');
    expect(multiselectComp.selectedOptionsChange.emit).toHaveBeenCalledWith(multiselectComp.selectedOptions);
    multiselectFixture.detectChanges();
    spyOn(multiselectComp, 'handleOptionAdd');
    el = multiselectDe.query(By.css('.multiselect__tile-add')).nativeElement;
    el.click();
    expect(multiselectComp.handleOptionAdd).toHaveBeenCalled();
  }));
  it('should display required indicator and error text', async(() => {
    expect(multiselectDe.query(By.css('.multiselect__error-text'))).toBeNull();
    multiselectComp.required = true;
    multiselectFixture.detectChanges();
    multiselectDe = multiselectDe.query(By.css('.multiselect__required-indicator'));
    expect(multiselectDe).not.toBeNull();
    multiselectComp.submitted = true;
    multiselectComp.dialogTitle = 'Item';
    multiselectFixture.detectChanges();
    multiselectDe = multiselectFixture.debugElement;
    multiselectDe = multiselectDe.query(By.css('.multiselect__error-text'));
    expect(multiselectDe).not.toBeNull();
    el = multiselectDe.nativeElement;
    expect(el.innerText.trim()).toEqual('Item is required.');
  }));
  it('should display correct title and text', async(() => {
    el = dialogDe.query(By.css('.multiselect-dialog__header-text')).nativeElement;
    expect(el.innerText.trim()).toEqual('Item');
    el = dialogDe.query(By.css('.multiselect-dialog__checkbox-section-text')).nativeElement;
    expect(el.innerText.trim()).toEqual('Select one or more Item from the list below.');
  }));
  it('should have correct x, cancel, and save button functionality', async(() => {
    dialogComp.selectedOptions = [new SelectOption('Item 1', null), new SelectOption('Item 2', null)];
    spyOn(dialogComp.dialogRef, 'close');
    dialogComp.handleClickCancel();
    expect(dialogComp.dialogRef.close).toHaveBeenCalled();
    dialogComp.handleClickSave();
    expect(dialogComp.dialogRef.close).toHaveBeenCalledWith(dialogComp.selectedOptions);
    spyOn(dialogComp, 'handleClickCancel');
    spyOn(dialogComp, 'handleClickSave');
    el = dialogDe.query(By.css('.multiselect-dialog__header-close-button')).nativeElement;
    el.click();
    expect(dialogComp.handleClickCancel).toHaveBeenCalled();
    el = dialogDe.query(By.css('.multiselect-dialog__cancel-button')).nativeElement;
    el.click();
    expect(dialogComp.handleClickCancel).toHaveBeenCalledTimes(2);
    el = dialogDe.query(By.css('.multiselect-dialog__save-button')).nativeElement;
    el.click();
    expect(dialogComp.handleClickSave).toHaveBeenCalled();
  }));
  it('should have working search functionality', async(() => {
    expect(dialogDe.query(By.css('.multiselect-dialog__search-bar'))).toBeNull();
    dialogComp.totalOptions = [];
    for (let i = 0; i < 100; i++) {
      dialogComp.totalOptions.push(new SelectOption('Item ' + i, null));
    }
    dialogFixture.detectChanges();
    expect(dialogDe.query(By.css('.multiselect-dialog__search-bar'))).not.toBeNull();
    dialogComp.search('2');
    dialogFixture.detectChanges();
    expect(dialogComp.options.length).toEqual(19);
    expect(dialogDe.queryAll(By.css('.multiselect-dialog__checkbox-section-item')).length).toEqual(19);
    dialogComp.clearSearch();
    dialogFixture.detectChanges();
    expect(dialogComp.options.length).toEqual(50);
    expect(dialogDe.queryAll(By.css('.multiselect-dialog__checkbox-section-item')).length).toEqual(50);
  }));
  it('should be responsive to checkbox input', async(() => {
    const option: SelectOption<any> = new SelectOption('Item 1', null);
    dialogComp.handleCheckedValueChange([option, { source: null, checked: true }]);
    expect(dialogComp.selectedOptions.length).toEqual(1);
    dialogComp.handleCheckedValueChange([option, { source: null, checked: false }]);
    expect(dialogComp.selectedOptions.length).toEqual(0);
  }));
  it('should sort input options alphabetically', async(() => {
    expect(dialogComp.options[0].label).toEqual('Item 1');
  }));
});
