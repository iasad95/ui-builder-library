import { Component } from '@angular/core';
import { ListItemModel } from 'ui-builder-component-lib';

@Component({
  selector: 'app-list-demo',
  templateUrl: './list-demo.component.html',
  styleUrls: ['./list-demo.component.scss'],
})
export class ListDemoComponent {
  public listItems: ListItemModel[] = [
    { title: 'Phone Info', label: '+91 - 9560658667', labelIconName: 'phone' },
    { title: 'Phone Info', label: '+91 - 9560658667', labelIconName: 'phone' },
    { title: 'Phone Info', label: '+91 - 9560658667', labelIconName: 'phone' },
  ];
  public listItemsCode: string = '<lib-list [listItems]="listItems"></lib-list>';

  public listItems2: ListItemModel[] = [
    { label: 'Height', labelIconName: 'straighten', actionName: 'Add' },
    { label: 'Exercise', labelIconName: 'fitness_center', actionName: 'Add' },
    { label: 'Zodiac', labelIconName: 'fitness_center', actionName: 'Add' },
  ];

  public listToggleItems: ListItemModel[] = [{ label: 'Standard', labelIconName: 'phone' }, { label: 'Standard2' }];
  public listItems2Code: string = '<lib-list [listItems]="listItems2" [listTitle]="\'My Lifestyle\'"></lib-list>';
}
