import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { TooltipModule } from '../tooltip/tooltip.module';
import { ExpansionPanelComponent } from './expansion-panel.component';
@NgModule({
  declarations: [ExpansionPanelComponent],
  imports: [CommonModule, MatExpansionModule, TooltipModule],
  exports: [ExpansionPanelComponent],
})
export class ExpansionPanelModule {}
