import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashedCheckboxComponent } from './dashed-checkbox.component';
@NgModule({
  declarations: [DashedCheckboxComponent],
  imports: [CommonModule],
  exports: [DashedCheckboxComponent],
})
export class DashedCheckboxModule {}
