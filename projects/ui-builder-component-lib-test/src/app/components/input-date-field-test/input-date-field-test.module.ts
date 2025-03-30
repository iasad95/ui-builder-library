import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { InputDateFieldModule, InputFieldModule } from 'ui-builder-component-lib';
import { InputDateFieldTestComponent } from './input-date-field-test.component';

const routes: Route[] = [{ path: '', component: InputDateFieldTestComponent }];

@NgModule({
  declarations: [InputDateFieldTestComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes), InputDateFieldModule, InputFieldModule],
})
export class InputDateFieldTestModule {}
