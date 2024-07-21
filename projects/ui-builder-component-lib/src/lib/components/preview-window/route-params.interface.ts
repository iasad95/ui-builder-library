export interface IRouteParams {
  key: string;
  value: string;
  stepStart?: boolean;
  pageTitle?: string;
  previewThumbnail?: string;
  subRoutes?: IRouteParams[];
}
