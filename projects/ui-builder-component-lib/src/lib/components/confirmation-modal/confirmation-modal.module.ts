import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonsModule } from '../buttons/buttons.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { ConfirmationModalComponent } from './confirmation-modal.component';
@NgModule({
  declarations: [ConfirmationModalComponent],
  exports: [ConfirmationModalComponent],
  imports: [CommonModule, TooltipModule, MatDialogModule, ButtonsModule, TranslateModule],
})
export class ConfirmationModalModule {}
