import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { cloneDeep } from 'lodash';
import {
  FormActionConfig,
  FormBannerConfig,
  FormCheckboxConfig,
  FormFieldStructure,
  FormFieldStructureBuilder,
  FormFieldType,
  FormGenStyle,
  FormGroupExpanderChange,
  FormInjectableFormFieldConfig,
  FormMultiselectConfig,
  FormRadioConfig,
  FormRatingConfig,
  FormSectionStructure,
  FormSectionVariables,
  FormSelectConfig,
  FormStructure,
  FormTextlistConfig,
  FormTypeaheadConfig,
  ItemActionHandler,
  ItemInfoLine,
  ItemSummary,
  SelectOption,
  StatusTypes,
} from 'ui-builder-component-lib';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { NumberRegEx } from '../../lookups/regex.lookup';
import { InjectableFormFieldDemoComponent } from './injectable-form-field-demo/injectable-form-field-demo.component';

@Component({
  selector: 'app-form-generator-demo',
  templateUrl: './form-generator-demo.component.html',
  styleUrls: ['./form-generator-demo.component.scss'],
})
export class FormGeneratorDemoComponent implements OnInit {
  public formStructure: FormStructure;
  public formStructure2: FormStructure;

  private groupChangesSubject: ReplaySubject<FormSectionStructure[]> = new ReplaySubject();
  public groupChangesObsv: Observable<FormSectionStructure[]> = this.groupChangesSubject.asObservable();

  private fieldChangesSubject: ReplaySubject<{ groupName: string; structure: FormFieldStructure }[]> = new ReplaySubject();
  public fieldChangesObsv: Observable<{ groupName: string; structure: FormFieldStructure }[]> = this.fieldChangesSubject.asObservable();

