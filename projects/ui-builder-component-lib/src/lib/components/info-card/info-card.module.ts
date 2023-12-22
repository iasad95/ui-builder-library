import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashedCheckboxModule } from '../dashed-checkbox/dashed-checkbox.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { InfoCardComponent } from './info-card.component';
@NgModule({
  declarations: [InfoCardComponent],
  exports: [InfoCardComponent],
  imports: [CommonModule, TooltipModule, DashedCheckboxModule],
})
export class InfoCardModule {}
