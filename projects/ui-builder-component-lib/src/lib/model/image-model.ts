import { CropperPosition } from 'ngx-image-cropper';
export class ImageModel {
  image: string;
  fileName: string;
  orientation?: number;
  moreThan2mb?: boolean;
  constainsFace?: boolean;
  isSafeForWork?: boolean;
  dupName?: string;
  invalid?: boolean;
  deactivated?: boolean;
  isDark?: boolean = true;
  croppedCoordinates?: CropperPosition;
}
