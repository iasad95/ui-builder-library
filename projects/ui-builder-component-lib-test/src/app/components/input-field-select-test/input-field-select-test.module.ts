import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { InputFieldSelectModule } from 'ui-builder-component-lib';
import { InputFieldSelectTestComponent } from './input-field-select-test.component';
import { DropdownModule } from 'primeng/dropdown';

const routes: Route[] = [{ path: '', component: InputFieldSelectTestComponent }];

@NgModule({
  declarations: [InputFieldSelectTestComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes), InputFieldSelectModule, DropdownModule],
})
export class InputFieldSelectTestModule {}
