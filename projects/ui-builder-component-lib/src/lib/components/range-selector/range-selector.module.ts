import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RangeSelectorComponent } from './range-selector.component';
@NgModule({
  declarations: [RangeSelectorComponent],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  exports: [RangeSelectorComponent],
})
export class RangeSelectorModule {}
