import { UntypedFormGroup } from '@angular/forms';
import { FormGenStyle } from '../../enums/form-gen-style';
import { FormSectionVariables } from './form-section-variables';
export class FormVariables {
  public groups: FormSectionVariables[] = [];
  public formGroup: UntypedFormGroup = new UntypedFormGroup({});
  public formStyle: FormGenStyle;
  public addGroupInfo(groupInfo: FormSectionVariables): void {
    this.formGroup.addControl(groupInfo.id, groupInfo.formGroup);
    this.groups.push(groupInfo);
  }
}
