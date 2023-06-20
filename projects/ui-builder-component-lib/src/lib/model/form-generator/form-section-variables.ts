import { UntypedFormGroup } from '@angular/forms';
import { ItemActionHandler } from '../item-action-handler';
import { FormFieldVariables } from './form-field-variables';
export class FormSectionVariables {
  public fields: FormFieldVariables[][] = [];
  public formGroup: UntypedFormGroup = new UntypedFormGroup({});
  public title: string;
  public expanded: boolean;
  public useSlideToggle: boolean;
  public trackId: string;
  public isHidden = false;
  public footerAction: ItemActionHandler;
  public headerActions: ItemActionHandler[];
  public id: string;
  public addFieldInfo(controlAlreadyInForm: boolean, ...items: FormFieldVariables[]): void {
    if (!controlAlreadyInForm) {
      items.forEach((item) => this.addNewField(item));
    } else {
      items.forEach((item) => this.replaceOldField(item));
    }
    this.isHidden = this.allFieldsHidden();
  }
  private replaceOldField(item: FormFieldVariables): void {
    let found = false;
    for (let i = 0; i < this.fields.length; i++) {
      for (let j = 0; j < this.fields[i].length; j++) {
        if (this.fields[i][j].controlName === item.controlName) {
          this.fields[i][j] = item;
          found = true;
          break;
        }
      }
      if (found) {
        break;
      }
    }
    this.isHidden = this.allFieldsHidden();
  }
  private addNewField(item: FormFieldVariables): void {
    if (item.control) {
      this.formGroup.addControl(item.controlName, item.control);
    }
    let addNewRow = true;
    if (this.fields.length) {
      const lastRow = this.fields[this.fields.length - 1];
      if (lastRow.length) {
        if (lastRow[lastRow.length - 1].isInlineField) {
          lastRow.push(item);
          addNewRow = false;
        }
      }
    }
    if (addNewRow) {
      this.fields.push([item]);
    }
  }
  public calculateFlexBasis(): void {
    this.fields.forEach((row: FormFieldVariables[]) => {
      if (row.length > 1) {
        const customFlexFields = row.filter((field) => !!field.flexBasisPct);
        if (customFlexFields.length !== row.length) {
          let customFlexPctUsed = 0;
          customFlexFields.forEach((field) => (customFlexPctUsed += field.flexBasisPct));
          const autoFlexBasisFields = row.filter((field) => !field.flexBasisPct);
          autoFlexBasisFields.forEach((field) => {
            field.flexBasisPct = Math.floor((100 - customFlexPctUsed) / autoFlexBasisFields.length);
          });
        }
      }
    });
  }
  public allFieldsHidden(): boolean {
    return this.fields.every((fieldSet) => {
      return fieldSet.every((field) => field.isHidden);
    });
  }
}
