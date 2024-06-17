import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragAndDropComponent } from './drag-and-drop.component';
import { ImageBaseModule } from '../image-base/image-base.module';
@NgModule({
  declarations: [DragAndDropComponent],
  imports: [CommonModule, ImageBaseModule],
  exports: [DragAndDropComponent],
})
export class DragAndDropModule {}
