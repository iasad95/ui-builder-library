import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { LibMenuItem } from 'ui-builder-component-lib';

@Component({
  selector: 'app-menu-demo',
  templateUrl: './menu-demo.component.html',
  styleUrl: './menu-demo.component.scss',
})
export class MenuDemoComponent implements AfterViewInit {
  @ViewChild('menuItemTemplate') menuItemTemplate: TemplateRef<HTMLElement>;
  public menuItemsTemplate: LibMenuItem[];
  public menuItems: LibMenuItem[] = [
    { title: 'Placeholder', iconUrl: 'assets/icons/verified.svg' },
    { title: 'Placeholder', iconUrl: 'assets/icons/verified.svg' },
    { title: 'Placeholder', iconUrl: 'assets/icons/verified.svg' },
    { title: 'Placeholder', iconUrl: 'assets/icons/verified.svg' },
  ];
  public nestedMenuItems: LibMenuItem[] = [
    { title: 'Placeholder', iconUrl: 'assets/icons/verified.svg', separator: true },
    {
      title: 'Nested',
      iconUrl: 'assets/icons/verified.svg',
      subMenu: [
        { title: 'Placeholder', iconUrl: 'assets/icons/verified.svg' },
        { title: 'Placeholder', iconUrl: 'assets/icons/verified.svg', separator: true },
        {
          title: 'Nested',
          iconUrl: 'assets/icons/verified.svg',
          subMenu: [
            { title: 'Placeholder', iconUrl: 'assets/icons/verified.svg' },
            { title: 'Placeholder', iconUrl: 'assets/icons/verified.svg' },
          ],
        },
      ],
    },
    { title: 'Placeholder', iconUrl: 'assets/icons/verified.svg' },
    { title: 'Placeholder', iconUrl: 'assets/icons/verified.svg' },
  ];
  public menuBtnCode: string = ` <lib-menu-btn
          [menuBtnImgUrl]="'https://semantic-ui.com/images/avatar2/large/matthew.png'"
          [hasNotification]="true"
          [menuBtnNotificationIconUrl]="'assets/icons/notification-pop.svg'"
          [menuItems]="menuItems">
        </lib-menu-btn>`;
  public menuBtnCodeWithTemplate: string = ` <lib-menu-btn
          [menuBtnImgUrl]="'https://semantic-ui.com/images/avatar2/large/matthew.png'"
          [hasNotification]="true"
          [menuBtnNotificationIconUrl]="'assets/icons/notification-pop.svg'"
          [menuItems]="menuItems">
        </lib-menu-btn>`;
  public nestedMenuBtnCode: string = `<lib-menu-btn [menuItems]="nestedMenuItems">Nested Menu Btn</lib-menu-btn>`;
  public btnHoverCode: string = `<lib-hover-btn [iconUrl]="'assets/icons/guru-times-icon.svg'">Hover Button</lib-hover-btn>`;

  ngAfterViewInit(): void {
    this.menuItemsTemplate = [{ title: 'Placeholder', iconUrl: 'assets/icons/verified.svg' }, { templateRef: this.menuItemTemplate }];
  }
}
