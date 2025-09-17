import { Component } from '@angular/core';
import { Orders } from 'ui-builder-component-lib';

@Component({
  selector: 'app-search-bar-demo',
  templateUrl: './search-bar-demo.component.html',
  styleUrls: ['./search-bar-demo.component.scss'],
})
export class SearchBarDemoComponent {
  public placeholderText = 'Example Placeholder';
  public inputText: string;
  public searchbarOrder: Orders = Orders.ICS;
  public searchbarOrderDefinition: string = `
    export enum Orders {
      SIC = 'SIC', // SEARCH-BAR IN THE ORDER SEARCH-ICON => INPUT => CLEAR-ICON
      ICS = 'ICS', // SEARCH-BAR IN THE ORDER INPUT => CLEAR-ICON => SEARCH-ICON
      CIS = 'CIS', // SEARCH-BAR IN THE ORDER CLEAR-ICON => INPUT => SEARCH-ICON
    }
  `;
  public searchBarCode1: string = `<lib-search-bar [placeholderText]="Filter Projects" (searchStringChange)="handleSearchStringChange($event)" (cleared)="clear()"></lib-search-bar>`;
  public searchBarCode2: string = `<lib-search-bar placeholderText="Search" class="search-bar">
      <div right class="search-bar__right-icon">
        <img src="assets/icons/side-search-icon.svg" />
      </div>
    </lib-search-bar>`;
}
