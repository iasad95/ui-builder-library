import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { ListToggleComponent } from './list-toggle/list-toggle.component';
import { ToggleModule } from '../toggle/toggle.module';
@NgModule({
  declarations: [ListComponent, ListToggleComponent],
  imports: [CommonModule, TranslateModule, MatIconModule, MatRippleModule, TranslateModule, ToggleModule],
  exports: [ListComponent, ListToggleComponent],
})
export class ListModule {}
