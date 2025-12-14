import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { Route, RouterModule } from '@angular/router';
import { LibToastrModule, TooltipModule } from 'ui-builder-component-lib';
import { TooltipDemoComponent } from './tooltip-demo.component';

const routes: Route[] = [{ path: '', component: TooltipDemoComponent }];

@NgModule({
  declarations: [TooltipDemoComponent],
  imports: [CommonModule, FormsModule, TooltipModule, RouterModule.forChild(routes), MatExpansionModule, LibToastrModule],
})
export class TooltipDemoModule {}
