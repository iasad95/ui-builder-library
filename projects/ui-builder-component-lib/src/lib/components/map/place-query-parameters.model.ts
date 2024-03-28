import { LocationCoordinates } from '../../model/location.model';
export interface PlaceQuery {
  location: LocationCoordinates;
  type: string;
  radius: number;
  language?: string;
  rankby?: 'prominence' | 'distance';
}
