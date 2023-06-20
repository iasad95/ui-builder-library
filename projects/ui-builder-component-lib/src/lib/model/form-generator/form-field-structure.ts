import { UntypedFormControl, ValidatorFn, Validators } from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { FormFieldType } from '../../enums/form-field-type';
import { FormActionConfig } from './form-action-config';
import { FormBannerConfig } from './form-banner-config';
import { FormCheckboxConfig } from './form-checkbox-config';
import { FormFieldVariables } from './form-field-variables';
import { FormIncrementerConfig } from './form-incrementer-config';
import { FormInjectableFormFieldConfig } from './form-injectable-form-field-config';
import { FormMultifieldConfig } from './form-multifield-config';
import { FormMultiselectConfig } from './form-multiselect-config';
import { FormNumberConfig } from './form-number-config';
import { FormRadioConfig } from './form-radio-config';
import { FormRatingConfig } from './form-rating-config';
import { FormSelectConfig } from './form-select-config';
import { FormTextlistConfig } from './form-textlist-config';
import { FormTimePickerConfig } from './form-time-picker-config';
import { FormTypeaheadConfig } from './form-typeahead-config';
export class FormFieldStructure {
  public inputType: FormFieldType;
  public fieldName: string;
  public placeholder?: string;
  public labelIcon?: SafeHtml;
  public label?: string;
  public required?: boolean;
  public isHidden?: boolean;
  public isInlineField?: boolean;
  public maxLength?: number;
  public validationPattern?: RegExp;
  public patternErrorMessage?: string;
  public selectConfig?: FormSelectConfig;
  public typeaheadConfig?: FormTypeaheadConfig;
  public multiselectConfig?: FormMultiselectConfig;
  public radioConfig?: FormRadioConfig;
  public checkboxConfig?: FormCheckboxConfig;
  public textlistConfig?: FormTextlistConfig;
  public timePickerConfig?: FormTimePickerConfig;
  public multifieldConfig?: FormMultifieldConfig;
  public actionConfig?: FormActionConfig;
  public controlOptions?: any;
  public flexBasisPct?: number;
  public flexGrow = 1;
  public descriptionText?: string;
  public fullLength?: boolean;
  public message?: string;
  public bannerConfig?: FormBannerConfig;
  public disabled = false;
  public isEditable?: boolean;
  public confirmationObsv?: Observable<any>;
  public handleConfirmation?: (event: any) => void;
  public injectableFormFieldConfig?: FormInjectableFormFieldConfig;
  public hyperlinkTarget?: string;
  public numberConfig?: FormNumberConfig;
  public showLabelInRequiredErrorMessage?: boolean = true;
  public readOnly?: boolean;
  public ratingConfig?: FormRatingConfig;
  public incrementerConfig?: FormIncrementerConfig;
  constructor(
    inputType: FormFieldType,
    fieldName: string,
    placeholder?: string,
    labelIcon?: SafeHtml,
    label?: string,
    required = true,
    isHidden = false,
    isInlineField = false,
    maxLength?: number,
    selectConfig?: FormSelectConfig,
    typeaheadConfig?: FormTypeaheadConfig,
    multiselectConfig?: FormMultiselectConfig,
    radioConfig?: FormRadioConfig,
    textlistConfig?: FormTextlistConfig,
    actionConfig?: FormActionConfig,
    validationPattern?: RegExp,
    patternErrorMessage?: string,
    controlOptions?: any,
    flexBasisPct?: number,
    flexGrow?: number,
    descriptionText?: string,
    fullLength?: boolean,
    multifieldConfig?: FormMultifieldConfig,
    message?: string,
    bannerConfig?: FormBannerConfig,
    disabled = false,
    isEditable = true,
    confirmationObsv?: Observable<any>,
    handleConfirmation?: (event: any) => void,
    injectableConfig?: FormInjectableFormFieldConfig,
    hyperlinkTarget?: string,
    checkboxConfig?: FormCheckboxConfig,
    numberConfig?: FormNumberConfig,
    showLabelInRequiredErrorMessage?: boolean,
    readOnly?: boolean,
    ratingConfig?: FormRatingConfig,
    incrementerConfig?: FormIncrementerConfig,
  ) {
    this.inputType = inputType;
    this.fieldName = fieldName;
    this.placeholder = placeholder;
    this.labelIcon = labelIcon;
    this.label = label;
    this.required = required;
    this.isHidden = isHidden;
    this.isInlineField = isInlineField;
    this.maxLength = maxLength;
    this.selectConfig = selectConfig;
    this.typeaheadConfig = typeaheadConfig;
    this.multiselectConfig = multiselectConfig;
    this.radioConfig = radioConfig;
    this.validationPattern = validationPattern;
    this.patternErrorMessage = patternErrorMessage;
    this.controlOptions = controlOptions;
    this.textlistConfig = textlistConfig;
    this.flexBasisPct = flexBasisPct;
    this.flexGrow = flexGrow;
    this.descriptionText = descriptionText;
    this.fullLength = fullLength;
    this.multifieldConfig = multifieldConfig;
    this.actionConfig = actionConfig;
    this.message = message;
    this.bannerConfig = bannerConfig;
    this.disabled = disabled;
    this.isEditable = isEditable;
    this.confirmationObsv = confirmationObsv;
    this.handleConfirmation = handleConfirmation;
    this.injectableFormFieldConfig = injectableConfig;
    this.hyperlinkTarget = hyperlinkTarget;
    this.checkboxConfig = checkboxConfig;
    this.numberConfig = numberConfig;
    this.showLabelInRequiredErrorMessage = showLabelInRequiredErrorMessage;
    this.readOnly = readOnly;
    this.ratingConfig = ratingConfig;
    this.incrementerConfig = incrementerConfig;
  }
  public convertStructureToVariables(): FormFieldVariables {
    const fieldInfo = this.initFieldInfo();
    switch (this.inputType) {
      case FormFieldType.radio:
        this.convertRadioStructureToVariables(fieldInfo);
        break;
      case FormFieldType.checkbox:
        this.convertCheckboxStructureToVariables(fieldInfo);
        break;
      case FormFieldType.select:
        this.convertSelectStructureToVariables(fieldInfo);
        break;
      case FormFieldType.multiselect:
        this.convertMultiselectStructureToVariables(fieldInfo);
        break;
      case FormFieldType.typeahead:
        this.convertTypeaheadStructureToVariables(fieldInfo);
        break;
      case FormFieldType.textlist:
        this.convertTextlistStructureToVariables(fieldInfo);
        break;
      case FormFieldType.multifield:
        this.convertMultifieldStructureToVariables(fieldInfo);
        break;
      case FormFieldType.action:
        this.convertActionStructureToVariables(fieldInfo);
        break;
      case FormFieldType.banner:
        this.convertBannerStructureToVariables(fieldInfo);
        break;
      case FormFieldType.injectable:
        this.convertInjectableStructureToVariables(fieldInfo);
        break;
      case FormFieldType.rating:
        this.convertRatingStructureToVariables(fieldInfo);
        break;
      case FormFieldType.incrementer:
        this.convertIncrementerStructureToVariables(fieldInfo);
        break;
      case FormFieldType.currency:
      case FormFieldType.percentage:
      case FormFieldType.number:
        this.convertNumberStructureToVariables(fieldInfo);
        break;
    }
    return fieldInfo;
  }
  private initFieldInfo(): FormFieldVariables {
    const validators: ValidatorFn[] = [];
    if (this.required) {
      validators.push(Validators.required);
    }
    if (this.validationPattern && this.inputType !== FormFieldType.date) {
      validators.push(Validators.pattern(this.validationPattern));
    }
    const controlOptions = this.controlOptions ? this.controlOptions : {};
    controlOptions.validators = validators;
    const fieldInfo: FormFieldVariables = new FormFieldVariables();
    fieldInfo.controlName = this.fieldName;
    fieldInfo.required = this.required;
    fieldInfo.maxLength = this.maxLength;
    fieldInfo.isHidden = this.isHidden;
    fieldInfo.isEditable = this.isEditable;
    fieldInfo.label = this.label;
    fieldInfo.isInlineField = this.isInlineField;
    fieldInfo.patternErrorMessage = this.patternErrorMessage;
    fieldInfo.control = new UntypedFormControl(null, controlOptions);
    if (this.disabled) {
      fieldInfo.control.disable();
    }
    fieldInfo.placeholder = this.placeholder;
    fieldInfo.type = this.inputType;
    fieldInfo.labelIcon = this.labelIcon;
    fieldInfo.flexBasisPct = this.flexBasisPct;
    fieldInfo.flexGrow = this.flexGrow;
    fieldInfo.descriptionText = this.descriptionText;
    fieldInfo.fullLength = this.fullLength;
    fieldInfo.message = this.message;
    fieldInfo.disabled = this.disabled;
    fieldInfo.confirmationObsv = this.confirmationObsv;
    fieldInfo.handleConfirmation = this.handleConfirmation;
    fieldInfo.hyperlinkTarget = this.hyperlinkTarget;
    fieldInfo.showLabelInRequiredErrorMessage = this.showLabelInRequiredErrorMessage;
    fieldInfo.readOnly = this.readOnly;
    return fieldInfo;
  }
  private convertTextlistStructureToVariables(fieldInfo: FormFieldVariables): void {
    fieldInfo.textlist = this.textlistConfig ? this.textlistConfig.textlist : [];
    fieldInfo.textlistConfig = this.textlistConfig;
    fieldInfo.control.setValue(fieldInfo.textlist);
  }
  private convertSelectStructureToVariables(fieldInfo: FormFieldVariables): void {
    fieldInfo.selectOptions = this.selectConfig ? this.selectConfig.options : [];
  }
  private convertMultiselectStructureToVariables(fieldInfo: FormFieldVariables): void {
    fieldInfo.multiselectConfig = this.multiselectConfig;
    fieldInfo.control.setValue(fieldInfo.multiselectConfig.defaultOptions);
  }
  private convertRadioStructureToVariables(fieldInfo: FormFieldVariables): void {
    fieldInfo.selectOptions = this.radioConfig.options;
  }
  private convertCheckboxStructureToVariables(fieldInfo: FormFieldVariables): void {
    fieldInfo.selectOptions = this.checkboxConfig?.options;
  }
  private convertTypeaheadStructureToVariables(fieldInfo: FormFieldVariables): void {
    fieldInfo.typeaheadConfig = this.typeaheadConfig;
  }
  private convertMultifieldStructureToVariables(fieldInfo: FormFieldVariables): void {
    fieldInfo.multifieldConfig = this.multifieldConfig;
  }
  private convertActionStructureToVariables(fieldInfo: FormFieldVariables): void {
    fieldInfo.actionConfig = this.actionConfig;
  }
  private convertBannerStructureToVariables(fieldInfo: FormFieldVariables): void {
    fieldInfo.bannerConfig = this.bannerConfig;
  }
  private convertInjectableStructureToVariables(fieldInfo: FormFieldVariables): void {
    fieldInfo.injectableConfig = this.injectableFormFieldConfig;
  }
  private convertRatingStructureToVariables(fieldInfo: FormFieldVariables): void {
    fieldInfo.ratingConfig = this.ratingConfig;
  }
  private convertIncrementerStructureToVariables(fieldInfo: FormFieldVariables): void {
    fieldInfo.incrementerConfig = this.incrementerConfig;
    fieldInfo.control.setValue(0);
  }
  private convertNumberStructureToVariables(fieldInfo: FormFieldVariables): void {
    fieldInfo.numberConfig = this.numberConfig;
  }
}
export class FormFieldStructureBuilder {
  private inputType: FormFieldType;
  private fieldName: string;
  private placeholder?: string;
  private labelIcon?: SafeHtml;
  private label?: string;
  private required?: boolean;
  private isHidden?: boolean;
  private isEditable?: boolean;
  private isInlineField?: boolean;
  private maxLength?: number;
  private selectConfig?: FormSelectConfig;
  private typeaheadConfig?: FormTypeaheadConfig;
  private multiselectConfig?: FormMultiselectConfig;
  private radioConfig?: FormRadioConfig;
  private textlistConfig?: FormTextlistConfig;
  private multifieldConfig?: FormMultifieldConfig;
  private actionConfig?: FormActionConfig;
  private bannerConfig?: FormBannerConfig;
  private validationPattern?: RegExp;
  private patternErrorMessage?: string;
  private controlOptions?: any;
  private flexBasisPct?: number;
  private flexGrow = 1;
  private descriptionText?: string;
  private fullLength?: boolean;
  private message?: string;
  private disabled = false;
  public confirmationObsv?: Observable<any>;
  public handleConfirmation?: (event: any) => void;
  private injectableConfig?: FormInjectableFormFieldConfig;
  private hyperlinkTarget?: string;
  private checkboxConfig?: FormCheckboxConfig;
  private numberConfig?: FormNumberConfig;
  private showLabelInRequiredErrorMessage?: boolean = true;
  private readOnly: boolean;
  private ratingConfig?: FormRatingConfig;
  private incrementerConfig?: FormIncrementerConfig;
  constructor(inputType: FormFieldType, fieldName: string) {
    this.inputType = inputType;
    this.fieldName = fieldName;
  }
  public setPlaceholder(placeholder: string): FormFieldStructureBuilder {
    this.placeholder = placeholder;
    return this;
  }
  public setLabelIcon(labelIcon: SafeHtml): FormFieldStructureBuilder {
    this.labelIcon = labelIcon;
    return this;
  }
  public setLabel(label: string): FormFieldStructureBuilder {
    this.label = label;
    return this;
  }
  public setIsHidden(isHidden: boolean): FormFieldStructureBuilder {
    this.isHidden = isHidden;
    return this;
  }
  public setRequired(required: boolean): FormFieldStructureBuilder {
    this.required = required;
    return this;
  }
  public setMaxLength(maxLength: number): FormFieldStructureBuilder {
    this.maxLength = maxLength;
    return this;
  }
  public setSelectConfig(selectConfig: FormSelectConfig): FormFieldStructureBuilder {
    this.selectConfig = selectConfig;
    return this;
  }
  public setTypeaheadConfig(typeaheadConfig: FormTypeaheadConfig): FormFieldStructureBuilder {
    this.typeaheadConfig = typeaheadConfig;
    return this;
  }
  public setMultiselectConfig(multiselectConfig: FormMultiselectConfig): FormFieldStructureBuilder {
    this.multiselectConfig = multiselectConfig;
    return this;
  }
  public setRadioConfig(radioConfig: FormRadioConfig): FormFieldStructureBuilder {
    this.radioConfig = radioConfig;
    return this;
  }
  public setIncrementerConfig(incrementerConfig: FormIncrementerConfig): FormFieldStructureBuilder {
    this.incrementerConfig = incrementerConfig;
    return this;
  }
  public setTextlistConfig(textlistConfig: FormTextlistConfig): FormFieldStructureBuilder {
    this.textlistConfig = textlistConfig;
    return this;
  }
  public setMultifieldConfig(multifieldConfig: FormMultifieldConfig): FormFieldStructureBuilder {
    this.multifieldConfig = multifieldConfig;
    return this;
  }
  public setIsInlineField(isInlineField: boolean): FormFieldStructureBuilder {
    this.isInlineField = isInlineField;
    return this;
  }
  public setControlOptions(controlOptions: any): FormFieldStructureBuilder {
    this.controlOptions = controlOptions;
    return this;
  }
  public setValidationPattern(validationPattern: RegExp): FormFieldStructureBuilder {
    this.validationPattern = validationPattern;
    return this;
  }
  public setPatternErrorMessage(patternErrorMessage: string): FormFieldStructureBuilder {
    this.patternErrorMessage = patternErrorMessage;
    return this;
  }
  public setFlexGrow(flexGrow: number): FormFieldStructureBuilder {
    this.flexGrow = flexGrow;
    return this;
  }
  public setFlexBasis(flexBasisPct: number): FormFieldStructureBuilder {
    this.flexBasisPct = flexBasisPct;
    return this;
  }
  public setDescriptionText(descriptionText: string): FormFieldStructureBuilder {
    this.descriptionText = descriptionText;
    return this;
  }
  public setFullLength(fullLength: boolean): FormFieldStructureBuilder {
    this.fullLength = fullLength;
    return this;
  }
  public setActionConfig(actionConfig: FormActionConfig): FormFieldStructureBuilder {
    this.actionConfig = actionConfig;
    return this;
  }
  public setBannerConfig(bannerConfig: FormBannerConfig): FormFieldStructureBuilder {
    this.bannerConfig = bannerConfig;
    return this;
  }
  public setMessage(message: string): FormFieldStructureBuilder {
    this.message = message;
    return this;
  }
  public setDisabled(disabled: boolean): FormFieldStructureBuilder {
    this.disabled = disabled;
    return this;
  }
  public setConfirmationObsv(confirmationObsv: Observable<any>) {
    this.confirmationObsv = confirmationObsv;
    return this;
  }
  public setHandleConfirmation(handleConfirmation: (event: any) => void) {
    this.handleConfirmation = handleConfirmation;
    return this;
  }
  public setInjectableConfig(injectableConfig: FormInjectableFormFieldConfig) {
    this.injectableConfig = injectableConfig;
    return this;
  }
  public setHyperlinkTarget(hyperlinkTarget: string): FormFieldStructureBuilder {
    this.hyperlinkTarget = hyperlinkTarget;
    return this;
  }
  public setCheckboxConfig(checkboxConfig: FormCheckboxConfig): FormFieldStructureBuilder {
    this.checkboxConfig = checkboxConfig;
    return this;
  }
  public setNumberConfig(numberConfig: FormNumberConfig): FormFieldStructureBuilder {
    this.numberConfig = numberConfig;
    return this;
  }
  public setShowLabelInRequiredErrorMessage(showLabel: boolean): FormFieldStructureBuilder {
    this.showLabelInRequiredErrorMessage = showLabel;
    return this;
  }
  public setReadOnly(readOnly: boolean): FormFieldStructureBuilder {
    this.readOnly = readOnly;
    return this;
  }
  public setRatingConfig(ratingConfig: FormRatingConfig): FormFieldStructureBuilder {
    this.ratingConfig = ratingConfig;
    return this;
  }
  public buildFormStructure(): FormFieldStructure {
    return new FormFieldStructure(
      this.inputType,
      this.fieldName,
      this.placeholder,
      this.labelIcon,
      this.label,
      this.required ? true : false,
      this.isHidden ? true : false,
      this.isInlineField ? true : false,
      this.maxLength,
      this.inputType === FormFieldType.select ? this.selectConfig : null,
      this.inputType === FormFieldType.typeahead ? this.typeaheadConfig : null,
      this.inputType === FormFieldType.multiselect ? this.multiselectConfig : null,
      this.inputType === FormFieldType.radio ? this.radioConfig : null,
      this.inputType === FormFieldType.textlist ? this.textlistConfig : null,
      this.inputType === FormFieldType.action ? this.actionConfig : null,
      this.validationPattern,
      this.patternErrorMessage,
      this.controlOptions,
      this.flexBasisPct,
      this.flexGrow,
      this.descriptionText,
      this.fullLength,
      this.inputType === FormFieldType.multifield ? this.multifieldConfig : null,
      this.message,
      this.inputType === FormFieldType.banner ? this.bannerConfig : null,
      this.disabled,
      this.isEditable,
      this.confirmationObsv,
      this.handleConfirmation,
      this.inputType === FormFieldType.injectable ? this.injectableConfig : null,
      this.hyperlinkTarget,
      this.checkboxConfig,
      this.numberConfig,
      this.showLabelInRequiredErrorMessage,
      this.readOnly,
      this.inputType === FormFieldType.rating ? this.ratingConfig : null,
      this.inputType === FormFieldType.incrementer ? this.incrementerConfig : null,
    );
  }
}
