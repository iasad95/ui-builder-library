import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageCropperModel } from '../../model/image-cropper.models';
import { PopupModalService } from '../modal/popup-modal/popup-modal.service';
import { ImageUploadModalComponent } from './image-upload-modal.component';
@Injectable({
  providedIn: 'root',
})
export class ImageCropperService {
  constructor(private popupModalService: PopupModalService) {}
  public openImageCropper(data: ImageCropperModel): Observable<string[]> {
    const modal = this.popupModalService.show(ImageUploadModalComponent, data).afterClose;
    this.popupModalService.setValues({ customClass: 'image-upload-modal' });
    return modal;
  }
}
