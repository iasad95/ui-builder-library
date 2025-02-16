import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormGeneratorModule } from 'ui-builder-component-lib';
import { FormGeneratorDemoComponent } from './form-generator-demo.component';
import { InjectableFormFieldDemoComponent } from './injectable-form-field-demo/injectable-form-field-demo.component';

const routes: Route[] = [{ path: '', component: FormGeneratorDemoComponent }];

@NgModule({
  declarations: [FormGeneratorDemoComponent, InjectableFormFieldDemoComponent],
  imports: [CommonModule, FormGeneratorModule, RouterModule.forChild(routes)],
  providers: [DecimalPipe],
})
export class FormGeneratorDemoModule {}
