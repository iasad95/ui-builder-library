import { Observable } from 'rxjs';
import { ImageModel } from './image-model';
export interface ImageCropperModel {
  images: ImageModel[];
  aspectRatio?: number;
  imageSizeMap?: boolean[];
  faceChecker?: (image: string) => Observable<boolean>;
  nsfwChecker?: (image: string) => Observable<boolean>;
  maxNumOfPhotos?: number;
  enableNsfwCheck?: boolean;
  enableFaceCheck?: boolean;
  imageDeactivationToggleIcon?: string;
}
export interface CroppedImageModel {
  image: string;
  cropped?: boolean;
}
export enum Steps {
  crop,
  sizeCheck,
  faceCheck,
  nsfwCheck,
}
export interface IImageCompletedStep {
  step: Steps;
  images: CroppedImageModel[];
}
