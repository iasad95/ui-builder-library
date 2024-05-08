import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonsModule } from '../buttons/buttons.module';
import { DashedCheckboxModule } from '../dashed-checkbox/dashed-checkbox.module';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { SectionSeparatorComponent } from '../section-separator/section-separator.component';
import { TooltipModule } from '../tooltip/tooltip.module';
import { MultiselectDialogComponent } from './multiselect-dialog.component';
import { MultiselectComponent } from './multiselect.component';
@NgModule({
  declarations: [MultiselectComponent, MultiselectDialogComponent],
  exports: [MultiselectComponent],
  imports: [CommonModule, DashedCheckboxModule, MatDialogModule, SearchBarModule, TooltipModule, SectionSeparatorComponent, ButtonsModule],
})
export class MultiselectModule {}
