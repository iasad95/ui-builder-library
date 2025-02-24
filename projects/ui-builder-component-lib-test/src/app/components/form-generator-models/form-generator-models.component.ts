import { Component, OnInit } from '@angular/core';
import {
  FormFieldStructure,
  FormFieldType,
  FormMultiselectConfig,
  FormSectionStructure,
  FormSelectConfig,
  FormStructure,
  FormTypeaheadConfig,
  ItemInfoLine,
  ItemSummary,
  SelectOption,
} from 'ui-builder-component-lib';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-form-generator-models',
  templateUrl: './form-generator-models.component.html',
  styleUrls: ['./form-generator-models.component.scss'],
})
export class FormGeneratorModelsComponent implements OnInit {
  private selectConfig = new FormSelectConfig([new SelectOption('', {})]);
  private multiselectConfig = new FormMultiselectConfig([{ groupName: 'Group 1', options: [new SelectOption('', {})] }], []);
  private typeaheadConfig = new FormTypeaheadConfig(
    [
      {
        searchFunction: () => new BehaviorSubject([]).asObservable(),
        mappingFunction: () => new BehaviorSubject(new ItemSummary(new ItemInfoLine('', '', () => {}), [], [], {})).asObservable(),
        filterFunction: () => true,
        sortFunction: () => 1,
      },
    ],
    () => {},
    () => {},
    '',
    '',
    '',
    () => {},
    '',
  );
  private fieldStructure: FormFieldStructure = new FormFieldStructure(
    FormFieldType.select,
    '',
    '',
    true,
    '',
    true,
    true,
    true,
    1,
    this.selectConfig,
    this.typeaheadConfig,
    this.multiselectConfig,
  );
  private sectionStructure: FormSectionStructure = new FormSectionStructure([this.fieldStructure], '');
  private formStructure: FormStructure = new FormStructure([this.sectionStructure]);

  public modelComments: {
    modelName: string;
    comment?: string;
    // Defaults to 100
    order?: number;
    properties: {
      name: string;
      // Defaults to 100
      order?: number;
      comment?: string;
      // Default is the objects constructor name
      type?: string;
      isOptional?: boolean;
    }[];
  }[] = [
    {
      modelName: 'FormStructure',
      order: 1,
      comment: 'Used to configure FormGenerator. It is recommended to have this object generated before introducing FormGenerator in your component with an ngIf.',
      properties: [
        {
          name: 'groupStructures',
          comment: 'In FormGenerator each of these will have their own expander and formgroup in the formgroup outputted by FormGenerator.',
        },
      ],
    },
    {
      modelName: 'FormSectionStructure',
      order: 2,
      properties: [
        {
          name: 'expanded',
          order: 102,
          comment: 'Is the expander open by default?',
          isOptional: true,
        },
        {
          name: 'fieldStructures',
          comment: 'Each field in array will represent a control in the formgroup returned by FormGenerator.',
          order: 101,
        },
        {
          name: 'groupName',
          comment: 'This will be the name of sub-form group outputed by FormGenerator',
        },
      ],
    },
    {
      modelName: 'FormFieldStructure',
      order: 3,
      properties: [
        {
          name: 'width',
          comment: 'Defaults to 175 with constructor. This applys for date/text/select widths.',
        },
        {
          name: 'inputType',
          comment: 'This field comes front FormFieldType enum that can be imported',
          type: 'FormFieldType',
        },
        {
          name: 'labelIcon',
          comment: 'Adds an icon in from of label.',
        },
        {
          name: 'labelIcon',
          isOptional: true,
          order: 101,
        },
        {
          name: 'placeholder',
          isOptional: true,
          order: 101,
        },
        {
          name: 'selectConfig',
          isOptional: true,
          order: 101,
        },
        {
          name: 'typeaheadConfig',
          isOptional: true,
          order: 101,
        },
        {
          name: 'multiselectConfig',
          isOptional: true,
          order: 101,
        },
        {
          name: 'isHidden',
          isOptional: true,
          order: 101,
        },
        {
          name: 'required',
          isOptional: true,
          order: 101,
        },
        {
          name: 'maxLength',
          isOptional: true,
          order: 101,
        },
        {
          name: 'label',
          isOptional: true,
          order: 101,
        },
      ],
    },
    {
      modelName: 'FormSelectConfig',
      comment: 'This is used to hold all varaibles specific to a select field.',
      properties: [],
    },
    {
      modelName: 'FormTypeaheadConfig',
      comment: 'This is used to hold all varaibles specific to a typeahead field.',
      properties: [
        {
          name: 'entity',
          comment: 'This is used to know what to search, how to display it, and how to filter bad items',
          type: '{ searchFunction: (string) => Observable < any[] >, mappingFunction: (any) => Observable < ItemSummary < any > >, filterFunction: (any) => boolean }',
        },
        {
          name: 'sortFunction',
          type: '(ItemSummary, ItemSummary) => number',
          comment: 'How will results be ordered.',
        },
        {
          name: 'selectionFunction',
          type: '(ItemSummary) => void',
          isOptional: true,
          comment: 'What to do when selected.',
        },
        {
          name: 'alternateFunction',
          type: '(string) => any',
          isOptional: true,
        },
        {
          name: 'alternateText',
          isOptional: true,
        },
        {
          name: 'defaultText',
          isOptional: true,
        },
        {
          name: 'defaultSearchString',
          isOptional: true,
        },
        {
          name: 'inputChangeFunction',
          isOptional: true,
          type: '(string) => void',
        },
        {
          name: 'errorMessage',
          isOptional: true,
        },
      ],
    },
    {
      modelName: 'FormMultiselectConfig',
      comment: '',
      properties: [
        {
          name: 'options',
          // Overriding this type becuase it has no constructor to check from.
          type: '{ option: SelectOption < any >, IsDefaulted: boolean }[]',
          comment: 'To have the option appear in the display section before user selection set IsDefault to true.',
        },
      ],
    },
  ];

