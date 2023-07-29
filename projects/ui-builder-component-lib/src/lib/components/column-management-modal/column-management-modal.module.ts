import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonsModule } from '../buttons/buttons.module';
import { DashedCheckboxModule } from '../dashed-checkbox/dashed-checkbox.module';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { ColumnManagementModalComponent } from './column-management-modal.component';
@NgModule({
  declarations: [ColumnManagementModalComponent],
  imports: [CommonModule, SearchBarModule, DragDropModule, TooltipModule, ButtonsModule, TranslateModule, DashedCheckboxModule],
})
export class ColumnManagementModalModule {}
