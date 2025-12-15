import { Component } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { ItemInfoLine, ItemSummary, SelectOption, TypeaheadResultsGroup } from 'ui-builder-component-lib';
import { Observable, Subject, of } from 'rxjs';

@Component({
  selector: 'app-typeahead-field-demo',
  templateUrl: './typeahead-field-demo.component.html',
  styleUrls: ['./typeahead-field-demo.component.scss'],
})
export class TypeaheadFieldDemoComponent {
  public placeholderText = 'Search Example Types';
  public resultLimit = 0;
  public alternateText = 'Alternate Option';
  public alternateFunction: (value: string) => any = (value: string) => this.handleAlternateFunction(value);
  public error = '';
  public suggestionText = 'See suggested results';
  public defaultSearchString = 'foo';
  public searchString = '';
  public defaultText = '';
  public required = false;
  public isMultiselectMode = false;
  public entitySelectMode = true;
  public typeaheadCode: string = `<lib-typeahead-field
      [entityFunctions]="exampleEntityFunctions"
      [sortingFunction]="exampleSortingFunction"
      [selectionFunction]="exampleSelectedFunction"
      [placeholderText]="'Search Example Types'"
      [resultLimit]="2"
      [alternateText]="'Alternate Option'"
      [alternateFunction]="exampleAlternateFunction"
      [error]="exampleErrorText"
      [defaultText]="exampleDefaultText"
      [defaultSearchString]="exampleDefaultSearchString"
      [suggestionText]="exampleSuggestionText"
      [required]="true"
      (inputStringChange)="handleSearchStringChange($event)"
      (selected)="handleItemSelected($event)"
      (deselected)="clear()"
  ></lib-typeahead-field>`;

  public exampleEntityFunctions: {
    searchFunction: (value: string) => Observable<any[]>;
    mappingFunction: (entity: any) => Observable<ItemSummary<any>>;
    filterFunction: (entity: any) => boolean;
    sortingFunction: (a: ItemSummary<any>, b: ItemSummary<any>) => number;
    resultGroupFunction?: (results: ItemSummary<any>[]) => TypeaheadResultsGroup[];
    entityMetadata?: { typeLabel: string; iconHtml: SafeHtml; placeholderText: string };
  }[] = [
    {
      searchFunction: (value: string) => this.search(value),
      mappingFunction: (entity: any) => this.mapSelectOptionToItemSummary(entity),
      filterFunction: (entity: any) => this.filterResults(entity),
      sortingFunction: (a: ItemSummary<any>, b: ItemSummary<any>) => this.sortResults(a, b),
      resultGroupFunction: (summaries: ItemSummary<any>[]) => this.splitSearch1(summaries),
      entityMetadata: { typeLabel: 'List1', iconHtml: '<i class="icon icon-gen3-contacts"></i>', placeholderText: 'Add Contact' },
    },
    {
      searchFunction: (value: string) => this.search2(value),
      mappingFunction: (entity: any) => this.mapSelectOptionToItemSummary(entity),
      filterFunction: (entity: any) => this.filterResults(entity),
      sortingFunction: (a: ItemSummary<any>, b: ItemSummary<any>) => this.sortResults(a, b),
      entityMetadata: { typeLabel: 'List2', iconHtml: '<i class="icon icon-gen3-personnel"></i>', placeholderText: 'Associate Personnel' },
    },
  ];
  public exampleSelectionFunction: (item: ItemSummary<any>) => void = (item: ItemSummary<any>) => this.onSelect(item);

  public items: SelectOption<string>[] = [
    {
      label: 'Example Item',
      value: 'Example Detail',
    },
    {
      label: 'Test Result',
      value: 'Test Detail',
    },
    {
      label: 'Custom Return Value',
      value: 'Inactive',
    },
    {
      label: 'Other Possible Search Result',
      value: 'Some Detail',
    },
    {
      label: 'Foo Test',
      value: 'Foo Detail',
    },
    {
      label: 'Bar Result',
      value: 'Bar Detail',
    },
    {
      label: 'Foobar Test Result',
      value: 'Foobar Detail',
    },
  ];

  public items2: SelectOption<string>[] = [
    {
      label: 'Example Item22',
      value: 'Example Detail22',
    },
    {
      label: 'Test Result22',
      value: 'Test Detail22',
    },
    {
      label: 'Custom Return Value22',
      value: 'Inactive22',
    },
    {
      label: 'Other Possible Search Result22',
      value: 'Some Detail22',
    },
    {
      label: 'Foo Test22',
      value: 'Foo Detail22',
    },
    {
      label: 'Bar Result22',
      value: 'Bar Detail22',
    },
    {
      label: 'Foobar Test Result22',
      value: 'Foobar Detail22',
    },
  ];

  private search(value: string): Observable<SelectOption<string>[]> {
    const subject: Subject<SelectOption<string>[]> = new Subject();
    setTimeout(() => {
      subject.next(this.items.filter((item) => item.label.toLocaleUpperCase().includes(value.toLocaleUpperCase())));
    }, 1000);
    return subject.asObservable();
  }

  private search2(value: string): Observable<SelectOption<string>[]> {
    const subject: Subject<SelectOption<string>[]> = new Subject();
    setTimeout(() => {
      subject.next(this.items2.filter((item) => item.label.toLocaleUpperCase().includes(value.toLocaleUpperCase())));
    }, 1000);
    return subject.asObservable();
  }

  private splitSearch1(summaries: ItemSummary<any>[]): TypeaheadResultsGroup[] {
    return [
      {
        groupName: 'List1 a',
        summaries: summaries.slice(0, 2),
      },
      {
        groupName: 'List1 b',
        summaries: summaries.slice(2),
      },
    ];
  }

  private mapSelectOptionToItemSummary(entity: SelectOption<string>): Observable<ItemSummary<SelectOption<string>>> {
    return of(new ItemSummary(new ItemInfoLine(entity.label, entity.label, null), [], [new ItemInfoLine(entity.value, null, null)], entity));
  }

  private filterResults(entity: SelectOption<string>): boolean {
    return !entity.value.toLocaleUpperCase().includes('INACTIVE');
  }

  private sortResults(a: ItemSummary<any>, b: ItemSummary<any>): number {
    return a.header.label.localeCompare(b.header.label);
  }

  private onSelect(item: ItemSummary<any>): void {
    alert('Item "' + item.header.label + '" selected.');
  }

  private handleAlternateFunction(value: string): void {
    alert('Alternate function executed with value ' + value + '.');
  }

  public handleSearchStringChange(value: string) {
    this.searchString = value;
  }
}
