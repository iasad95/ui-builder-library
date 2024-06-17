import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { DOC_ORIENTATION, NgxImageCompressService } from 'ngx-image-compress';
import { Observable, Subject, take } from 'rxjs';
import { ImageModel } from '../../model/image-model';
import { ILargeFileWarningParams } from '../../model/large-file-warning-params.interface';
import { ImageCropperService } from '../image-cropper/image-cropper.service';
import { PopupModalService } from '../modal/popup-modal/popup-modal.service';
@Component({
  selector: 'lib-picture-gallery',
  templateUrl: './picture-gallery.component.html',
  styleUrls: ['./picture-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PictureGalleryComponent implements OnInit, OnDestroy {
  @Input() maxNumOfPhotos: number = 4;
  @Input() photos: ImageModel[] = [];
  @Input() slotsPerRow: number = 2;
  @Input() gridGap: number = 24;
  @Input() enableDragAndDrop: boolean;
  @Input() infoIcon: string;
  @Input() largeFileUploadWarningParams: ILargeFileWarningParams = {
    icon: '',
    confirmButton: 'Upload Anyway',
    cancelButton: 'Cancel',
    title: 'Large File Upload Warning',
    message: 'The image is above 2mb. It could take a little while. Would you like to continue?',
  };
  @Input() photoAspectRatio: number = 1;
  @Input() enableNsfwCheck: boolean = false;
  @Input() enableFaceCheck: boolean = false;
  @Input() compressRatio: number = 50;
  @Input() compressQuality: number = 50;
  @Input() faceDetector: (images: string) => Observable<boolean>;
  @Input() nsfwChecker: (images: string) => Observable<boolean>;
  @Output() photosUpload: EventEmitter<ImageModel[]> = new EventEmitter<ImageModel[]>();
  @Output() photosDelete: EventEmitter<ImageModel[]> = new EventEmitter<ImageModel[]>();
  @Output() photoUploadFail: EventEmitter<string> = new EventEmitter<string>();
  @Output() dupPhotosDetect: EventEmitter<number> = new EventEmitter<number>();
  @Output() unsupportedFormatsDetect: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() maxUploadLimitExceeded: EventEmitter<null> = new EventEmitter();
  @ViewChild('dragOutline') dragOutline: ElementRef;
  public skeletonLoaders: boolean[] = [];
  public imageBeingLoaded: boolean = false;
  public imageBeingProcessed: ImageModel;
  private imageFiles: ImageModel[] = [];
  private croppedImages: ImageModel[];
  private readonly twoMegabytes = 2097152;
  private imageSizeMap: boolean[];
  public destroy$: Subject<void> = new Subject();
  constructor(
    private cdr: ChangeDetectorRef,
    private imageCompress: NgxImageCompressService,
    public modalFactoryService: PopupModalService,
    private imageCropperService: ImageCropperService,
  ) {}
  ngOnInit(): void {
    this.skeletonLoaders = new Array(this.maxNumOfPhotos);
    this.skeletonLoaders.fill(false);
    this.cdr.detectChanges();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  public selectImage(): void {
    this.imageCompress.uploadMultipleFiles().then(async (imageFiles: ImageModel[]) => {
      this.handleImages(imageFiles);
    });
  }
  public async handleImages(imageFiles: ImageModel[]): Promise<void> {
    if (imageFiles?.length) {
      this.imageSizeMap = imageFiles.map((file) => (this.imageCompress.byteCount(file.image) >= this.twoMegabytes ? true : false));
      const data = {
        images: imageFiles,
        aspectRatio: this.photoAspectRatio,
        nsfwChecker: this.nsfwChecker,
        faceChecker: this.faceDetector,
        maxNumOfPhotos: this.maxNumOfPhotos,
        enableNsfwCheck: this.enableNsfwCheck,
        enableFaceCheck: this.enableFaceCheck,
      };
      this.imageCropperService
        .openImageCropper(data)
        .pipe(take(1))
        .subscribe((croppedImages) => {
          this.croppedImages = [];
          if (!croppedImages.length) return;
          croppedImages.forEach((image, index) =>
            this.croppedImages.push({
              image,
              fileName: imageFiles[index].fileName,
            }),
          );
          this.parseUploadedImages(this.croppedImages);
        });
    }
  }
  private async compressImage(file: ImageModel, lastIndex: number): Promise<string> {
    let compressedImage = await this.imageCompress.compressFile(file.image, DOC_ORIENTATION.Default, this.compressRatio, this.compressQuality);
    if (this.imageCompress.byteCount(compressedImage) > 700000) {
      compressedImage = await this.compressImage(
        {
          image: compressedImage,
          fileName: file.fileName,
        },
        lastIndex,
      );
    }
    return compressedImage;
  }
  public removeImage(index: number): void {
    if (this.photos[index]) {
      this.photos.splice(index, 1);
    } else {
      this.skeletonLoaders[index] = false;
    }
    this.updateView();
    this.photosDelete.emit(this.photos);
  }
  private updateView(): void {
    this.imageBeingLoaded = this.skeletonLoaders.indexOf(true) > -1;
    this.cdr.detectChanges();
  }
  private async parseUploadedImages(imageFiles: ImageModel[]): Promise<void> {
    if (imageFiles?.length === 0) return;
    let maxUploadLimit = this.photos.length >= this.maxNumOfPhotos;
    const lastIndex = this.photos.length;
    if (maxUploadLimit) {
      this.maxUploadLimitExceeded.emit();
      return;
    }
    for (const imageFile of imageFiles) {
      if (lastIndex >= this.maxNumOfPhotos) {
        maxUploadLimit = true;
        this.maxUploadLimitExceeded.emit();
        this.emitUploadedPhotos();
        break;
      } else {
        imageFile.image = this.croppedImages.find((value) => value.fileName === imageFile.fileName)?.image;
        if (maxUploadLimit) continue;
        this.skeletonLoaders[lastIndex] = true;
        try {
          const compressedImg = await this.compressImage(imageFile, lastIndex);
          this.processCompressedImage(imageFile, lastIndex, compressedImg);
        } catch (err) {
          this.skeletonLoaders[lastIndex] = false;
          this.photoUploadFail.emit(imageFile.fileName);
        }
        this.updateView();
      }
    }
    this.emitUploadedPhotos();
  }
  private processCompressedImage(file: ImageModel, lastIndex: number, compressedImage: string): void {
    if (this.skeletonLoaders[lastIndex]) {
      this.photos.push({
        image: compressedImage,
        fileName: file.fileName,
      });
    }
    this.skeletonLoaders[lastIndex] = false;
  }
  private emitUploadedPhotos(): void {
    this.photosUpload.emit(this.photos);
    this.imageFiles = [];
  }
}
