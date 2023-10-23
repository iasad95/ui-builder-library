import { Component, Input } from '@angular/core';
import { flatten } from 'lodash';
import { FormFieldType } from '../../enums/form-field-type';
import { FormGenStyle } from '../../enums/form-gen-style';
import { StatusTypes } from '../../enums/status-types';
import { TooltipDirectionPreference } from '../../enums/tooltip-direction-preference';
import { FormFieldVariables } from '../../model/form-generator/form-field-variables';
import { FormMultifieldConfig } from '../../model/form-generator/form-multifield-config';
import { FormSectionVariables } from '../../model/form-generator/form-section-variables';
import { ItemSummary } from '../../model/item-summary';
import { SelectOption } from '../../model/select-option';
@Component({
  selector: 'lib-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent {
  public StatusTypes = StatusTypes;
  public FormFieldType = FormFieldType;
  public FormGenStyle = FormGenStyle;
  public DirectionPreference = TooltipDirectionPreference;
  @Input() groupInfo: FormSectionVariables;
  @Input() dateFormat: string;
  @Input() currencySymbol = '$';
  @Input() hideCents = false;
  @Input() useTooltips = false;
  @Input() formStyle: FormGenStyle;
  public handleTypeaheadSelected(fieldInfo: FormFieldVariables, selected: ItemSummary<any>) {
    fieldInfo.control.setValue(selected.item);
    if (selected.header && selected.header.label) {
      fieldInfo.typeaheadConfig.defaultText = selected.header.label;
    }
  }
  public handleTypeaheadDeselected(fieldInfo: FormFieldVariables) {
    fieldInfo.control.setValue(null);
    fieldInfo.typeaheadConfig.defaultText = null;
  }
  public handleTypeaheadInputChange(fieldInfo: FormFieldVariables, value: string) {
    fieldInfo.control.markAsDirty();
    fieldInfo.control.markAsTouched();
    if (!value || !value.length) {
      this.handleTypeaheadDeselected(fieldInfo);
    }
    if (fieldInfo.typeaheadConfig.inputChangeFunction) {
      fieldInfo.typeaheadConfig.inputChangeFunction(value);
    }
  }
  public handleImageUploaded(fieldInfo: FormFieldVariables, data) {
    fieldInfo.control.setValue(data);
  }
  public handleImageDeselected(fieldInfo: FormFieldVariables) {
    fieldInfo.control.setValue(null);
  }
  public handleMultiselectChange(fieldInfo: FormFieldVariables, data: SelectOption<any>[]) {
    fieldInfo.control.setValue(data.map((entry) => entry.value));
    fieldInfo.multiselectDefaultOptions = data;
  }
  public handleFooterClicked(): void {
    if (this.groupInfo.footerAction?.action) {
      this.groupInfo.footerAction.action(this.groupInfo);
    }
  }
  public handleListChange(fieldInfo: FormFieldVariables, list: string[]) {
    fieldInfo.control.setValue(list);
    fieldInfo.textlist = list;
    fieldInfo.control.markAsDirty();
    fieldInfo.control.markAsTouched();
  }
  public trackField(index: number, field: FormFieldVariables) {
    return field.trackId;
  }
  public multifieldDescriptionTextList(mainDescriptionText: string, multifieldConfig: FormMultifieldConfig) {
    const fieldDescriptions = [];
    if (mainDescriptionText) {
      fieldDescriptions.push(mainDescriptionText);
    }
    if (multifieldConfig.config?.fields?.length) {
      flatten(multifieldConfig.config.fields).forEach((field) => {
        let currentDescription = '';
        if (!!field.label && !!field.descriptionText) {
          currentDescription = field.label + ': ' + field.descriptionText;
        } else if (field.descriptionText) {
          currentDescription = field.descriptionText;
        }
        if (currentDescription.length) {
          fieldDescriptions.push(currentDescription);
        }
      });
    }
    return fieldDescriptions;
  }
}
