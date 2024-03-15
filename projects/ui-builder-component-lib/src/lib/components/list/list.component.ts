import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ListItemModel } from './list-item.model';
@Component({
  selector: 'lib-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() listItems: ListItemModel[];
  @Input() hideMenuIcon: boolean;
  @Input() listTitle: string;
  @Input() disableTranslation: boolean;
  public onListItemClick(item: ListItemModel): void {
    if (item.command) {
      item.command(item);
    }
  }
}
