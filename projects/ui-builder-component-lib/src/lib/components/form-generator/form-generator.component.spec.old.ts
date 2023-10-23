import { Overlay } from '@angular/cdk/overlay';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BehaviorSubject } from 'rxjs';
import { TooltipDirective } from '../../directives/tooltip/tooltip.directive';
import { FormFieldType } from '../../enums/form-field-type';
import { FormFieldStructure, FormFieldStructureBuilder } from '../../model/form-generator/form-field-structure';
import { FormFieldVariables } from '../../model/form-generator/form-field-variables';
import { FormMultiselectConfig } from '../../model/form-generator/form-multiselect-config';
import { FormSectionStructure } from '../../model/form-generator/form-section-structure';
import { FormStructure } from '../../model/form-generator/form-stucture';
import { FormTypeaheadConfig } from '../../model/form-generator/form-typeahead-config';
import { ItemSummary } from '../../model/item-summary';
import { SelectOption } from '../../model/select-option';
import { ExpansionPanelComponent } from '../expansion-panel/expansion-panel.component';
import { FormFieldComponent } from '../form-field/form-field.component';
import { MultiselectComponent } from '../multiselect/multiselect.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { TextListComponent } from '../text-list/text-list.component';
import { TypeaheadFieldComponent, TypeaheadResultComponent } from '../typeahead-field/typeahead-field.component';
import { FormGeneratorComponent } from './form-generator.component';
import { FormGroupComponent } from './form-group.component';
describe('FormGeneratorComp', () => {
  let comp: FormGeneratorComponent;
  let fixture: ComponentFixture<FormGeneratorComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let els: HTMLElement[];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormFieldComponent,
        FormGeneratorComponent,
        TooltipDirective,
        ExpansionPanelComponent,
        TypeaheadFieldComponent,
        MultiselectComponent,
        SearchBarComponent,
        TypeaheadResultComponent,
        FormGroupComponent,
        TextListComponent,
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatMomentDateModule,
        MatOptionModule,
        MatRadioModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatExpansionModule,
        FormsModule,
        MatProgressSpinnerModule,
      ],
      providers: [Overlay],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(FormGeneratorComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.detectChanges();
      });
  }));
  it('should have cos expansion panel', async(() => {
    comp.formStructure = new FormStructure([new FormSectionStructure([new FormFieldStructure(FormFieldType.text, 'testField')], 'test Name', false)]);
    fixture.detectChanges();
    els = de.queryAll(By.css('lib-expansion-panel')).map((obj) => obj.nativeElement);
    expect(els.length).toEqual(1);
    el = els[0];
    expect(el.getAttribute('ng-reflect-title')).toEqual('test Name');
    expect(el.getAttribute('ng-reflect-expanded')).toEqual('false');
    expect(el.getAttribute('ng-reflect-count')).toEqual('-1');
  }));
  it('should have a cos form field', async(() => {
    comp.formStructure = new FormStructure([
      new FormSectionStructure(
        [
          new FormFieldStructure(
            FormFieldType.text,
            'testField',
            'placeholder',
            'icon',
            'test label',
            false,
            false,
            false,
            7,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            'errorMessage',
          ),
        ],
        'test group',
      ),
    ]);
    fixture.detectChanges();
    els = de.queryAll(By.css('lib-form-field')).map((obj) => obj.nativeElement);
    expect(els.length).toEqual(1);
    el = els[0];
    expect(el.getAttribute('ng-reflect-label')).toEqual('test label');
    expect(el.getAttribute('ng-reflect-icon-html')).toEqual('icon');
    expect(el.getAttribute('ng-reflect-form-field-control')).not.toBeNull();
    expect(el.getAttribute('ng-reflect-submitted')).toEqual('false');
    expect(el.getAttribute('ng-reflect-max-length')).toEqual('7');
    expect(el.getAttribute('ng-reflect-type')).toEqual(FormFieldType.text);
    expect(el.getAttribute('ng-reflect-options')).toBeNull();
    expect(el.getAttribute('ng-reflect-required')).toEqual('false');
    expect(el.getAttribute('ng-reflect-placeholder')).toEqual('placeholder');
    expect(el.getAttribute('id')).toEqual('test grouptestField');
    expect(el.getAttribute('ng-reflect-invalid-pattern-message')).toEqual('errorMessage');
    comp.formInfo.formGroup.get(['test group', 'testField']).markAsTouched();
    fixture.detectChanges();
    expect(el.getAttribute('ng-reflect-submitted')).toEqual('true');
  }));
  it('should have a cos form field -- hidden', async(() => {
    comp.formStructure = new FormStructure([
      new FormSectionStructure(
        [
          new FormFieldStructure(
            FormFieldType.text,
            'testField',
            'placeholder',
            'icon',
            'test label',
            false,
            true,
            false,
            7,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            'errorMessage',
          ),
        ],
        'test group',
      ),
    ]);
    fixture.detectChanges();
    els = de.queryAll(By.css('lib-form-field')).map((obj) => obj.nativeElement);
    expect(els.length).toEqual(0);
  }));
  it('should have typeahead', async(() => {
    comp.formStructure = new FormStructure([
      new FormSectionStructure(
        [
          new FormFieldStructure(
            FormFieldType.typeahead,
            'testField',
            'placeholder',
            'icon',
            'test label',
            false,
            false,
            false,
            7,
            null,
            new FormTypeaheadConfig(
              [
                {
                  searchFunction: (value: string) => {
                    return new BehaviorSubject(['test']).asObservable();
                  },
                  mappingFunction: (value: any) => {
                    const summary = <ItemSummary<any>>{};
                    return new BehaviorSubject(summary).asObservable();
                  },
                  filterFunction: () => true,
                  sortFunction: (a, b) => 1,
                },
              ],
              () => {},
              () => 'test',
              'alternateText',
              'defaultText',
              null,
              () => {},
              'errorMessage',
              'suggestionText',
              true,
            ),
            null,
            null,
            null,
            null,
            null,
            'errorMessage',
          ),
        ],
        'test group',
      ),
    ]);
    fixture.detectChanges();
    el = de.query(By.css('.form-group__typeahead-section')).nativeElement;
    expect(el.getAttribute('id')).toEqual('test grouptestField');
    el = de.query(By.css('.form-group__label')).nativeElement;
    expect(el.innerText).toEqual('test label');
    els = de.queryAll(By.css('lib-typeahead-field')).map((obj) => obj.nativeElement);
    el = els[0];
    expect(el.getAttribute('ng-reflect-entity-functions')).not.toBeNull();
    expect(el.getAttribute('ng-reflect-selection-function')).not.toBeNull();
    expect(el.getAttribute('ng-reflect-placeholder-text')).toEqual('placeholder');
    expect(el.getAttribute('ng-reflect-alternate-text')).toEqual('alternateText');
    expect(el.getAttribute('ng-reflect-default-text')).toEqual('defaultText');
    expect(el.getAttribute('ng-reflect-alternate-function')).not.toBeNull();
    expect(el.getAttribute('ng-reflect-default-search-string')).toBeNull();
    expect(el.getAttribute('ng-reflect-error')).toEqual('');
    expect(el.getAttribute('ng-reflect-suggestion-text')).toEqual('suggestionText');
    expect(el.getAttribute('ng-reflect-required')).toEqual('false');
    comp.formInfo.formGroup.get(['test group', 'testField']).markAsTouched();
    comp.formInfo.formGroup.get(['test group', 'testField']).setErrors({ pattern: true });
    fixture.detectChanges();
    expect(el.getAttribute('ng-reflect-error')).toEqual('errorMessage');
  }));
  it('should have typeahead -- hidden', async(() => {
    comp.formStructure = new FormStructure([
      new FormSectionStructure(
        [
          new FormFieldStructure(
            FormFieldType.typeahead,
            'testField',
            'placeholder',
            'icon',
            'test label',
            false,
            true,
            false,
            7,
            null,
            new FormTypeaheadConfig(
              [
                {
                  searchFunction: (value: string) => {
                    return new BehaviorSubject(['test']).asObservable();
                  },
                  mappingFunction: (value: any) => {
                    const summary = <ItemSummary<any>>{};
                    return new BehaviorSubject(summary).asObservable();
                  },
                  filterFunction: () => true,
                  sortFunction: (a, b) => 1,
                },
              ],
              () => {},
              () => 'test',
              'alternateText',
              'defaultText',
              null,
              () => {},
              'errorMessage',
              'suggestionText',
              true,
            ),
            null,
            null,
            null,
            null,
            null,
            'errorMessage',
          ),
        ],
        'test group',
      ),
    ]);
    fixture.detectChanges();
    els = de.queryAll(By.css('lib-typeahead-field')).map((obj) => obj.nativeElement);
    expect(els.length).toEqual(0);
  }));
  it('should have multiselect', async(() => {
    const options = [
      { option: new SelectOption<any>('', ''), IsDefaulted: true },
      { option: new SelectOption<any>('', ''), IsDefaulted: false },
    ];
    comp.formStructure = new FormStructure([
      new FormSectionStructure(
        [new FormFieldStructure(FormFieldType.multiselect, 'multiselect', null, null, 'label', true, false, null, null, null, null, new FormMultiselectConfig(options))],
        'group',
      ),
    ]);
    fixture.detectChanges();
    el = de.query(By.css('.form-group__multiselect-section')).nativeElement;
    expect(el.getAttribute('id')).toEqual('groupmultiselect');
    el = de.query(By.css('.form-group__label')).nativeElement;
    expect(el.innerText).toEqual('label');
    el = de.query(By.css('lib-multiselect')).nativeElement;
    expect(el.getAttribute('ng-reflect-dialog-title')).toEqual('label');
    expect(el.getAttribute('ng-reflect-options')).not.toBeNull();
    expect(el.getAttribute('ng-reflect-selected-options')).not.toBeNull();
    expect(el.getAttribute('ng-reflect-submitted')).toEqual('false');
    expect(el.getAttribute('ng-reflect-required')).toEqual('true');
  }));
  it('should have multiselect -- hidden', async(() => {
    const options = [
      { option: new SelectOption<any>('', ''), IsDefaulted: true },
      { option: new SelectOption<any>('', ''), IsDefaulted: false },
    ];
    comp.formStructure = new FormStructure([
      new FormSectionStructure(
        [new FormFieldStructure(FormFieldType.multiselect, 'multiselect', null, null, 'label', true, true, null, null, null, null, new FormMultiselectConfig(options))],
        'group',
      ),
    ]);
    fixture.detectChanges();
    expect(de.query(By.css('lib-multiselect'))).toBeNull();
  }));
  it('should display description text', async(() => {
    comp.formStructure = new FormStructure([
      new FormSectionStructure([new FormFieldStructureBuilder(FormFieldType.text, 'text').setDescriptionText('Description text').buildFormStructure()], 'group'),
    ]);
    fixture.detectChanges();
    el = de.query(By.css('.form-group__description-text')).nativeElement;
    expect(el.textContent.trim()).toEqual('Description text');
  }));
  it('should calculate flex basis pct', async(() => {
    comp.formStructure = new FormStructure([
      new FormSectionStructure(
        [
          new FormFieldStructureBuilder(FormFieldType.text, 'text').setFlexBasis(46).setIsInlineField(true).buildFormStructure(),
          new FormFieldStructureBuilder(FormFieldType.text, 'text').buildFormStructure(),
        ],
        'group',
      ),
    ]);
    fixture.detectChanges();
    const row: FormFieldVariables[] = comp.formInfo.groups[0].fields[0];
    expect(row[1].flexBasisPct).toEqual(54);
  }));
});
