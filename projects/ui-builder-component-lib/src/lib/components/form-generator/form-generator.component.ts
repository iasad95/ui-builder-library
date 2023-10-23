import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { FormFieldType } from '../../enums/form-field-type';
import { FormGenStyle } from '../../enums/form-gen-style';
import { FormFieldStructure } from '../../model/form-generator/form-field-structure';
import { FormGroupExpanderChange } from '../../model/form-generator/form-group-expander-change';
import { FormSectionStructure } from '../../model/form-generator/form-section-structure';
import { FormSectionVariables } from '../../model/form-generator/form-section-variables';
import { FormStructure } from '../../model/form-generator/form-stucture';
import { FormVariables } from '../../model/form-generator/form-variables';
@Component({
  selector: 'lib-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss'],
})
export class FormGeneratorComponent implements OnDestroy, AfterViewInit {
  public FormFieldType = FormFieldType;
  public FormGenStyle = FormGenStyle;
  public formLoaded = false;
  public formInfo: FormVariables = new FormVariables();
  @Input() set formStructure(structure: FormStructure) {
    this.loadStructureInfo(structure);
  }
  @Input() set fieldChanges(obsv: Observable<{ groupName: string; structure: FormFieldStructure }[]>) {
    this.fieldChangeObsvSwitched.next();
    obsv.pipe(takeUntil(this.fieldChangeObsvSwitched)).subscribe((values) => {
      values.forEach((value) => {
        this.updateFieldInfo(value.groupName, value.structure);
      });
      this.changeDetectorRef.detectChanges();
    });
  }
  @Input() set groupChanges(obsv: Observable<FormSectionStructure[]>) {
    this.groupChangeObsvSwitched.next();
    obsv.pipe(takeUntil(this.groupChangeObsvSwitched)).subscribe((groups) => {
      groups.forEach((group) => {
        this.updateGroupInfo(group);
      });
      this.changeDetectorRef.detectChanges();
    });
  }
  @Input() set formStyle(style: FormGenStyle) {
    this.formInfo.formStyle = style;
  }
  @Input() dateFormat: string;
  @Input() currencySymbol = '$';
  @Input() hideCents = false;
  @Input() useTooltips = false;
  private fieldChangeObsvSwitched: Subject<void> = new Subject();
  private groupChangeObsvSwitched: Subject<void> = new Subject();
  private componentDestroyed$: Subject<void> = new Subject();
  @Output() formGroupUpdate: EventEmitter<UntypedFormGroup> = new EventEmitter();
  @Output() formGroupExpanderChanged: EventEmitter<FormGroupExpanderChange> = new EventEmitter();
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.fieldChangeObsvSwitched.next();
    this.groupChangeObsvSwitched.next();
    this.fieldChangeObsvSwitched.complete();
    this.componentDestroyed$.complete();
    this.groupChangeObsvSwitched.complete();
  }
  ngAfterViewInit(): void {
    if (this.formInfo.formGroup) {
      this.formGroupUpdate.emit(this.formInfo.formGroup);
    }
  }
  private loadStructureInfo(structure: FormStructure): void {
    const formInfo = new FormVariables();
    formInfo.formStyle = structure.formStyle;
    structure.groupStructures.forEach((groupStructure) => {
      formInfo.addGroupInfo(groupStructure.convertStructureToVariables());
    });
    this.formInfo.formStyle = formInfo.formStyle;
    this.formInfo.formGroup = formInfo.formGroup;
    this.formLoaded = true;
    this.formInfo.groups = formInfo.groups.filter((group) => group.fields.length > 0);
    this.changeDetectorRef.detectChanges();
  }
  private updateFieldInfo(groupId: string, structure: FormFieldStructure) {
    const groupIndex = this.formInfo.groups.findIndex((group) => group.id === groupId);
    if (groupIndex > -1) {
      const info = structure.convertStructureToVariables();
      const control = <UntypedFormControl>this.formInfo.formGroup.get([groupId, structure.fieldName]);
      if (control) {
        const validators: ValidatorFn[] = [];
        if (structure.required) {
          validators.push(Validators.required);
        }
        if (structure.validationPattern && structure.inputType !== FormFieldType.date) {
          validators.push(Validators.pattern(structure.validationPattern));
        }
        const controlOptions = structure.controlOptions ? structure.controlOptions : {};
        controlOptions.validators = validators;
        control.setValidators(validators);
        if (structure.required && control.value == null && control.errors == null) {
          control.updateValueAndValidity();
        }
        info.control = control;
      }
      this.formInfo.groups[groupIndex].trackId = uuid();
      this.formInfo.groups[groupIndex].addFieldInfo(true, info);
    }
  }
  private updateGroupInfo(structure: FormSectionStructure): void {
    const group = this.formInfo.groups.find((nextGroup) => nextGroup.id === structure.id);
    if (group) {
      group.expanded = structure.expanded;
      group.footerAction = structure.footerAction;
      group.title = structure.groupName;
    }
  }
  public handleGroupClosed(groupInfo: FormSectionVariables): void {
    groupInfo.expanded = false;
    if (this.formInfo.formStyle === FormGenStyle.expander) {
      this.formGroupExpanderChanged.emit(new FormGroupExpanderChange(false, groupInfo.title));
    }
  }
  public handleGroupOpened(groupInfo: FormSectionVariables): void {
    groupInfo.expanded = true;
    if (this.formInfo.formStyle === FormGenStyle.expander) {
      this.formGroupExpanderChanged.emit(new FormGroupExpanderChange(true, groupInfo.title));
    }
  }
  public trackGroup(index: number, group: FormSectionVariables) {
    return group.trackId;
  }
}
