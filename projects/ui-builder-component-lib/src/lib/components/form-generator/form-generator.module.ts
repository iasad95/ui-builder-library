import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpansionPanelModule } from '../expansion-panel/expansion-panel.module';
import { FormFieldModule } from '../form-field/form-field.module';
import { MultiFieldModule } from '../multi-field/multi-field.module';
import { MultiselectModule } from '../multiselect/multiselect.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { RatingFieldModule } from '../rating-field/rating-field.module';
import { TextListModule } from '../text-list/text-list.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { TypeaheadFieldModule } from '../typeahead-field/typeahead-field.module';
import { FormGeneratorComponent } from './form-generator.component';
import { FormGroupComponent } from './form-group.component';
import { InjectableFormFieldWrapperComponent } from './injectable-form-field-wrapper.component';
@NgModule({
  declarations: [FormGeneratorComponent, FormGroupComponent, InjectableFormFieldWrapperComponent],
  exports: [FormGeneratorComponent],
  imports: [
    CommonModule,
    ExpansionPanelModule,
    FormFieldModule,
    MultiFieldModule,
    MultiselectModule,
    NotificationsModule,
    ReactiveFormsModule,
    TextListModule,
    TypeaheadFieldModule,
    TooltipModule,
    RatingFieldModule,
  ],
})
export class FormGeneratorModule {}
