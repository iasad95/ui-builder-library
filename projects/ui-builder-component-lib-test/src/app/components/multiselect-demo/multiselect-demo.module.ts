import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { Route, RouterModule } from '@angular/router';
import { MultiselectModule, ToggleModule } from 'ui-builder-component-lib';
import { MultiselectDemoComponent } from './multiselect-demo.component';

const routes: Route[] = [{ path: '', component: MultiselectDemoComponent }];

@NgModule({
  declarations: [MultiselectDemoComponent],
  imports: [CommonModule, FormsModule, MultiselectModule, MatDialogModule, ToggleModule, RouterModule.forChild(routes)],
})
export class MultiselectDemoModule {}
