import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import { catchError, forkJoin, from, map, Observable, of, switchMap, take, tap } from 'rxjs';
import { ImageFormats } from '../../../enums/image-formats.enum';
import { DATA_PATH_EXTRACTOR_REGEX } from '../../../lookups/regexs';
import { ImageModel } from '../../../model/image-model';
import { ImageCropperService } from '../../image-cropper/image-cropper.service';
@Component({
  selector: 'lib-image-base',
  templateUrl: './image-base.component.html',
  styleUrls: ['./image-base.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ImageBaseComponent {
  @Input() imageUrl: string;
  @Input() imageLabel: string;
  @Input() maxNumOfPhotos: number;
  @Input() loading: boolean;
  @Input() disabled: boolean;
  @Input() enableDelete: boolean = true;
  @Input() enableCropper: boolean;
  @Input() imageFormats: ImageFormats[] = Object.values(ImageFormats);
  @Input() cropperModalViewRef: ViewContainerRef;
  @Input() enableCompression: boolean = true;
  @Input() maxImageSizeInBytes: number = 2097152;
  @Input() maxImageCompressSizeInBytes: number = 700000;
  @Input() photoAspectRatio: number = 1;
  @Input() photos: ImageModel[] = [];
  @Input() disableUploadOnClick: boolean;
  @Input() faceDetector: (images: string) => Observable<boolean>;
  @Input() nsfwChecker: (images: string) => Observable<boolean>;
  @Input() enableNsfwCheck: boolean;
  @Input() enableFaceCheck: boolean;
  @Input() compressRatio: number = 50;
  @Input() compressQuality: number = 50;
  @Output() photosUpload: EventEmitter<ImageModel[]> = new EventEmitter();
  @Output() photoUploadFail: EventEmitter<string> = new EventEmitter<string>();
  @Output() dupPhotosDetect: EventEmitter<number> = new EventEmitter<number>();
  @Output() unsupportedFormatsDetect: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() maxUploadLimitExceeded: EventEmitter<null> = new EventEmitter();
  private newImages: ImageModel[];
  constructor(
    private imageCompressService: NgxImageCompressService,
    private imageCropperService: ImageCropperService,
  ) {}
  public onSelectImages(imageFiles: ImageModel[]): void {
    if (this.loading || this.disabled || imageFiles?.length == 0 || this.photos.length >= this.maxNumOfPhotos) {
      return;
    }
    imageFiles = this.validateImages(imageFiles);
    if (imageFiles?.length > 0) {
      const data = {
        images: imageFiles,
        aspectRatio: this.photoAspectRatio,
        nsfwChecker: this.nsfwChecker,
        faceChecker: this.faceDetector,
        enableFaceCheck: this.enableFaceCheck,
        enableNsfwCheck: this.enableNsfwCheck,
        maxNumOfPhotos: this.maxNumOfPhotos - this.photos.length,
      };
      if (this.enableCropper) {
        this.imageCropperService
          .openImageCropper(data)
          .pipe(
            take(1),
            switchMap((croppedImages) => {
              this.newImages = croppedImages?.map((image, index) => {
                return { image, fileName: imageFiles[index].fileName };
              });
              return this.compressImages();
            }),
          )
          .subscribe();
      } else {
        this.newImages = imageFiles;
        this.compressImages().subscribe();
      }
    }
  }
  private validateImages(images: ImageModel[]): ImageModel[] {
    if (this.maxNumOfPhotos > 0 && this.photos?.length >= this.maxNumOfPhotos) {
      this.maxUploadLimitExceeded.emit();
      return [];
    }
    const allowedNoOfImages = this.maxNumOfPhotos > 0 ? this.maxNumOfPhotos - this.photos?.length || 0 : -1;
    if (allowedNoOfImages > -1 && images.length > allowedNoOfImages) {
      images = images.slice(0, allowedNoOfImages);
      this.maxUploadLimitExceeded.emit();
    }
    const existingFileNames = new Set(this.photos?.map((photo) => photo.fileName));
    const invalidMimeTypes: string[] = [];
    let dupeImages = 0;
    const formatPattern = this.imageFormats?.length > 0 ? this.imageFormats.join('|') : '';
    const regexPattern: RegExp = new RegExp(`\\b(${formatPattern})\\b`, 'i');
    images = images.filter((file) => {
      const mimeTypeMatch = file.image.match(DATA_PATH_EXTRACTOR_REGEX);
      const mimeType = mimeTypeMatch ? mimeTypeMatch[1] : '';
      let invalidFileType = true;
      if (mimeType && this.imageFormats?.length > 0) {
        const formatFromMime = mimeType.split('/')[1];
        invalidFileType = !regexPattern.test(formatFromMime);
        if (invalidFileType) {
          invalidMimeTypes.push(mimeType);
        }
      }
      const isDupe = existingFileNames.has(file.fileName);
      if (isDupe) {
        dupeImages++;
      }
      return !(isDupe || invalidFileType);
    });
    if (dupeImages) {
      this.dupPhotosDetect.emit(dupeImages);
    }
    if (invalidMimeTypes.length) {
      this.unsupportedFormatsDetect.emit(invalidMimeTypes);
    }
    return images;
  }
  private compressImages(): Observable<ImageModel[]> {
    if (this.enableCompression) {
      const compressObservables: Observable<ImageModel>[] = this.newImages.map((imageFile) =>
        this.compressImage(imageFile).pipe(
          map((compressedImage) => {
            imageFile.image = compressedImage;
            return imageFile;
          }),
          catchError((err) => {
            this.photoUploadFail.emit(imageFile.fileName);
            return of(imageFile);
          }),
        ),
      );
      return forkJoin(compressObservables).pipe(
        tap((compressedImages: ImageModel[]) => {
          this.photosUpload.emit(compressedImages);
        }),
      );
    } else {
      this.photosUpload.emit(this.newImages);
      return of(this.newImages);
    }
  }
  private compressImage(file: ImageModel): Observable<string> {
    return from(this.imageCompressService.compressFile(file.image, file.orientation, this.compressRatio, this.compressQuality)).pipe(
      switchMap((compressedImage: string) => {
        if (this.imageCompressService.byteCount(compressedImage) > this.maxImageCompressSizeInBytes) {
          return this.compressImage({
            image: compressedImage,
            fileName: file.fileName,
          });
        }
        return of(compressedImage);
      }),
    );
  }
}
