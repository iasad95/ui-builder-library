import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ButtonsModule } from '../buttons/buttons.module';
import { LibModalModule } from '../modal/modal.module';
import { ImageCropperService } from './image-cropper.service';
import { ImageTmpltComponent } from './image-tmplt/image-tmplt.component';
import { ImageUploadModalComponent } from './image-upload-modal.component';
@NgModule({
  declarations: [ImageUploadModalComponent, ImageTmpltComponent],
  imports: [CommonModule, IonicModule, ImageCropperModule, MatButtonModule, MatIconModule, TranslateModule, LibModalModule, MatProgressSpinnerModule, ButtonsModule],
  exports: [ImageUploadModalComponent],
  providers: [ImageCropperService],
})
export class SharedImageCropperModule {}
