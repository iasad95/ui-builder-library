import { SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ItemSummary } from '../item-summary';
import { TypeaheadResultsGroup } from '../typeahead-results-group';
export class FormTypeaheadConfig {
  public entity: {
    searchFunction: (value: string) => Observable<any[]>;
    mappingFunction: (entity: any) => Observable<ItemSummary<any>>;
    filterFunction: (entity: any) => boolean;
    sortFunction: (a: ItemSummary<any>, b: ItemSummary<any>) => number;
    resultGroupFunction?: (results: ItemSummary<any>[]) => TypeaheadResultsGroup[];
    entityMetadata?: { typeLabel: string; iconHtml: SafeHtml };
  }[];
  public selectionFunction?: (item: ItemSummary<any>) => void;
  public alternateFunction?: (value: string) => any;
  public alternateText?: string;
  public defaultText?: string;
  public defaultSearchString?: string;
  public inputChangeFunction?: (value: string) => void;
  public errorMessage?: string;
  public suggestionText?: string;
  public required?: boolean;
  constructor(
    entity: {
      searchFunction: (value: string) => Observable<any[]>;
      mappingFunction: (entity: any) => Observable<ItemSummary<any>>;
      filterFunction: (entity: any) => boolean;
      sortFunction: (a: ItemSummary<any>, b: ItemSummary<any>) => number;
      resultGroupFunction?: (results: ItemSummary<any>[]) => TypeaheadResultsGroup[];
      entityName?: string;
    }[],
    selectionFunction?: (item: ItemSummary<any>) => void,
    alternateFunction?: (value: string) => any,
    alternateText?: string,
    defaultText?: string,
    defaultSearchString?: string,
    inputChangeFunction?: (value: string) => void,
    errorMessage?: string,
    suggestionText?: string,
    required?: boolean,
  ) {
    this.entity = entity;
    this.selectionFunction = selectionFunction;
    this.alternateFunction = alternateFunction;
    this.alternateText = alternateText;
    this.defaultSearchString = defaultSearchString;
    this.defaultText = defaultText;
    this.inputChangeFunction = inputChangeFunction;
    this.errorMessage = errorMessage;
    this.suggestionText = suggestionText;
    this.required = required;
  }
}
