import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TranslateModule } from '@ngx-translate/core';
import { InputFieldSelectComponent } from './input-field-select.component';
@NgModule({
  declarations: [InputFieldSelectComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DropdownModule, TranslateModule, TranslateModule],
  exports: [InputFieldSelectComponent],
})
export class InputFieldSelectModule {}