  ngOnInit() {
    this.joinPropertiesToComments(this.formStructure, 'FormStructure');
    this.joinPropertiesToComments(this.selectConfig, 'FormSelectConfig');
    this.joinPropertiesToComments(this.multiselectConfig, 'FormMultiselectConfig');
    this.modelComments.sort((a, b) => (a.order < b.order ? -1 : 1));
  }

  public joinPropertiesToComments(object: any, modelName: string) {
    const keys = Object.keys(object);
    let index: number;
    keys.forEach((key) => {
      index = this.modelComments.findIndex((comment) => comment.modelName === modelName);
      if (index < 0) {
        this.modelComments.push({ modelName: modelName, comment: '', order: 100, properties: [] });
        index = this.modelComments.length - 1;
      }
      let fieldIndex = this.modelComments[index].properties.findIndex((property) => property.name === key);
      if (fieldIndex < 0) {
        this.modelComments[index].properties.push({ name: key, order: 100, type: this.determineObjectType(object[key]) });
        fieldIndex = this.modelComments.length - 1;
      } else {
        // Add default logic for props not required on field here.
        if (!this.modelComments[index].properties[fieldIndex].type) {
          this.modelComments[index].properties[fieldIndex].type = this.determineObjectType(object[key]);
        }
        if (!this.modelComments[index].properties[fieldIndex].order) {
          this.modelComments[index].properties[fieldIndex].order = 100;
        }
      }
    });
    if (index > -1) {
      this.modelComments[index].properties.sort((a, b) => (a.order < b.order ? -1 : 1));
      if (!this.modelComments[index].order) {
        this.modelComments[index].order = 100;
      }
    }
  }

  private determineObjectType(object: any): string {
    let name: string = object.constructor.name;
    if (name === 'Array') {
      const arrayInfo = this.getArrayType(object);
      name = arrayInfo.name;
      for (let i = 0; i < arrayInfo.nestCount; i++) {
        name += '[]';
      }
    }
    return name;
  }

  private getArrayType(array: any[], count = 0): { name: string; nestCount: number } {
    count++;
    if (array.length) {
      const object = array[0];
      const name: string = object.constructor.name;
      if (name.toLocaleUpperCase() === 'Array') {
        return this.getArrayType(object, count);
      } else {
        return { name: name, nestCount: count };
      }
    } else {
      return { name: '', nestCount: count };
    }
  }
}
