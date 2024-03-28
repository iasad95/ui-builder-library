import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { GoogleMap, MapCircle } from '@angular/google-maps';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import { Observable } from 'rxjs';
import { MapMarkerModel } from '../../model/map.marker';
import { MapsAlertModel } from '../../model/maps-alert';
import { PositionModel } from '../../model/position.model';
import { ToastrSeverity } from '../toastr-stack/enums/toastr-severity.enum';
import { MapActionTypes } from './enums/map-action-types.enum';
import { MapActionEvent } from './interfaces/map-action-event.interface';
import { MapCircleItem } from './interfaces/map-circle-item.interface';
import { CIRCLE_OPTIONS, DEFAULT_MAP_OPTIONS, DEFAULT_POSITION, MAP_CIRCLE_RADIUS_KMS, MAP_ZOOM_POSITION, MARKER_OPTIONS, MARKER_OPTIONS_ENABLE_DRAG } from './map.config';
import { MapService } from './map.service';
@Component({
  selector: 'lib-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibMapsComponent implements AfterViewInit, OnChanges, OnDestroy, OnInit {
  @Input() disableNotification: boolean;
  @Input() markers: MapMarkerModel[] = [];
  @Input() initialLocation: PositionModel = DEFAULT_POSITION;
  @Input() mapType: google.maps.MapTypeId | undefined;
  @Input() enableDrag: boolean = false;
  @Input() locations: string[] = [];
  @Input() searchMapsString: string;
  @Input() mapOptions: google.maps.MapOptions = DEFAULT_MAP_OPTIONS;
  @Input() directions$: Observable<google.maps.DirectionsResult>;
  @Input() directionRenderOptions: google.maps.DirectionsRendererOptions = {
    polylineOptions: { strokeColor: 'green' },
  };
  @Output() mapActionEvent: EventEmitter<MapActionEvent> = new EventEmitter<MapActionEvent>();
  public markerOptions: google.maps.MarkerOptions = MARKER_OPTIONS;
  public circleOptions: google.maps.CircleOptions = CIRCLE_OPTIONS;
  public apiLoaded: boolean = false;
  public editLocationIndex: number = null;
  public deleteLocationIndex: number = null;
  public locationTrack: PositionModel;
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  public zoom: number = DEFAULT_MAP_OPTIONS.zoom;
  public editOptionClicked: boolean;
  private centerPosition: google.maps.LatLngLiteral = DEFAULT_POSITION;
  private validatedPosition: google.maps.LatLngLiteral = DEFAULT_POSITION;
  private mapCircleItem$: Subject<MapCircleItem>;
  private componentDestroyed$: Subject<void>;
  private centerChanged$: Subject<google.maps.LatLngLiteral>;
  constructor(
    private mapService: MapService,
    private cdr: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this.componentDestroyed$ = new Subject<void>();
    this.mapCircleItem$ = new Subject<MapCircleItem>();
    this.centerChanged$ = new Subject<google.maps.LatLngLiteral>();
    this.centerChanged$.pipe(takeUntil(this.componentDestroyed$), debounceTime(100)).subscribe((mapCenterChanged: google.maps.LatLngLiteral) => {
      this.mapActionEvent.emit({
        type: MapActionTypes.MapCenterChanged,
        mapCenterChanged,
      });
    });
  }
  public onPlaceChange(place: google.maps.places.PlaceResult): void {
    if (place.geometry.location) {
      const position = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      this.initialLocation = position.lat && position.lng ? position : DEFAULT_POSITION;
      this.centerPosition = position.lat && position.lng ? position : DEFAULT_POSITION;
      this.capturePositionChanges(position);
      this.initializeMapConfig();
      this.cdr.detectChanges();
    }
  }
  ngAfterViewInit(): void {
    this.loadMap();
    this.mapCircleItem$.pipe(takeUntil(this.componentDestroyed$), debounceTime(20)).subscribe((results) => {
      this.markerDragEndCircle(results.index, results.circle);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['enableDrag']) {
      this.markerOptions = this.enableDrag ? MARKER_OPTIONS_ENABLE_DRAG : MARKER_OPTIONS;
    }
  }
  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
  private loadMap(): void {
    if (!this.apiLoaded) {
      this.mapService.loadGoogleApis().subscribe({
        next: (loaded) => {
          if (loaded) {
            this.initializeMapConfig();
            this.apiLoaded = true;
            this.mapActionEvent.emit({
              type: MapActionTypes.MapLoaded,
              mapLoaded: this.apiLoaded,
            });
          }
        },
        error: () => {
          const mapsAlertsEvent: MapsAlertModel = {
            title: 'MAP.LOADING_ERROR_TITLE',
            message: 'MAP.LOADING_ERROR',
            severity: ToastrSeverity.WARNING,
          };
          this.mapActionEvent.emit({
            type: MapActionTypes.MapsAlertsEvent,
            mapsAlertsEvent,
          });
        },
      });
    } else {
      this.initializeMapConfig();
      this.mapActionEvent.emit({
        type: MapActionTypes.MapLoaded,
        mapLoaded: this.apiLoaded,
      });
    }
  }
  public zoomChanged(maps): void {
    const lat = this.checkLatPositionBoundary(maps.getCenter().lat() + MAP_ZOOM_POSITION[this.map.getZoom()]);
    this.zoom = null;
    const lng = maps.getCenter().lng();
    this.centerPosition = {
      lat: lat ? lat : DEFAULT_POSITION.lat,
      lng: lng ? lng : DEFAULT_POSITION.lng,
    };
  }
  public checkLatPositionBoundary(latPosition: number): number {
    if (latPosition > 90) return 90;
    if (latPosition < -90) return -90;
    return latPosition;
  }
  private initializeMapConfig(): void {
    const zoomScale = this.map ? this.map.getZoom() : DEFAULT_MAP_OPTIONS.zoom;
    const lat = this.adjustLatitude(this.initialLocation.lat, MAP_ZOOM_POSITION[zoomScale], false);
    const lng = this.initialLocation.lng;
    this.mapOptions.center = this.initialLocation;
    if (this.enableDrag) this.markerOptions = MARKER_OPTIONS_ENABLE_DRAG;
    this.centerPosition = this.initialLocation;
    this.locationTrack = this.initialLocation;
    this.initialLocation = {
      lat: lat ? lat : DEFAULT_POSITION.lat,
      lng: lng ? lng : DEFAULT_POSITION.lng,
    };
    this.markerOptions.animation = google.maps.Animation.DROP;
  }
  public editItem(index: number): void {
    this.editOptionClicked = true;
    this.zoom = DEFAULT_MAP_OPTIONS.zoom;
    this.cdr.detectChanges();
    this.markerOptions.animation = null;
    this.resetEditMarker();
    this.markers[index] = this.mapService.buildMapMarker(
      (index + 1).toString(),
      '/assets/images/maps-count/' + (index + 1) + '.png',
      this.markers[index].position,
      this.markers[index].radius,
      '#custom_pin_maps_selected',
    );
    this.editLocationIndex = index;
    this.deleteLocationIndex = null;
    this.mapActionEvent.emit({
      type: MapActionTypes.SetDeleteLocationIndex,
      setDeleteLocationIndex: null,
    });
    this.mapActionEvent.emit({
      type: MapActionTypes.SetEditLocationIndex,
      setEditLocationIndex: index,
    });
    this.navigateToItem(index);
    this.markerOptions.animation = google.maps.Animation.DROP;
  }
  public setSearchString(value: string): void {
    this.searchMapsString = value;
  }
  public deleteItem(index: number): void {
    if (this.markers.length == 1) {
      const mapsAlertsEvent: MapsAlertModel = {
        title: 'MAP.UNABLE_TO_DELETE',
        message: 'MAP.CANNOT_DELETE_SINGLE_LOCATION',
        severity: ToastrSeverity.WARNING,
      };
      this.mapActionEvent.emit({
        type: MapActionTypes.MapsAlertsEvent,
        mapsAlertsEvent,
      });
    } else if (this.markers.length > 1) {
      if (this.deleteLocationIndex !== null && this.deleteLocationIndex == index) {
        this.locations.splice(index, 1);
        this.mapActionEvent.emit({
          type: MapActionTypes.UpdatedLocations,
          updatedLocations: this.locations,
        });
        this.markers.splice(index, 1);
        this.markers = this.markers.map((x, i) =>
          this.mapService.buildMapMarker((i + 1).toString(), '/assets/images/maps-count/' + (i + 1) + '.png', x.position, x.radius, '#custom_pin_maps'),
        );
        this.mapActionEvent.emit({
          type: MapActionTypes.MarkerUpdated,
          markerUpdated: this.markers,
        });
        if (!this.disableNotification) {
          const mapsAlertsEvent: MapsAlertModel = {
            title: 'MAP.LOCATION_DELETED',
            message: 'MAP.DESIREDLOCATION_IS_REMOVED',
            severity: ToastrSeverity.SUCCESS,
          };
          this.mapActionEvent.emit({
            type: MapActionTypes.MapsAlertsEvent,
            mapsAlertsEvent,
          });
        }
        this.deleteLocationIndex = null;
      } else {
        this.deleteLocationIndex = index;
      }
      this.mapActionEvent.emit({
        type: MapActionTypes.SetDeleteLocationIndex,
        setDeleteLocationIndex: this.deleteLocationIndex,
      });
    }
    this.resetEditMarker();
    this.editLocationIndex = null;
    this.mapActionEvent.emit({
      type: MapActionTypes.SetEditLocationIndex,
      setEditLocationIndex: null,
    });
    this.mapActionEvent.emit({
      type: MapActionTypes.SetMapsSearch,
      setMapsSearch: '',
    });
  }
  public addLocation(): void {
    if (this.validatedPosition.lat === 0 && this.validatedPosition.lng === 0 && this.searchMapsString?.length > 0) {
      const mapsAlertsEvent: MapsAlertModel = {
        title: 'MAP.INVALID_LOCATION',
        message: 'MAP.ADD_VALID_LOCATION',
        severity: ToastrSeverity.WARNING,
      };
      this.mapActionEvent.emit({
        type: MapActionTypes.MapsAlertsEvent,
        mapsAlertsEvent,
      });
      return;
    }
    const tempLocation = this.searchMapsString?.length > 0 ? this.validatedPosition : this.centerPosition;
    if (this.checkLocationNotExists(tempLocation)) return;
    if (this.markers.length < 5) {
      const index = (1).toString();
      const newLocation = this.mapService.buildMapMarker(index, '/assets/images/maps-count/' + index + '.png', tempLocation, MAP_CIRCLE_RADIUS_KMS, '#custom_pin_maps');
      this.mapService.getMapAddressString(tempLocation).subscribe({
        next: (address) => {
          this.markers.unshift(newLocation);
          this.locations.unshift(address);
          this.mapActionEvent.emit({
            type: MapActionTypes.UpdatedLocations,
            updatedLocations: this.locations,
          });
          this.markers = this.markers.map((x, i) =>
            this.mapService.buildMapMarker((i + 1).toString(), '/assets/images/maps-count/' + (i + 1) + '.png', x.position, x.radius, '#custom_pin_maps'),
          );
          this.mapActionEvent.emit({
            type: MapActionTypes.SetMapsSearch,
            setMapsSearch: '',
          });
          this.deleteLocationIndex = null;
          this.mapActionEvent.emit({
            type: MapActionTypes.SetDeleteLocationIndex,
            setDeleteLocationIndex: null,
          });
          this.cdr.detectChanges();
          if (!this.disableNotification) {
            const mapsAlertsEvent: MapsAlertModel = {
              title: 'MAP.LOCATION_ADDED',
              message: 'MAP.LOCATION_ADDED_SUCCESSFULLY',
              severity: ToastrSeverity.SUCCESS,
            };
            this.mapActionEvent.emit({
              type: MapActionTypes.MapsAlertsEvent,
              mapsAlertsEvent,
            });
          }
          this.mapActionEvent.emit({
            type: MapActionTypes.MarkerUpdated,
            markerUpdated: this.markers,
          });
        },
        error: (error) => this.handleGoogleMapsApiError(error),
      });
    } else {
      const mapsAlertsEvent: MapsAlertModel = {
        title: 'MAP.LIMIT_REACHED_ERROR',
        message: 'MAP.YOU_CAN_ADD_UPTO_FIVE_LOCATIONS',
        severity: ToastrSeverity.WARNING,
      };
      this.mapActionEvent.emit({
        type: MapActionTypes.MapsAlertsEvent,
        mapsAlertsEvent,
      });
    }
  }
  private handleGoogleMapsApiError(error: string) {
    const title = error === 'OVER_QUERY_LIMIT' ? 'MAP.OVER_QUERY_LIMIT' : 'MAP.LOADING_ERROR_TITLE';
    const message = error === 'OVER_QUERY_LIMIT' ? 'MAP.OVER_QUERY_LIMIT_MESSAGE' : 'MAP.LOADING_ERROR';
    const mapsAlertsEvent: MapsAlertModel = {
      title: title,
      message: message,
      severity: ToastrSeverity.WARNING,
    };
    this.mapActionEvent.emit({
      type: MapActionTypes.MapsAlertsEvent,
      mapsAlertsEvent,
    });
  }
  public updateLocation(): void {
    if (this.validatedPosition.lat === 0 && this.validatedPosition.lng === 0 && (this.searchMapsString?.length > 0 || !this.editOptionClicked)) {
      const mapsAlertsEvent: MapsAlertModel = {
        title: 'MAP.INVALID_LOCATION',
        message: 'MAP.ADD_VALID_LOCATION',
        severity: ToastrSeverity.WARNING,
      };
      this.mapActionEvent.emit({
        type: MapActionTypes.MapsAlertsEvent,
        mapsAlertsEvent,
      });
      return;
    }
    const tempLocation = !this.editOptionClicked && this.searchMapsString?.length > 0 ? this.validatedPosition : this.locationTrack;
    if (this.checkLocationNotExists(tempLocation, this.editLocationIndex)) return;
    this.mapService.getMapAddressString(tempLocation).subscribe((address) => {
      this.resetEditMarker();
      this.markers[this.editLocationIndex].position = tempLocation;
      this.locations[this.editLocationIndex] = address;
      this.mapActionEvent.emit({
        type: MapActionTypes.UpdatedLocations,
        updatedLocations: this.locations,
      });
      this.editLocationIndex = null;
      this.deleteLocationIndex = null;
      this.mapActionEvent.emit({
        type: MapActionTypes.SetEditLocationIndex,
        setEditLocationIndex: null,
      });
      this.mapActionEvent.emit({
        type: MapActionTypes.SetDeleteLocationIndex,
        setDeleteLocationIndex: null,
      });
      this.mapActionEvent.emit({
        type: MapActionTypes.SetMapsSearch,
        setMapsSearch: '',
      });
      this.mapActionEvent.emit({
        type: MapActionTypes.MarkerUpdated,
        markerUpdated: this.markers,
      });
      this.cdr.detectChanges();
    });
  }
  public centerChanged(maps: GoogleMap): void {
    this.zoom = null;
    if (this.searchMapsString?.length > 0) {
      this.centerPosition = this.validatedPosition;
    } else {
      const lat = this.adjustLatitude(maps.getCenter().lat(), MAP_ZOOM_POSITION[this.map.getZoom()]);
      const lng = maps.getCenter().lng();
      this.centerPosition = {
        lat: lat ? lat : DEFAULT_POSITION.lat,
        lng: lng ? lng : DEFAULT_POSITION.lng,
      };
    }
    const mapCenter = maps.getCenter();
    if (mapCenter) {
      const mapCenterChanged: google.maps.LatLngLiteral = {
        lat: mapCenter.lat(),
        lng: mapCenter.lng(),
      };
      this.centerChanged$.next(mapCenterChanged);
    }
  }
  public adjustLatitude(lat: number, constant: number, addLat = true): number {
    const adjustmentFactor = Math.cos((lat * Math.PI) / 180);
    const adjustedDeltaLat = constant * adjustmentFactor;
    let newLat: number;
    if (addLat) newLat = lat + adjustedDeltaLat;
    else newLat = lat - adjustedDeltaLat;
    return newLat;
  }
  public radiusChanged(circle: MapCircle, index: number): void {
    this.markers[index].radius = circle.getRadius();
    if (circle && circle.getRadius() > MAP_CIRCLE_RADIUS_KMS) {
      circle.radius = MAP_CIRCLE_RADIUS_KMS;
      this.markers[index].radius = MAP_CIRCLE_RADIUS_KMS;
    }
    if (circle && circle.getRadius() < 20000) {
      circle.radius = 20000;
      this.markers[index].radius = 20000;
    }
  }
  public markerDragEnd(index: number, $event: google.maps.MapMouseEvent): void {
    if (this.enableDrag) {
      const coords = {
        lat: $event.latLng.lat(),
        lng: $event.latLng.lng(),
      };
      if (this.checkLocationNotExists(coords, index)) {
        this.markerOptions.animation = null;
        this.markers[index] = this.mapService.buildMapMarker(
          (index + 1).toString(),
          '/assets/images/maps-count/' + (index + 1) + '.png',
          this.markers[index].position,
          this.markers[index].radius,
          '#custom_pin_maps',
        );
        this.cdr.detectChanges();
        this.markerOptions.animation = google.maps.Animation.DROP;
        return;
      }
      this.resetEditMarker();
      this.editLocationIndex = null;
      this.deleteLocationIndex = null;
      this.markers[index].position = coords;
      this.mapActionEvent.emit({
        type: MapActionTypes.SetEditLocationIndex,
        setEditLocationIndex: null,
      });
      this.mapActionEvent.emit({
        type: MapActionTypes.SetDeleteLocationIndex,
        setDeleteLocationIndex: null,
      });
      this.mapActionEvent.emit({
        type: MapActionTypes.SetMapsSearch,
        setMapsSearch: '',
      });
      this.mapService.getMapAddressString(this.markers[index].position).subscribe((address) => {
        this.locations[index] = address;
        this.mapActionEvent.emit({
          type: MapActionTypes.UpdatedLocations,
          updatedLocations: this.locations,
        });
        this.cdr.detectChanges();
      });
    }
  }
  public debounceCenterchanged(index: number, circle: MapCircle): void {
    this.mapCircleItem$.next({
      index,
      circle,
    });
  }
  public markerDragEndCircle(index: number, circle: MapCircle): void {
    const coords: google.maps.LatLngLiteral = {
      lat: circle.getCenter().lat(),
      lng: circle.getCenter().lng(),
    };
    if (this.enableDrag && (coords.lat !== this.markers[index].position.lat || coords.lng !== this.markers[index].position.lng)) {
      if (this.checkLocationNotExists(coords, index)) {
        circle.center = this.markers[index].position;
        this.cdr.detectChanges();
        return;
      }
      this.markers[index].position = coords;
      this.resetEditMarker();
      this.editLocationIndex = null;
      this.deleteLocationIndex = null;
      this.mapActionEvent.emit({
        type: MapActionTypes.SetEditLocationIndex,
        setEditLocationIndex: null,
      });
      this.mapActionEvent.emit({
        type: MapActionTypes.SetDeleteLocationIndex,
        setDeleteLocationIndex: null,
      });
      this.mapActionEvent.emit({
        type: MapActionTypes.SetMapsSearch,
        setMapsSearch: '',
      });
      this.cdr.detectChanges();
      this.mapService
        .getMapAddressString(this.markers[index].position)
        .pipe(takeUntil(this.componentDestroyed$))
        .subscribe((address) => {
          this.locations[index] = address;
          this.mapActionEvent.emit({
            type: MapActionTypes.UpdatedLocations,
            updatedLocations: this.locations,
          });
          this.cdr.detectChanges();
        });
    }
  }
  public checkLocationNotExists(obj: google.maps.LatLngLiteral, ignoreIndex: number = -1): boolean {
    const found = this.markers.some((el, index) => {
      const latObj = Math.trunc(obj.lat * 100);
      const lngObj = Math.trunc(obj.lng * 100);
      const latEl = Math.trunc(el.position.lat * 100);
      const lngEl = Math.trunc(el.position.lng * 100);
      const diffLat = Math.abs(latObj - latEl);
      const diffLng = Math.abs(lngObj - lngEl);
      return diffLat < 15 && diffLng < 15 && ignoreIndex !== index;
    });
    if (found) {
      const mapAlert = {
        title: 'MAP.LOCATION_ALREADY_ADDED_TITLE',
        message: 'MAP.LOCATION_ALREADY_ADDED',
        severity: ToastrSeverity.WARNING,
      };
      this.mapActionEvent.emit({
        type: MapActionTypes.MapsAlertsEvent,
        mapsAlertsEvent: mapAlert,
      });
      return true;
    }
    return false;
  }
  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.markers, event.previousIndex, event.currentIndex);
    this.markers = this.markers.map((x, i) =>
      this.mapService.buildMapMarker((i + 1).toString(), '/assets/images/maps-count/' + (i + 1) + '.png', x.position, x.radius, '#custom_pin_maps'),
    );
    moveItemInArray(this.locations, event.previousIndex, event.currentIndex);
    this.mapActionEvent.emit({
      type: MapActionTypes.UpdatedLocations,
      updatedLocations: this.locations,
    });
  }
  public resetEditMarker(): void {
    if (this.editLocationIndex !== null) {
      this.markers[this.editLocationIndex] = this.mapService.buildMapMarker(
        (this.editLocationIndex + 1).toString(),
        '/assets/images/maps-count/' + (this.editLocationIndex + 1) + '.png',
        this.markers[this.editLocationIndex].position,
        this.markers[this.editLocationIndex].radius,
        '#custom_pin_maps',
      );
    }
  }
  public capturePositionChanges(position?: PositionModel): void {
    this.editOptionClicked = false;
    const address: string = this.searchMapsString;
    if (position?.lat && position?.lng) {
      this.validatedPosition = position;
      return;
    }
    if (!address) {
      this.validatedPosition = { lat: 0, lng: 0 };
      return;
    }
    this.mapService
      .getCoordinatesFromAddress(address)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe({
        next: (coordinates) => {
          this.validatedPosition = coordinates;
        },
        error: (error) => this.handleGoogleMapsApiError(error),
      });
  }
  public cancelEdit(): void {
    this.markerOptions.animation = null;
    this.mapActionEvent.emit({
      type: MapActionTypes.SetMapsSearch,
      setMapsSearch: '',
    });
    this.resetEditMarker();
    this.editLocationIndex = null;
    this.mapActionEvent.emit({
      type: MapActionTypes.SetEditLocationIndex,
      setEditLocationIndex: null,
    });
    this.cdr.detectChanges();
    this.markerOptions.animation = google.maps.Animation.DROP;
  }
  public navigateToItem(index: number): void {
    this.zoom = DEFAULT_MAP_OPTIONS.zoom;
    const lat = this.adjustLatitude(this.markers[index].position.lat, MAP_ZOOM_POSITION[this.map.getZoom()], false);
    const lng = this.markers[index].position.lng;
    this.initialLocation = {
      lat: lat ? lat : DEFAULT_POSITION.lat,
      lng: lng ? lng : DEFAULT_POSITION.lng,
    };
    this.centerPosition = this.markers[index].position;
    this.mapOptions.center = this.markers[index].position;
    this.locationTrack = this.markers[index].position;
    this.cdr.detectChanges();
  }
  public onMapClick(mapClick: google.maps.MapMouseEvent): void {
    this.mapActionEvent.emit({ type: MapActionTypes.MapClick, mapClick });
  }
}
