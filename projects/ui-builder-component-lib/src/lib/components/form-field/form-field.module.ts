import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { QuillModule } from 'ngx-quill';
import { DirectiveModule } from '../../directives/directive.module';
import { PipeModule } from '../../pipes/pipe.module';
import { DashedCheckboxModule } from '../dashed-checkbox/dashed-checkbox.module';
import { InputDateFieldModule } from '../input-date-field/input-date-field.module';
import { InputFieldSelectModule } from '../input-field-select/input-field-select.module';
import { InputFieldModule } from '../input-field/input-field.module';
import { RangeSelectorModule } from '../range-selector/range-selector.module';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { ToggleModule } from '../toggle/toggle.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { FormFieldComponent } from './form-field.component';
import { LibRadioButtonComponent } from './radio-button/radio-button.component';
@NgModule({
  declarations: [FormFieldComponent, LibRadioButtonComponent],
  exports: [FormFieldComponent, LibRadioButtonComponent],
  imports: [
    CommonModule,
    PipeModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    SearchBarModule,
    TooltipModule,
    ToggleModule,
    DashedCheckboxModule,
    InputFieldModule,
    InputFieldSelectModule,
    InputDateFieldModule,
    DirectiveModule,
    RangeSelectorModule,
    TranslateModule,
    QuillModule.forRoot(),
    IonicModule,
  ],
  providers: [DecimalPipe],
})
export class FormFieldModule {}
