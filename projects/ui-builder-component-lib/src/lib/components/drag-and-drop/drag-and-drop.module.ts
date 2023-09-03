import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragAndDropComponent } from './drag-and-drop.component';
@NgModule({
  declarations: [DragAndDropComponent],
  imports: [CommonModule],
  exports: [DragAndDropComponent],
})
export class DragAndDropModule {}
