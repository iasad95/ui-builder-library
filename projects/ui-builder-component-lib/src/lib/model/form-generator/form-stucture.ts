import { FormGenStyle } from '../../enums/form-gen-style';
import { FormFieldStructure } from './form-field-structure';
import { FormSectionStructure } from './form-section-structure';
export class FormStructure {
  public groupStructures: FormSectionStructure[];
  public formStyle: FormGenStyle;
  constructor(groupStructures: FormSectionStructure[], formStyle: FormGenStyle = FormGenStyle.expander) {
    this.groupStructures = groupStructures;
    this.formStyle = formStyle;
  }
  public getFormFieldStructure(groupName: string, fieldName: string): FormFieldStructure {
    let section: FormSectionStructure;
    this.groupStructures.find((group) => {
      const isCorrectGroup = group.groupName === groupName;
      if (isCorrectGroup) {
        section = group;
      }
      return isCorrectGroup;
    });
    if (section) {
      let field: FormFieldStructure;
      section.fieldStructures.find((fieldStructure) => {
        const isCorrectField = fieldStructure.fieldName === fieldName;
        if (isCorrectField) {
          field = fieldStructure;
        }
        return isCorrectField;
      });
      return field;
    }
    return null;
  }
}
