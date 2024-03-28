import { MapMarkerModel } from '../../../model/map.marker';
import { MapsAlertModel } from '../../../model/maps-alert';
import { MapActionTypes } from '../enums/map-action-types.enum';
export interface MapActionEvent {
  type: MapActionTypes;
  mapLoaded?: boolean;
  markerClick?: MapMarkerModel;
  markerUpdated?: MapMarkerModel[];
  mapsAlertsEvent?: MapsAlertModel;
  updatedLocations?: string[];
  setMapsSearch?: string;
  setDeleteLocationIndex?: number;
  setEditLocationIndex?: number;
  mapClick?: google.maps.MapMouseEvent;
  mapCenterChanged?: google.maps.LatLngLiteral;
}
