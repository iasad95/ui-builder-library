import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { DashedCheckboxModule } from 'ui-builder-component-lib';
import { DashedCheckboxTestComponent } from './dashed-checkbox-test.component';

const routes: Route[] = [{ path: '', component: DashedCheckboxTestComponent }];

@NgModule({
  declarations: [DashedCheckboxTestComponent],
  imports: [CommonModule, RouterModule.forChild(routes), DashedCheckboxModule, FormsModule, ReactiveFormsModule],
})
export class DashedCheckboxTestModule {}
