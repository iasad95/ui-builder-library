import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibPercentageBarModule } from 'ui-builder-component-lib';
import { PercentageBarDemoComponent } from './lib-percentage-bar-demo.component';

const percentageRoutes: Routes = [{ path: '', component: PercentageBarDemoComponent }];
@NgModule({
  declarations: [PercentageBarDemoComponent],
  imports: [CommonModule, RouterModule.forChild(percentageRoutes), LibPercentageBarModule],
  exports: [PercentageBarDemoComponent],
})
export class PercentageBarDemoModule {}
