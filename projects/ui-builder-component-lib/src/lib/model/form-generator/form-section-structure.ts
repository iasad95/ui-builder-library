import { v4 as uuid } from 'uuid';
import { ItemActionHandler } from '../item-action-handler';
import { FormFieldStructure } from './form-field-structure';
import { FormSectionVariables } from './form-section-variables';
export class FormSectionStructure {
  constructor(
    public fieldStructures: FormFieldStructure[],
    public groupName: string,
    public expanded = true,
    public footerAction: ItemActionHandler = null,
    public useSlideToggle = false,
    public headerActions: ItemActionHandler[] = [],
    public id: string = groupName,
  ) {}
  public convertStructureToVariables(): FormSectionVariables {
    const groupInfo = new FormSectionVariables();
    groupInfo.trackId = uuid();
    groupInfo.title = this.groupName;
    groupInfo.footerAction = this.footerAction;
    groupInfo.expanded = this.expanded;
    groupInfo.useSlideToggle = this.useSlideToggle;
    groupInfo.headerActions = this.headerActions;
    groupInfo.id = this.id;
    this.fieldStructures.forEach((fieldStructure) => {
      const fieldInfo = fieldStructure.convertStructureToVariables();
      groupInfo.addFieldInfo(false, fieldInfo);
    });
    groupInfo.calculateFlexBasis();
    return groupInfo;
  }
}
export class FormSectionStructureBuilder {
  private structure: FormSectionStructure;
  constructor(groupName: string, ...formFieldStructures: FormFieldStructure[]) {
    this.structure = new FormSectionStructure(formFieldStructures, groupName);
  }
  public buildStructure(): FormSectionStructure {
    return this.structure;
  }
  public setExpanded(expanded: boolean): FormSectionStructureBuilder {
    this.structure.expanded = expanded;
    return this;
  }
  public setFooterAction(footerAction: ItemActionHandler): FormSectionStructureBuilder {
    this.structure.footerAction = footerAction;
    return this;
  }
  public setUseSlideToggle(useSlideToggle: boolean): FormSectionStructureBuilder {
    this.structure.useSlideToggle = useSlideToggle;
    return this;
  }
  public setHeaderActions(headerActions: ItemActionHandler[] = []): FormSectionStructureBuilder {
    this.structure.headerActions = headerActions;
    return this;
  }
  public setId(id: string): FormSectionStructureBuilder {
    this.structure.id = id;
    return this;
  }
}
