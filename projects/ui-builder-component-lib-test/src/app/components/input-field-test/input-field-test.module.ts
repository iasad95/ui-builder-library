import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { InputFieldCardModule, InputFieldModule, SearchBarModule } from 'ui-builder-component-lib';
import { InputFieldTestComponent } from './input-field-test.component';

const routes: Route[] = [{ path: '', component: InputFieldTestComponent }];

@NgModule({
  declarations: [InputFieldTestComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes), InputFieldModule, InputFieldCardModule, SearchBarModule],
})
export class InputFieldTestModule {}
