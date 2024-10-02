import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { LibTabMenuComponent } from './tab-menu.component';
@NgModule({
  declarations: [LibTabMenuComponent],
  imports: [CommonModule, TabMenuModule],
  exports: [LibTabMenuComponent],
})
export class LibTabMenuModule {}
