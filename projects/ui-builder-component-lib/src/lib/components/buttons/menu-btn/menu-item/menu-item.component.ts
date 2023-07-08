import { ChangeDetectionStrategy, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { LibMenuItem } from '../../../../model/lib-menu-item';
@Component({
  selector: 'lib-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MenuItemComponent {
  @ViewChild('childMenu') public childMenu;
  @Input() menuDirection: 'ltr' | 'rtl' = 'ltr';
  @Input() menuItems: LibMenuItem[];
  @Input() disableTranslation: boolean;
  @Input() listItem: unknown;
  @Input() listItemIndex: number;
  @Input() selectable: boolean;
  public onMenuItemClick(item: LibMenuItem, index): void {
    if (!item.active && !item.disabled && (!item.subMenu || item.subMenu.length === 0)) {
      this.menuItems.forEach((menuItem) => (menuItem.active = false));
      this.menuItems[index].active = true;
      item.listItem = this.listItem;
      item.listItemIndex = this.listItemIndex;
      if (item.command) {
        item.command(item);
      }
    }
  }
}
