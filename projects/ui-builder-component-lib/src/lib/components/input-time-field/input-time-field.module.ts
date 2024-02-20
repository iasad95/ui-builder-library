import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { TimeMaskDirective } from '../../directives/time-mask/time-mask.directive';
import { InputTimeFieldComponent } from './input-time-field.component';
@NgModule({
  declarations: [InputTimeFieldComponent, TimeMaskDirective],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatIconModule, MatRippleModule, MatAutocompleteModule],
  exports: [InputTimeFieldComponent],
  providers: [DatePipe],
})
export class InputTimeFieldModule {}
