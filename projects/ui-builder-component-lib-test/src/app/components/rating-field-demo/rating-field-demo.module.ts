import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { Route, RouterModule } from '@angular/router';
import { RatingFieldModule, ToggleModule } from 'ui-builder-component-lib';
import { RatingFieldDemoComponent } from './rating-field-demo.component';

const routes: Route[] = [{ path: '', component: RatingFieldDemoComponent }];

@NgModule({
  declarations: [RatingFieldDemoComponent],
  imports: [CommonModule, FormsModule, RatingFieldModule, MatDialogModule, ToggleModule, RouterModule.forChild(routes)],
})
export class RatingFieldDemoModule {}
