import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipDirective } from '../../directives/tooltip/tooltip.directive';
import { TooltipComponent } from './tooltip.component';
@NgModule({
  declarations: [TooltipComponent, TooltipDirective],
  exports: [TooltipDirective],
  imports: [CommonModule, OverlayModule, MatTooltipModule, ScrollingModule],
})
export class TooltipModule {}
