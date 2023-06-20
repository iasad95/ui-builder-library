export interface LocationModel {
  coordinates: number[];
  address: string;
}
export interface LocationCoordinates {
  lat: number;
  lng: number;
}
export interface LocationAutocompleteConfig {
  types?: string[];
}
