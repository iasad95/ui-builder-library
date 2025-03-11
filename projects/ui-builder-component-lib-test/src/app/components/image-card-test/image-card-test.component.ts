import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ImageModel } from 'ui-builder-component-lib';

@Component({
  selector: 'app-image-card-test',
  templateUrl: './image-card-test.component.html',
  styleUrls: ['./image-card-test.component.scss'],
})
export class ImageCardTestComponent {
  @ViewChild('imageCropperModal', { read: ViewContainerRef }) imageCropperModalRef: ViewContainerRef;
  public singleImageUploadedUrl: string;
  public singleImagedUrl: string = 'https://semantic-ui.com/images/avatar2/large/matthew.png';
  public multiImagesUploadedUrls: string[] = [];
  public imageCardLoadingCode: string = `<lib-image-card [loading]="true"></lib-image-card>`;
  public imageCardDisabledCode: string = `<lib-image-card [disabled]="true"></lib-image-card>`;
  public imageCardCode: string = ` <lib-image-card [imageUrl]="singleImageUploadedUrl"
                        [enableCropper]="true"
                        [cropperModalViewRef]="imageCropperModalRef"
                        [imageLabel]="'main'"
                        (removeImage)="onRemoveSingleImage()"
                        (photosUpload)="onUploadSingleImage($event)">
        </lib-image-card>`;
  public imageCardDisplayCode: string = ` <lib-image-card
          [enableCropper]="true"
          [cropperModalViewRef]="imageCropperModalRef"
          (removeImage)="onRemoveSingleFixedImage()"
          [imageUrl]="singleImagedUrl" [imageLabel]="'main'"></lib-image-card>`;
  public imageCardMultiCode: string = `<lib-image-card [imageUrl]="multiImagesUploadedUrls[i]"
                              [enableCropper]="true"
                              [cropperModalViewRef]="imageCropperModalRef"
                              [maxNumOfPhotos]="2"
                              [imageLabel]="(i+1).toString()"
                              (photosUpload)="onUploadImages($event)"
                              (dupPhotosDetect)="onDupPhotoDetected()"
                              (unsupportedFormatsDetect)="onUnsupportedFormatDetected($event)"
                              (maxUploadLimitExceeded)="onMaxUploadLimitExceeded()"
                              (removeImage)="onRemoveImage(i)"
                              *ngFor="let image of [1,2]; let i = index">
              </lib-image-card>`;

  public onUploadSingleImage(images: ImageModel[]): void {
    this.singleImageUploadedUrl = images?.length > 0 ? images[0].image : null;
  }

  public onUploadImages(images: ImageModel[]): void {
    this.multiImagesUploadedUrls = images?.length > 0 ? images.map((value) => value.image) : [];
  }

  public onRemoveSingleImage(): void {
    this.singleImageUploadedUrl = null;
  }

  public onRemoveSingleFixedImage(): void {
    this.singleImagedUrl = null;
  }

  public onRemoveImage(index: number): void {
    this.multiImagesUploadedUrls.splice(index, 1);
  }

  public onDupPhotoDetected(): void {
    alert('Uploading duplicate images is not allowed');
  }

  public onUnsupportedFormatDetected(mimeTypes: string[]): void {
    alert('Invalid file format. Please upload an image file (e.g. JPG, PNG, GIF). Videos are not allowed.');
  }

  public onMaxUploadLimitExceeded(): void {
    alert('The last images were not uploaded. The maximum number of images is 2.');
  }
}
