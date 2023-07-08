import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { LibMenuItem } from '../../../model/lib-menu-item';
import { BaseBtnComponent } from '../base-btn/base-btn.component';
@Component({
  selector: 'lib-menu-btn',
  templateUrl: './menu-btn.component.html',
  styleUrls: ['./menu-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MenuBtnComponent extends BaseBtnComponent {
  @Input() menuBtnIcon: boolean;
  @Input() menuBtnTooltip: string;
  @Input() menuBtnTooltipPosition: TooltipPosition = 'below';
  @Input() menuBtnIconName: string;
  @Input() menuBtnImgUrl: string;
  @Input() menuBtnNotificationIconUrl: string;
  @Input() menuDirection: 'ltr' | 'rtl' = 'ltr';
  @Input() hasNotification: boolean;
  @Input() menuItems: LibMenuItem[];
  @Input() disableTranslation: boolean;
  @Input() listItem: unknown;
  @Input() listItemIndex: number;
  @Input() selectable: boolean;
}
