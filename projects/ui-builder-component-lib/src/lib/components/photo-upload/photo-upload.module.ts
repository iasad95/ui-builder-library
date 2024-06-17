import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { DragAndDropModule } from '../drag-and-drop/drag-and-drop.module';
import { ImageCardModule } from './image-card/image-card.module';
import { PictureGalleryComponent } from './picture-gallery.component';
@NgModule({
  declarations: [PictureGalleryComponent],
  imports: [CommonModule, IonicModule, MatIconModule, ImageCardModule, DragAndDropModule],
  exports: [PictureGalleryComponent],
})
export class PhotoUploadModule {}
