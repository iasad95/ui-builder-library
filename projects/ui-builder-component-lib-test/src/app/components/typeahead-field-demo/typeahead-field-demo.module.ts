import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { ToggleModule, TypeaheadFieldModule } from 'ui-builder-component-lib';
import { TypeaheadFieldDemoComponent } from './typeahead-field-demo.component';

const routes: Route[] = [{ path: '', component: TypeaheadFieldDemoComponent }];

@NgModule({
  declarations: [TypeaheadFieldDemoComponent],
  imports: [CommonModule, FormsModule, TypeaheadFieldModule, RouterModule.forChild(routes), ToggleModule],
})
export class TypeaheadFieldDemoModule {}
