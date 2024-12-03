import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InfoCardListModule } from '../info-card-list/info-card-list.module';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { TypeaheadFieldComponent, TypeaheadResultComponent } from './typeahead-field.component';
@NgModule({
  declarations: [TypeaheadFieldComponent, TypeaheadResultComponent],
  exports: [TypeaheadFieldComponent],
  imports: [CommonModule, MatProgressSpinnerModule, SearchBarModule, TooltipModule, MatMenuModule, InfoCardListModule],
})
export class TypeaheadFieldModule {}