  public useTooltips = true;
  private formGroup: UntypedFormGroup;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private domSanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.buildFormStructure();
  }

  public handleMultifieldRowEdit(event: { rowFormControls: UntypedFormControl[][]; config: FormSectionVariables }): void {
    if (event.rowFormControls[0][1].value) {
      event.config.fields[0][3].required = true;
      event.rowFormControls[0][3].setValidators(Validators.required);
      event.rowFormControls[0][3].updateValueAndValidity({ emitEvent: false });
    } else {
      event.config.fields[0][3].required = false;
      event.rowFormControls[0][3].clearValidators();
      event.rowFormControls[0][3].updateValueAndValidity({ emitEvent: false });
    }
  }

  public handleMultifieldValueChanged(event: { formControl: UntypedFormControl; config: FormSectionVariables }): void {
    event.config.fields[0][3].required = false;
  }

  public displayTitle(fieldGroup): void {
    alert(fieldGroup.title);
  }

  public changeRequired(): void {
    this.formStructure.groupStructures[0].fieldStructures[1].required = true;
    this.fieldChangesSubject.next([{ groupName: this.formStructure.groupStructures[0].groupName, structure: this.formStructure.groupStructures[0].fieldStructures[1] }]);
  }

  private doSomething(): void {
    // something
  }

  public handleExpanderChanged(event: FormGroupExpanderChange) {
    alert(`Expansion panel for group "${event.groupTitle}" was toggled and is now ${event.isOpened ? 'open' : 'closed'}.`);
  }

  public handleFormGroup(event: UntypedFormGroup) {
    this.formGroup = event;
    this.formGroup.get('Group 1').get('CheckboxMulti').setValue([2]);
  }

  public showAlert(): void {
    alert('Show More was clicked');
  }

  private buildFormStructure(): void {
    this.formStructure = new FormStructure([
      new FormSectionStructure(
        [
          new FormFieldStructureBuilder(FormFieldType.injectable, 'Injectable')
            .setInjectableConfig(
              new FormInjectableFormFieldConfig(InjectableFormFieldDemoComponent, {
                extraText: 'This extra text is passed into the component using config. When you click it, it executes a function which is passed in similarly.',
                extraTextAction: () => alert('Injectable form field config function has been executed. This function could be an http call, open a new tab, or anything else.'),
              }),
            )
            .buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.banner, 'Banner')
            .setLabel('Banner Label')
            .setDescriptionText('This text is a really long banner description that spans multiple lines. This text is a really long banner description that spans multiple lines.')
            .setBannerConfig(new FormBannerConfig(StatusTypes.Error))
            .setFlexGrow(0)
            .buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.number, 'NumberField')
            .setLabel('Number Field')
            .setPlaceholder('Test Number field')
            .setRequired(true)
            .setIsInlineField(true)
            .setValidationPattern(NumberRegEx)
            .setPatternErrorMessage('Invalid Pattern')
            .setFlexBasis(33)
            .buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.text, 'TextField2')
            .setLabel('Text Field')
            .setPlaceholder('Test text field')
            .setDescriptionText('Description Text 2')
            .setFlexBasis(67)
            .buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.incrementer, 'Incrementer')
            .setLabel('Incrementer Field')
            .setPlaceholder('Test incrementer field')
            .setDescriptionText('Description Incrementer')
            .setFlexBasis(67)
            .buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.hyperlink, 'HyperLink')
            .setLabel('Hyperlink Field')
            .setPlaceholder('Test hyperlink field')
            .setDescriptionText('Description Hyperlink 2')
            .setFlexBasis(67)
            .buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.text, 'TextField3').setLabel('Full Length Text Field').setFullLength(true).buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.text, 'TextField4')
            .setLabel('Text Field with Tooltip')
            .setDescriptionText('Description Text 4 when tooltips are enabled')
            .buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.text, 'TextField5')
            .setDescriptionText('Description Text 5 when field has no label and tooltips are enabled')
            .buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.currency, 'CurrencyField1')
            .setLabel('Currency Field 1')
            .setRequired(true)
            .setDescriptionText('Required Currency field 1')
            .buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.currency, 'CurrencyField2').setLabel('Currency Field 2').setDescriptionText('Currency field 2').buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.time, 'Time').setLabel('Time Field').setDescriptionText('Time Field').buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.radio, 'Radio')
            .setLabel('Radio Field')
            .setRequired(true)
            .setRadioConfig(new FormRadioConfig([new SelectOption('Option 1', 1), new SelectOption('Option 2', 2), new SelectOption('Option 3', 3)]))
            .buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.checkbox, 'CheckboxSingle').setLabel('Individual Checkbox').buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.checkbox, 'CheckboxMulti')
            .setLabel('Multiple Checkboxes')
            .setRequired(true)
            .setCheckboxConfig(new FormCheckboxConfig([new SelectOption('Option 1', 1), new SelectOption('Option 2', 2), new SelectOption('Option 3', 3)]))
            .buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.toggle, 'Slide Toggle').setLabel('Slide Toggle').buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.select, 'SelectField')
            .setLabel('Select Field')
            .setPlaceholder('Select')
            .setIsInlineField(false)
            .setFlexGrow(0)
            .setSelectConfig(new FormSelectConfig([new SelectOption('Yes', true), new SelectOption('No', false)]))
            .buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.select, 'SelectField2')
            .setLabel('Select Field')
            .setPlaceholder('Select')
            .setIsInlineField(true)
            .setRequired(true)
            .setFlexGrow(0)
            .setSelectConfig(new FormSelectConfig([new SelectOption('Yes', true), new SelectOption('No', false)]))
            .buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.date, 'DateField').setLabel('Date Field').setRequired(true).setFlexGrow(0).setIsInlineField(true).buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.action, 'Action')
            .setLabel('Action')
            .setDescriptionText('Action Text')
            .setActionConfig(new FormActionConfig(() => alert('action has actioned')))
            .setFlexGrow(0)
            .buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.message, 'Message').setLabel('Message').setMessage('Test Message').buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.rating, 'Rating')
            .setLabel('Rating')
            .setRequired(true)
            .setShowLabelInRequiredErrorMessage(false)
            .setRatingConfig(
              new FormRatingConfig([
                new SelectOption('5', '6a49f67a-bc63-4342-b425-a8c4a584afa1'),
                new SelectOption('4', '7a49f67a-bc63-4342-b425-a8c4a584afa0'),
                new SelectOption('3', '8a49f67a-bc63-4342-b425-a8c4a584afa9'),
                new SelectOption('2', '6a476c84-63ee-4b95-b782-565796f2a7d5'),
                new SelectOption('1', '7d287a63-9193-4e8f-9bb0-6042e6bd2aae'),
              ]),
            )
            .buildFormStructure(),
        ],
        'Group 1',
        true,
        new ItemActionHandler('Show more', (groupInfo) => this.displayTitle(groupInfo), null),
        false,
        [
          new ItemActionHandler(
            this.domSanitizer.bypassSecurityTrustHtml(`
        <i class="icon icon-info-circle" style="font-size:16px; display:flex; align-items:center;"></i>
      `),
            null,
            'Default tooltip to show information',
          ),
        ],
      ),
      new FormSectionStructure(
        [
          new FormFieldStructureBuilder(FormFieldType.multiselect, 'Multiselect')
            .setLabel('Multiselect')
            .setMultiselectConfig(
              new FormMultiselectConfig(
                [
                  {
                    groupName: 'Group 1',
                    options: [new SelectOption('Option 1', true), new SelectOption('Option 2', false), new SelectOption('Default', true)],
                  },
                ],
                [new SelectOption('Default', true)],
              ),
            )
            .setDescriptionText('Example multiselect description text string')
            .buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.typeahead, 'Typeahead')
            .setPlaceholder('Search')
            .setRequired(true)
            .setTypeaheadConfig(
              new FormTypeaheadConfig(
                [
                  {
                    searchFunction: (value: string) => new BehaviorSubject(['test 1', 'test 2']).asObservable(),
                    mappingFunction: (text: string) => {
                      return new BehaviorSubject(new ItemSummary(new ItemInfoLine(text, text, () => {}), [], [], []));
                    },
                    filterFunction: () => true,
                    sortFunction: () => 1,
                  },
                ],
                () => this.doSomething(),
              ),
            )
            .buildFormStructure(),
        ],
        'Group 2',
        false,
      ),
      new FormSectionStructure(
        [new FormFieldStructureBuilder(FormFieldType.textarea, 'Textarea').setLabel('Textarea').setPlaceholder('Textarea field').buildFormStructure()],
        'Group 3',
        true,
        new ItemActionHandler('Show more', this.showAlert),
      ),
      new FormSectionStructure(
        [
          new FormFieldStructureBuilder(FormFieldType.textlist, 'textlist').setTextlistConfig(new FormTextlistConfig(['example 1', 'example 2'])).buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.textlist, 'textlist')
            .setTextlistConfig(new FormTextlistConfig(['link 1', 'https://example.com'], true))
            .setDisabled(true)
            .buildFormStructure(),
        ],
        'Group 4',
        true,
        new ItemActionHandler('Show more', this.showAlert),
        true,
      ),
      new FormSectionStructure(
        [
          new FormFieldStructureBuilder(FormFieldType.multifield, 'multifield')
            .setMultifieldConfig({
              config: new FormSectionStructure(
                [
                  new FormFieldStructureBuilder(FormFieldType.typeahead, 'Typeahead1')
                    .setLabel('Typeahead')
                    .setRequired(true)
                    .setPlaceholder('Search...')
                    .setIsInlineField(true)
                    .setDescriptionText('Typeahead description text')
                    .setTypeaheadConfig(
                      new FormTypeaheadConfig([
                        {
                          searchFunction: (value: string) => new BehaviorSubject(['test 1', 'test 2']).asObservable(),
                          mappingFunction: (text: string) => {
                            return new BehaviorSubject(new ItemSummary(new ItemInfoLine(text, text, () => {}), [], [], []));
                          },
                          filterFunction: () => true,
                          sortFunction: () => 1,
                        },
                      ]),
                    )
                    .buildFormStructure(),
                  new FormFieldStructureBuilder(FormFieldType.select, 'Select1')
                    .setLabel('Select Field')
                    .setPlaceholder('Select')
                    .setRequired(true)
                    .setIsInlineField(true)
                    .setDescriptionText('Select1 description text')
                    .setSelectConfig(new FormSelectConfig([new SelectOption('Yes', true), new SelectOption('No', false)]))
                    .buildFormStructure(),
                  new FormFieldStructureBuilder(FormFieldType.number, 'Number1')
                    .setLabel('Number Field 1')
                    .setPlaceholder('Test number field')
                    .setValidationPattern(NumberRegEx)
                    .setPatternErrorMessage('Invalid Pattern')
                    .setFlexBasis(20)
                    .setIsInlineField(true)
                    .setDescriptionText('Number1 description text')
                    .buildFormStructure(),
                  new FormFieldStructureBuilder(FormFieldType.number, 'Number2')
                    .setLabel('Number Field 2')
                    .setPlaceholder('Test number field')
                    .setValidationPattern(NumberRegEx)
                    .setPatternErrorMessage('Invalid Pattern')
                    .setFlexBasis(20)
                    .setDescriptionText('Number2 description text')
                    .buildFormStructure(),
                  new FormFieldStructureBuilder(FormFieldType.textarea, 'Textarea')
                    .setLabel('Textarea')
                    .setDescriptionText('Textarea description text')
                    .setPlaceholder('Textarea field')
                    .buildFormStructure(),
                ],
                null,
                null,
              ).convertStructureToVariables(),
              newRowText: 'Add New Item',
              maxLength: 5,
              handleRowEdit: (event: { rowFormControls: UntypedFormControl[][]; config: FormSectionVariables }) => this.handleMultifieldRowEdit(event),
              handleValueChanged: (event: { formControl: UntypedFormControl; config: FormSectionVariables }) => this.handleMultifieldValueChanged(event),
            })
            .buildFormStructure(),
        ],
        'Group 5',
        true,
        new ItemActionHandler('Show more', this.showAlert),
      ),
    ]);

    this.formStructure2 = cloneDeep(this.formStructure);
    this.formStructure2.formStyle = FormGenStyle.flat;
  }
}
