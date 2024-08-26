import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormFieldModule } from '../form-field/form-field.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { RatingFieldComponent } from './rating-field.component';
@NgModule({
  declarations: [RatingFieldComponent],
  imports: [CommonModule, FormFieldModule, TooltipModule],
  exports: [RatingFieldComponent],
})
export class RatingFieldModule {}
