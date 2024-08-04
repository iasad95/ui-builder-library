import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { DashedCheckboxModule } from '../../components/dashed-checkbox/dashed-checkbox.module';
import { ProgressBarComponent } from './progress-bar.component';
@NgModule({
  declarations: [ProgressBarComponent],
  imports: [CommonModule, IonicModule, TranslateModule, ReactiveFormsModule, DashedCheckboxModule],
  exports: [ProgressBarComponent],
})
export class ProgressBarModule {}
