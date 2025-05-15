import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmationModalComponent,
  FormFieldStructure,
  FormFieldStructureBuilder,
  FormFieldType,
  FormSectionStructure,
  FormSectionVariables,
  FormSelectConfig,
  FormTypeaheadConfig,
  ItemActionHandler,
  ItemInfoLine,
  ItemSummary,
  SelectOption,
} from 'ui-builder-component-lib';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { NumberRegEx } from '../../lookups/regex.lookup';

@Component({
  selector: 'app-multi-field-demo',
  templateUrl: './multi-field-demo.component.html',
  styleUrls: ['./multi-field-demo.component.scss'],
})
export class MultiFieldDemoComponent implements OnInit {
  public formControl: UntypedFormControl = new UntypedFormControl([]);
  public config: FormSectionVariables;
  public maxLength = 3;
  public currencySymbol = '$';
  public errorMessage = 'Required';
  public disabled = false;

  private confirmationSubject: ReplaySubject<{ fieldName: string; fieldValue: any }> = new ReplaySubject();
  public confirmationObservable: Observable<{ fieldName: string; fieldValue: any }> = this.confirmationSubject.asObservable();

  private headerIconTray: ItemActionHandler[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.formControl.setValue([
      ['A', true, 50, 56, 37, 'Desc'],
      ['B', false, 50, 124, 355, 'Desc2'],
    ]);

    const typeaheadStructure: FormFieldStructure = new FormFieldStructureBuilder(FormFieldType.typeahead, 'Typeahead1')
      .setLabel('Typeahead')
      .setRequired(true)
      .setPlaceholder('Search...')
      .setIsInlineField(true)
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
      .buildFormStructure();
    const selectStructure: FormFieldStructure = new FormFieldStructureBuilder(FormFieldType.select, 'Select1')
      .setLabel('Select Field')
      .setPlaceholder('Select')
      .setIsInlineField(true)
      .setRequired(true)
      .setSelectConfig(new FormSelectConfig([new SelectOption('Yes', true), new SelectOption('No', false)]))
      .buildFormStructure();
    const currencyStructure: FormFieldStructure = new FormFieldStructureBuilder(FormFieldType.currency, 'Currency1').setLabel('Currency Field').buildFormStructure();
    const number1Structure: FormFieldStructure = new FormFieldStructureBuilder(FormFieldType.number, 'Number1')
      .setLabel('Number Field 1')
      .setPlaceholder('Test number field')
      .setValidationPattern(NumberRegEx)
      .setPatternErrorMessage('Invalid Pattern')
      .setFlexBasis(20)
      .setIsInlineField(true)
      .buildFormStructure();
    const number2Structure: FormFieldStructure = new FormFieldStructureBuilder(FormFieldType.number, 'Number2')
      .setLabel('Number Field 2')
      .setPlaceholder('Test number field')
      .setValidationPattern(NumberRegEx)
      .setPatternErrorMessage('Invalid Pattern')
      .setFlexBasis(20)
      .buildFormStructure();

    const textAreaStructure: FormFieldStructure = new FormFieldStructureBuilder(FormFieldType.textarea, 'Textarea')
      .setLabel('Textarea')
      .setPlaceholder('Textarea field')
      .buildFormStructure();

    const dateStructure: FormFieldStructure = new FormFieldStructureBuilder(FormFieldType.date, 'Date1').setIsInlineField(true).setFlexBasis(15).buildFormStructure();
    const textStructure: FormFieldStructure = new FormFieldStructureBuilder(FormFieldType.text, 'Text3').setIsInlineField(true).setRequired(true).buildFormStructure();

    const formSectionStructure: FormSectionStructure = new FormSectionStructure(
      [typeaheadStructure, selectStructure, currencyStructure, number1Structure, number2Structure, textAreaStructure, dateStructure, textStructure],
      null,
      null,
    );

    this.config = formSectionStructure.convertStructureToVariables();
  }

  public handleRowEdited(event: { rowFormControls: UntypedFormControl[][]; config: FormSectionVariables }): void {}

  public handleValueChanged(event: { formControl: UntypedFormControl; config: FormSectionVariables }): void {}

  public handleRowDeleted(event: { fieldName: string; fieldValue: any }): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '50vw',
      minWidth: '300px',
      disableClose: true,
      data: {
        title: 'Warning',
        headerIconTray: this.headerIconTray,
        dialogMessage: "This is a warning message. Click 'ok' to remove a row.",
        confirmText: 'Ok',
      },
    });

    dialogRef.afterClosed().subscribe((value: boolean) => {
      this.confirmationSubject.next(value ? event : { ...event, fieldValue: -1 });
    });
  }
}
