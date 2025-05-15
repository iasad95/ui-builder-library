import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { Route, RouterModule } from '@angular/router';
import { MultiFieldModule } from 'ui-builder-component-lib';
import { MultiFieldDemoComponent } from './multi-field-demo.component';

const routes: Route[] = [{ path: '', component: MultiFieldDemoComponent }];

@NgModule({
  declarations: [MultiFieldDemoComponent],
  imports: [CommonModule, MultiFieldModule, MatDialogModule, RouterModule.forChild(routes)],
  providers: [DecimalPipe],
})
export class MultiFieldDemoModule {}
