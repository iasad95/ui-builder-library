import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { FormFieldModule, ToggleModule } from 'ui-builder-component-lib';
import { FormFieldDemoComponent } from './form-field-demo.component';

const routes: Route[] = [{ path: '', component: FormFieldDemoComponent }];

@NgModule({
  declarations: [FormFieldDemoComponent],
  imports: [CommonModule, FormFieldModule, FormsModule, RouterModule.forChild(routes), ToggleModule, ReactiveFormsModule],
  providers: [DecimalPipe],
})
export class FormFieldDemoModule {}
