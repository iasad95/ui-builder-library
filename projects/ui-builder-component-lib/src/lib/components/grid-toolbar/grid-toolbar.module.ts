import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GridFiltersModule } from '../grid-filters/grid-filters.module';
import { ToolbarComponent } from './grid-toolbar.component';
@NgModule({
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  imports: [CommonModule, TranslateModule, GridFiltersModule],
})
export class GridToolbarModule {}
