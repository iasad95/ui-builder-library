export interface FilterDefinition {
  publicFieldName: string;
  label: string;
  displayedToUser?: boolean;
  filterCriterias: {
    operator: {
      label: string;
      value: string;
    };
    filterParameters: {
      name?: string;
      label: string;
      initialValue: string;
      controlType: string;
      apiQueryUrl: string;
      separator?: string;
      values: {
        key: string | number;
        value: string;
      }[];
    }[];
  }[];
}
