import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { ListItemModel } from '../list-item.model';
@Component({
  selector: 'lib-list-toggle',
  templateUrl: './list-toggle.component.html',
  styleUrls: ['./list-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListToggleComponent {
  @Input() listItems: ListItemModel[];
  @Input() listTitle: string;
  @Input() disableTranslation: boolean;
  @Input() loading: boolean;
  @ViewChild('libListItemToggleRef') libListItemToggle: HTMLElement;
  public onListItemClick(item: ListItemModel): void {
    if (item.command && !this.loading) {
      item.command(item);
    }
  }
}
