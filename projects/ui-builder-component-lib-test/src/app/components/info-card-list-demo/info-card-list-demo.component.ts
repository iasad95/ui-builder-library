import { Component, OnInit } from '@angular/core';
import { ItemInfoLine, ItemSummary } from 'ui-builder-component-lib';

@Component({
  selector: 'app-info-card-list-demo',
  templateUrl: './info-card-list-demo.component.html',
  styleUrls: ['./info-card-list-demo.component.scss'],
})
export class InfoCardListDemoComponent implements OnInit {
  public items: ItemSummary<any>[] = [];
  public itemType = 'Example Items';
  public checkable = false;
  public defaultCheckedValue = false;
  public filterable = false;
  public maxCount = 50;
  public scrollable = false;
  public selectable = false;
  public infoCardDemo: string = `<lib-info-card-list
      [itemList]="exampleItemSummaryList"
      [checkable]="true"
      [defaultCheckedValue]="false"
      [filterable]="true"
      [maxCount]="50"
      [scrollable]="true"
      [itemType]="'Leads'"
      [selectable]="true"
      (itemSelected)="handleItemSelected($event)"
      (checkedChange)="handleCheckedChange($event)"
  ></lib-info-card-list>`;

  ngOnInit() {
    for (let i = 1; i <= 300; i++) {
      this.items.push(
        new ItemSummary(
          new ItemInfoLine('Test Lead ' + i, null, null),
          [new ItemInfoLine('Test Lead ' + i + ' Info', null, null)],
          [new ItemInfoLine('Test Lead ' + i + ' Detail', null, null)],
          null,
        ),
      );
    }
  }

  public handleDemoCheckedChange(event: { item: ItemSummary<any>; checked: boolean }): void {
    alert('checkedChange event fired with value ' + event.checked + ' on item "' + event.item.header.label + '"');
  }

  public handleItemSelected(item: ItemSummary<any>): void {
    alert('Item "' + item.header.label + '" selected.');
  }
}
