import { PositionModel } from '../../model/position.model';
export const MAP_CIRCLE_RADIUS_KMS: number = 100000;
export const MAP_STYLES: google.maps.MapTypeStyle[] | null = [
  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#263c3f' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#6b9a76' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#38414e' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#212a37' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9ca5b3' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#746855' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1f2835' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#f3d19c' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2f3948' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#17263c' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#515c6d' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#17263c' }],
  },
];
export const DEFAULT_POSITION: PositionModel = {
  lat: 0,
  lng: 0,
};
export const DEFAULT_MAP_OPTIONS: google.maps.MapOptions = {
  minZoom: 2,
  zoom: 6,
  styles: MAP_STYLES,
  fullscreenControl: false,
  zoomControl: false,
  keyboardShortcuts: false,
  panControl: false,
  disableDefaultUI: true,
  restriction: {
    latLngBounds: {
      north: 85,
      south: -85,
      east: 180,
      west: -180,
    },
    strictBounds: true,
  },
};
export const MARKER_OPTIONS: google.maps.MarkerOptions = {
  draggable: false,
  clickable: true,
  optimized: false,
};
export const MARKER_OPTIONS_ENABLE_DRAG: google.maps.MarkerOptions = {
  draggable: true,
  clickable: true,
  optimized: false,
};
export const CIRCLE_OPTIONS: google.maps.CircleOptions = {
  draggable: false,
  editable: true,
  strokeColor: '#fe3c72',
  fillColor: '#fe3c72',
  fillOpacity: 0.07,
  strokeWeight: 1.5,
};
export const MAP_ZOOM_POSITION = {
  1: 0,
  2: 0,
  3: 0,
  4: 40,
  5: 20,
  6: 10,
  7: 5,
  8: 2.5,
  9: 1.25,
  10: 0.625,
  11: 0.3125,
  12: 0.15625,
  13: 0.078125,
  14: 0.0390625,
  15: 0.01953125,
  16: 0.009765625,
  17: 0.0048828125,
  18: 0.00244140625,
  19: 0.001220703125,
  20: 0.0006103515625,
  21: 0.00030517578125,
  22: 0.000152587890625,
};
