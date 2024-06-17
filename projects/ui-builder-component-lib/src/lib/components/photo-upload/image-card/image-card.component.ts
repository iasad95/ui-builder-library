import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ImageModel } from '../../../model/image-model';
import { ImageCropperService } from '../../image-cropper/image-cropper.service';
import { ImageBaseComponent } from '../image-base/image-base.component';
@Component({
  selector: 'lib-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ImageCardComponent extends ImageBaseComponent {
  @Output() removeImage: EventEmitter<void> = new EventEmitter();
  constructor(
    private imageCompress: NgxImageCompressService,
    private imageCropper: ImageCropperService,
  ) {
    super(imageCompress, imageCropper);
  }
  public onRemoveImage(event): void {
    this.removeImage.emit();
    event.stopPropagation();
  }
  public selectImages(): void {
    if (this.loading || this.disabled || this.imageUrl || this.disableUploadOnClick) {
      return;
    }
    this.imageCompress.uploadMultipleFiles().then(async (arrayOfFiles: ImageModel[]) => {
      this.onSelectImages(arrayOfFiles);
    });
  }
}
