import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonsModule } from '../../components/buttons/buttons.module';
import { DashedCheckboxModule } from '../../components/dashed-checkbox/dashed-checkbox.module';
import { DynamicModalContainerDirective } from '../../directives/dynamic-modal-container/dynamic-modal-container.directive';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';
import { SectionSeparatorComponent } from '../section-separator/section-separator.component';
import { BottomModalComponent } from './bottom-modal/bottom-modal.component';
import { LibModalComponent } from './popup-modal/popup-modal.component';
@NgModule({
  declarations: [LibModalComponent, BottomModalComponent, DynamicModalContainerDirective],
  imports: [CommonModule, IonicModule, TranslateModule, ReactiveFormsModule, DashedCheckboxModule, ProgressBarModule, ButtonsModule, SectionSeparatorComponent, MatRippleModule],
  exports: [LibModalComponent, BottomModalComponent],
})
export class LibModalModule {}
