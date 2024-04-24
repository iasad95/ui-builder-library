import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TooltipDirectionPreference } from '../../enums/tooltip-direction-preference';
import { FormSectionVariables } from '../../model/form-generator/form-section-variables';
import { FormFieldType } from './../../enums/form-field-type';
import { FormFieldVariables } from './../../model/form-generator/form-field-variables';
import { ItemSummary } from './../../model/item-summary';
@Component({
  selector: 'lib-multi-field',
  templateUrl: './multi-field.component.html',
  styleUrls: ['./multi-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiFieldComponent implements OnInit, OnDestroy {
  public FormFieldType = FormFieldType;
  public tempFieldControls: UntypedFormControl[][];
  public DirectionPreference = TooltipDirectionPreference;
  @Input() fieldName = '';
  @Input() config: FormSectionVariables;
  @Input() formFieldControl: UntypedFormControl;
  @Input() newRowText = 'Add';
  @Input() useTooltips = false;
  @Input() disabled = false;
  @Input() rowDeleteConfirmationObsv: Observable<{
    fieldName: string;
    fieldValue: any;
  }>;
  @Input() maxLength = 0;
  @Input() currencySymbol: string;
  @Input() errorMessage: string;
  @Input() editDisabled: boolean;
  public editIndex = -1;
  public addDisabled = true;
  public addingNewRow = false;
  @Output() rowDelete: EventEmitter<{ fieldName: string; fieldValue: any }> = new EventEmitter();
  @Output() rowEdit: EventEmitter<{
    rowFormControls: UntypedFormControl[][];
    config: FormSectionVariables;
  }> = new EventEmitter();
  @Output() valueChanges: EventEmitter<{
    formControl: UntypedFormControl;
    config: FormSectionVariables;
  }> = new EventEmitter();
  private componentDestroyed$: Subject<void> = new Subject();
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit() {
    this.formFieldControl.valueChanges.pipe(takeUntil(this.componentDestroyed$)).subscribe(() => {
      this.changeDetectorRef.detectChanges();
    });
    this.rowDeleteConfirmationObsv?.pipe(takeUntil(this.componentDestroyed$)).subscribe((response) => {
      if (response.fieldName === this.fieldName) {
        if (response.fieldValue > -1 && this.editIndex < 0) {
          this.handleRowDeletedAction(response.fieldValue);
        }
      }
    });
  }
  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
  public getDisplayValue(fieldInfo: FormFieldVariables, value: any): any {
    switch (fieldInfo.type) {
      case FormFieldType.typeahead:
        if (value.header && value.header.label) {
          return value.header.label;
        } else {
          return value;
        }
      case FormFieldType.select: {
        const selectOption = fieldInfo.selectOptions.find((nextOption) => nextOption.value === value);
        return selectOption ? selectOption.label : '';
      }
      case FormFieldType.currency:
        return this.currencySymbol + value;
      default:
        return value;
    }
  }
  public handleRowDeleted(rowIndex: number, event: any): void {
    if (this.disabled) {
      return;
    }
    event?.stopPropagation();
    if (this.rowDelete && this.rowDeleteConfirmationObsv) {
      this.rowDelete.emit({
        fieldName: this.fieldName,
        fieldValue: rowIndex,
      });
    } else {
      this.handleRowDeletedAction(rowIndex);
    }
  }
  public handleRowDeletedAction(rowIndex: number): void {
    if (this.disabled) {
      return;
    }
    this.editIndex = -1;
    this.formFieldControl.value.splice(rowIndex, 1);
    this.valueChanges.emit({
      formControl: this.formFieldControl,
      config: this.config,
    });
    if (this.formFieldControl.value.length === 0) {
      this.handleAddClicked();
    }
  }
  public handleFieldClicked(fieldInfo: FormFieldVariables): void {
    if (!fieldInfo.isEditable && this.editIndex > -1 && this.rowDelete && this.rowDeleteConfirmationObsv) {
      this.rowDelete.emit({
        fieldName: fieldInfo.controlName,
        fieldValue: this.editIndex,
      });
    }
  }
  public handleRowClicked(rowIndex: number): void {
    if (this.disabled || this.editDisabled) {
      return;
    }
    if (!this.addingNewRow) {
      this.tempFieldControls = [];
      let index = 0;
      for (let i = 0; i < this.config.fields.length; i++) {
        this.tempFieldControls[i] = [];
        for (let j = 0; j < this.config.fields[i].length; j++) {
          this.tempFieldControls[i].push(new UntypedFormControl(this.formFieldControl.value[rowIndex][index++], this.config.fields[i][j].required ? Validators.required : null));
          if (this.config.fields[i][j].type === FormFieldType.typeahead) {
            const curTypeaheadValue = this.tempFieldControls[i][j].value;
            if (curTypeaheadValue.header && curTypeaheadValue.header.label) {
              this.config.fields[i][j].typeaheadConfig.defaultText = curTypeaheadValue.header.label;
            } else {
              this.config.fields[i][j].typeaheadConfig.defaultText = curTypeaheadValue;
            }
          }
        }
      }
      this.addValidityListeners();
      this.addDisabled = true;
      this.editIndex = rowIndex;
      this.updateValidity();
    }
  }
  public handleAddClicked(): void {
    if (this.disabled) {
      return;
    }
    this.tempFieldControls = [];
    for (let i = 0; i < this.config.fields.length; i++) {
      this.tempFieldControls[i] = [];
      for (let j = 0; j < this.config.fields[i].length; j++) {
        this.tempFieldControls[i].push(new UntypedFormControl(null, this.config.fields[i][j].required ? Validators.required : null));
        if (this.config.fields[i][j].type === FormFieldType.typeahead) {
          this.config.fields[i][j].typeaheadConfig.defaultText = null;
        }
      }
    }
    this.addValidityListeners();
    this.addDisabled = true;
    this.addingNewRow = true;
  }
  public addValidityListeners(): void {
    this.tempFieldControls.forEach((controlRow) => {
      controlRow.forEach((control) => {
        control.valueChanges.pipe(takeUntil(this.componentDestroyed$)).subscribe(() => {
          this.updateValidity();
        });
      });
    });
  }
  public updateValidity(): void {
    this.rowEdit.emit({
      rowFormControls: this.tempFieldControls,
      config: this.config,
    });
    setTimeout(() => {
      this.addDisabled = false;
      this.tempFieldControls.forEach((controlRow) => {
        controlRow.forEach((control) => {
          this.addDisabled = this.addDisabled || !control.valid;
        });
      });
      this.changeDetectorRef.detectChanges();
    }, 250);
  }
  public handleCancelClicked(): void {
    this.addingNewRow = false;
    this.editIndex = -1;
    this.tempFieldControls = [];
    this.valueChanges.emit({
      formControl: this.formFieldControl,
      config: this.config,
    });
  }
  public handleSaveClicked(): void {
    if (!this.addDisabled) {
      if (!this.formFieldControl.value) {
        this.formFieldControl.setValue([]);
      }
      let formFieldControlValueIndex = this.editIndex;
      if (this.addingNewRow) {
        this.formFieldControl.value.push([]);
        formFieldControlValueIndex = this.formFieldControl.value.length - 1;
      }
      let index = 0;
      for (let i = 0; i < this.tempFieldControls.length; i++) {
        for (let j = 0; j < this.tempFieldControls[i].length; j++) {
          this.formFieldControl.value[formFieldControlValueIndex][index++] = this.tempFieldControls[i][j].value;
        }
      }
      this.addingNewRow = false;
      this.editIndex = -1;
      this.tempFieldControls = [];
      this.valueChanges.emit({
        formControl: this.formFieldControl,
        config: this.config,
      });
    }
  }
  public handleTypeaheadSelected(row: number, col: number, value: ItemSummary<any>): void {
    this.tempFieldControls[row][col].setValue(value);
  }
  public handleTypeaheadDeselected(row: number, col: number): void {
    this.tempFieldControls[row][col].setValue(null);
  }
}
