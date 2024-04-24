import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsModule } from '../buttons/buttons.module';
import { FormFieldModule } from '../form-field/form-field.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { TypeaheadFieldModule } from '../typeahead-field/typeahead-field.module';
import { MultiFieldComponent } from './multi-field.component';
@NgModule({
  declarations: [MultiFieldComponent],
  exports: [MultiFieldComponent],
  imports: [CommonModule, FormFieldModule, TypeaheadFieldModule, TooltipModule, ButtonsModule],
})
export class MultiFieldModule {}
