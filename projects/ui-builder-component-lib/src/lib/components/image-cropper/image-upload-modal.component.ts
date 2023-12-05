import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import { CropperPosition, ImageCroppedEvent } from 'ngx-image-cropper';
import { Observable, zip } from 'rxjs';
import { CroppedImageModel, ImageCropperModel } from '../../model/image-cropper.models';
import { ImageModel } from '../../model/image-model';
import { MODAL_DATA } from '../modal/popup-injection-tokens';
import { PopupModalService } from '../modal/popup-modal/popup-modal.service';
enum ImageUploadActions {
  firstVisit,
  revisit,
  posRetention,
}
@Component({
  selector: 'lib-image-upload-modal',
  templateUrl: './image-upload-modal.component.html',
  styleUrls: ['./image-upload-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ImageUploadModalComponent implements OnInit {
  @Input() enableFaceCheck: boolean = false;
  @Input() enableNsfwCheck: boolean = false;
  @Output() cropped: EventEmitter<CroppedImageModel[]> = new EventEmitter();
  @Output() faceChecked: EventEmitter<CroppedImageModel[]> = new EventEmitter();
  @Output() sizeChecked: EventEmitter<CroppedImageModel[]> = new EventEmitter();
  public selectedImageIndex = 0;
  public currImageIndex = 0;
  public selectedImageBase64: string;
  public croppedImages: CroppedImageModel[] = [];
  public aspectRatio: number = 1;
  public allImagesCropped: boolean;
  public allImagesValid: boolean;
  public showCropper: boolean;
  public cropperLoaded: boolean;
  public fullImageData: ImageModel[];
  public imageAttributeMap: boolean[];
  public faceCheckMap: boolean[];
  public nsfwCheckMap: boolean[];
  public faceChecker: (image: string) => Observable<boolean>;
  public nsfwChecker: (image: string) => Observable<boolean>;
  public maxNumOfImages: number = 6;
  public title: string = 'Crop Images';
  public currentCroppedCoords: CropperPosition;
  public selectedCropCoords: CropperPosition;
  public validating: boolean = false;
  public action: ImageUploadActions;
  private readonly twoMB: number = 2097152;
  private imageCropperdata: ImageCropperModel;
  public imageDeactivationToggleIcon: string = 'assets/icons/close.svg';
  constructor(
    @Inject(MODAL_DATA) data: ImageCropperModel,
    private popupModalService: PopupModalService,
    private imageCompress: NgxImageCompressService,
    private cdr: ChangeDetectorRef,
  ) {
    this.imageCropperdata = data;
  }
  ngOnInit(): void {
    this.intImagesCropper(this.imageCropperdata);
  }
  public onClose(): void {
    this.popupModalService.hide([]);
  }
  public async imageCropped(event: ImageCroppedEvent): Promise<void> {
    if (this.action === ImageUploadActions.revisit || this.action === ImageUploadActions.posRetention) {
      this.action = null;
      return;
    }
    this.validating = true;
    this.croppedImages[this.selectedImageIndex].image = event.base64;
    this.fullImageData[this.selectedImageIndex].croppedCoordinates = {
      ...event.cropperPosition,
    };
    await this.doNsfwAndFaceCheck();
  }
  private async doNsfwAndFaceCheck(): Promise<void> {
    this.fullImageData[this.selectedImageIndex].moreThan2mb = this.imageSizeValidation();
    this.fullImageData[this.selectedImageIndex].dupName = this.imageNameValidation();
    const observables = [];
    if (this.enableFaceCheck && this.imageCropperdata?.faceChecker) {
      observables.push(this.faceValidation());
    }
    if (this.enableNsfwCheck && this.imageCropperdata?.nsfwChecker) {
      observables.push(this.nsfwValidation());
    }
    let invalid = false;
    if (observables.length > 0) {
      zip(observables).subscribe(
        (results) => {
          if (this.enableNsfwCheck && this.imageCropperdata?.nsfwChecker) this.fullImageData[this.selectedImageIndex].isSafeForWork = results.pop();
          invalid = !this.fullImageData[this.selectedImageIndex].isSafeForWork;
          if (results.length > 0) {
            this.fullImageData[this.selectedImageIndex].constainsFace = results.pop();
            invalid = invalid || !this.fullImageData[this.selectedImageIndex].constainsFace;
          }
          if (!invalid && this.fullImageData[this.selectedImageIndex].deactivated) {
            this.fullImageData[this.selectedImageIndex].deactivated = false;
          }
          this.updateValidationResult(invalid);
        },
        (err) => {
          invalid = true;
          this.fullImageData[this.selectedImageIndex].constainsFace = false;
          this.fullImageData[this.selectedImageIndex].isSafeForWork = false;
        },
      );
    } else {
      this.updateValidationResult(invalid);
    }
  }
  public updateValidationResult(invalidity: boolean): void {
    this.fullImageData[this.selectedImageIndex].invalid = invalidity;
    this.allImagesValid = this.checkAllImagesValid();
    this.validating = false;
    this.cdr.detectChanges();
  }
  public cropperReady(): void {
    this.cropperLoaded = true;
    this.fullImageData[this.selectedImageIndex].isDark = false;
    if (this.fullImageData[this.selectedImageIndex].croppedCoordinates) {
      this.action = ImageUploadActions.posRetention;
      this.selectedCropCoords = {
        ...this.fullImageData[this.selectedImageIndex].croppedCoordinates,
      };
    }
    this.cdr.detectChanges();
  }
  public imageLoaded(): void {
    this.showCropper = true;
    this.cdr.detectChanges();
  }
  public selectImg(index): void {
    const exitingImage = this.fullImageData[this.selectedImageIndex].image;
    this.selectedImageIndex = index;
    const firstVisit = this.fullImageData[this.selectedImageIndex].isDark;
    this.selectedCropCoords = this.fullImageData[this.selectedImageIndex].croppedCoordinates ? { ...this.fullImageData[this.selectedImageIndex].croppedCoordinates } : null;
    if (exitingImage === this.fullImageData[this.selectedImageIndex].image) {
      this.selectedImageBase64 = '';
      this.cdr.detectChanges();
    }
    this.selectedImageBase64 = this.fullImageData[this.selectedImageIndex].image;
    this.croppedImages[index].cropped = true;
    this.allImagesCropped = this.croppedImages.filter((image) => image.cropped)?.length === this.croppedImages.length;
    if (firstVisit) this.fullImageData[this.selectedImageIndex].isDark = false;
    else this.action = ImageUploadActions.revisit;
    this.cdr.detectChanges();
  }
  public stepNextImage(): void {
    if (!this.isPassedCheck()) return;
    this.fullImageData[this.selectedImageIndex].deactivated = false;
    if (this.fullImageData.length - this.selectedImageIndex < 2) {
      this.complete();
      return;
    }
    this.selectImg(this.selectedImageIndex + 1);
  }
  public stepPreviousImage(): void {
    if (this.selectedImageIndex > 0) this.selectImg(this.selectedImageIndex - 1);
  }
  public deactivateImage(): void {
    this.fullImageData[this.selectedImageIndex].deactivated = true;
    if (this.selectedImageIndex < this.fullImageData.length - 1) {
      this.selectImg(this.selectedImageIndex + 1);
    }
  }
  public invalidateAllImages(): void {
    for (let i = 0; i < this.fullImageData.length; i++) {
      this.fullImageData[i].isDark = true;
      this.fullImageData[i].invalid = true;
    }
  }
  public complete(): void {
    if (this.allImagesCropped) {
      let acceptedImages;
      acceptedImages = this.croppedImages.filter((value, index) => !this.fullImageData[index].invalid && !this.fullImageData[index].deactivated);
      acceptedImages = acceptedImages.map((value) => value.image);
      acceptedImages = acceptedImages.slice(0, this.maxNumOfImages);
      this.popupModalService.hide(acceptedImages);
    }
  }
  private imageSizeValidation(): boolean {
    return this.imageCompress.byteCount(this.croppedImages[this.selectedImageIndex].image) > this.twoMB;
  }
  private imageNameValidation(): string | null {
    let currIndex = this.selectedImageIndex;
    const currentImage = this.fullImageData[currIndex];
    currIndex--;
    while (currIndex >= 0) {
      if (currentImage.fileName === this.fullImageData[currIndex].fileName) return currentImage.fileName;
      currIndex--;
    }
    return null;
  }
  private faceValidation(): Observable<boolean | null> {
    if (this.imageCropperdata?.faceChecker) return this.imageCropperdata?.faceChecker(this.croppedImages[this.selectedImageIndex].image);
    return null;
  }
  private nsfwValidation(): Observable<boolean> {
    if (this.imageCropperdata?.nsfwChecker) return this.imageCropperdata?.nsfwChecker(this.croppedImages[this.selectedImageIndex].image);
    return null;
  }
  private isPassedCheck(): boolean {
    if (this.fullImageData[this.selectedImageIndex].deactivated) return true;
    if (this.enableFaceCheck && this.imageCropperdata?.faceChecker && !this.fullImageData[this.selectedImageIndex].constainsFace) return false;
    if (this.enableNsfwCheck && this.imageCropperdata?.nsfwChecker && !this.fullImageData[this.selectedImageIndex].isSafeForWork) return false;
    return true;
  }
  private checkAllImagesValid(): boolean {
    for (const image of this.fullImageData) {
      if (!image.constainsFace || !image.isSafeForWork || image.dupName !== null) return false;
    }
    return true;
  }
  private intImagesCropper(data: ImageCropperModel): void {
    this.croppedImages = [];
    this.enableFaceCheck = data.enableFaceCheck;
    this.enableNsfwCheck = data.enableNsfwCheck;
    this.selectedImageBase64 = data.images ? data.images[0].image : '';
    this.fullImageData = data.images;
    this.aspectRatio = data.aspectRatio || 1;
    this.imageDeactivationToggleIcon = data.imageDeactivationToggleIcon || this.imageDeactivationToggleIcon;
    this.fullImageData.forEach((imageData, index) => this.croppedImages.push({ image: imageData.image, cropped: index === 0 }));
    this.maxNumOfImages = data.maxNumOfPhotos || 6;
    this.allImagesCropped = this.fullImageData.length <= 1;
    this.invalidateAllImages();
  }
}
