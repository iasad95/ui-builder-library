import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { CalendarModule } from 'primeng/calendar';
import { DateMaskDirective } from '../../directives/date-mask/date-mask.directive';
import { ButtonsModule } from '../buttons/buttons.module';
import { InputDateFieldInlineComponent } from './input-date-field-inline/input-date-field-inline.component';
import { InputDateFieldComponent } from './input-date-field.component';
@NgModule({
  declarations: [InputDateFieldComponent, InputDateFieldInlineComponent, DateMaskDirective],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, CalendarModule, MatIconModule, MatButtonModule, MatRippleModule, ButtonsModule, IonicModule],
  exports: [InputDateFieldComponent, InputDateFieldInlineComponent],
})
export class InputDateFieldModule {}
