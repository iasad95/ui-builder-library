import { Component } from '@angular/core';

@Component({
  selector: 'app-text-list-demo',
  templateUrl: './text-list-demo.component.html',
  styleUrls: ['./text-list-demo.component.scss'],
})
export class TextListDemoComponent {
  public placeholderText = 'Add New Question...';

  public textListStrings: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing bibendum est ultricies integer ',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
  ];
  public testListCode: string = `<lib-text-list [placeholderText]="placeholderText" [textListItems]="textList"></lib-text-list>`;
}
