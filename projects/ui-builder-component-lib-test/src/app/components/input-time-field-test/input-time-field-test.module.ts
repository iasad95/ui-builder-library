import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { InputTimeFieldModule } from 'ui-builder-component-lib';
import { InputTimeFieldTestComponent } from './input-time-field-test.component';

const routes: Route[] = [{ path: '', component: InputTimeFieldTestComponent }];

@NgModule({
  declarations: [InputTimeFieldTestComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes), InputTimeFieldModule],
})
export class InputTimeFieldTestModule {}
