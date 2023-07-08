import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SectionSeparatorComponent } from '../section-separator/section-separator.component';
import { BaseBtnComponent } from './base-btn/base-btn.component';
import { BubbleBtnComponent } from './bubble-btn/bubble-btn.component';
import { HoverBtnComponent } from './hover-btn/hover-btn.component';
import { IconBtnComponent } from './icon-btn/icon-btn.component';
import { ListBtnComponent } from './list-btn/list-btn.component';
import { MenuBtnComponent } from './menu-btn/menu-btn.component';
import { MenuItemComponent } from './menu-btn/menu-item/menu-item.component';
import { PrimaryBtnComponent } from './primary-btn/primary-btn.component';
import { SecondaryBtnComponent } from './secondary-btn/secondary-btn.component';
const components = [
  BaseBtnComponent,
  PrimaryBtnComponent,
  SecondaryBtnComponent,
  MenuBtnComponent,
  IconBtnComponent,
  ListBtnComponent,
  HoverBtnComponent,
  MenuItemComponent,
  BubbleBtnComponent,
];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, IonicModule, MatRippleModule, MatMenuModule, TranslateModule, MatIconModule, MatTooltipModule, SectionSeparatorComponent],
  exports: [...components],
})
export class ButtonsModule {}
