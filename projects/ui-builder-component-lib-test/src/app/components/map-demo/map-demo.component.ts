import { ChangeDetectionStrategy, Component, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  InputFieldComponent,
  LibMapsComponent,
  MAP_CIRCLE_RADIUS_KMS,
  MapActionEvent,
  MapActionTypes,
  MapMarkerModel,
  MapService,
  MapsAlertModel,
  PositionModel,
  ToastrSeverity,
} from 'ui-builder-component-lib';

@Component({
  selector: 'app-map-demo',
  templateUrl: './map-demo.component.html',
  styleUrls: ['./map-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapDemoComponent implements OnInit {
  public mapActionEventCode: Record<string, string>;
  public mapActionEventsSample: Record<string, string>;

  @ViewChild('search', { static: false })
  public searchElementRef: InputFieldComponent;
  @ViewChild('libMaps', { static: false })
  private libMaps: LibMapsComponent;

  public disableNotification: FormControl<boolean> = new FormControl(false);
  public enableDrag: FormControl<boolean> = new FormControl(true);
  public searchMapsString: string = '';
  public locationsMarkers: MapMarkerModel[] = [];
  public mapType: google.maps.MapTypeId | undefined;

  public polyOptions: string = "{ polylineOptions: { strokeColor: 'green' } }";
  public mapCode: string =
    '<lib-map [mapType]="mapType" [markers]="locationsMarkers" [enableDrag]="true" [initialLocation]="initialLocation" (mapLoaded)="onMapLoaded($event)"></lib-map>';
  public importCode: string = `LibMapModule.forRoot({
      googleMapsKey: environment.googleMapsKey,
      googleMapsURL: environment.googleMapsURL,
    })`;
  public initialLocation: PositionModel = {
    lat: 37,
    lng: 74.3095,
  };
  public demoMarkers: string = `
[{
  icon : {
    url: 'assets/1.png#custom_pin_maps',
    size: new google.maps.Size(iconWidth, iconHeight),
    scaledSize: new google.maps.Size(iconWidth, iconHeight),
    anchor: null
  },
  id: 1,
  omitMarkerCircle: false,
  position: {
    lat: 31.5925,
    lng: 74.3095
  },
  radius: 100000
}]`;
  public initialLocationDemo: string = `{
    lat: 37,
    lng: 74.3095,
  }`;

  constructor(
    private mapService: MapService,
    @Inject(NgZone) private ngZone: NgZone,
  ) {}

  ngOnInit(): void {
    this.mapActionEventCode = this._mapActionEventCode();
    this.mapActionEventsSample = this._mapActionEventsSample();
  }

  public initAutocomplete(): void {
    const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.inputFieldRef.nativeElement);
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        this.libMaps.onPlaceChange(autocomplete.getPlace());
      });
    });
  }

  public onMapActionEvent(mapActionEvent: MapActionEvent): void {
    switch (mapActionEvent.type) {
      case MapActionTypes.MapLoaded: {
        this.onMapLoaded(mapActionEvent.mapLoaded);
        return;
      }
      case MapActionTypes.MapsAlertsEvent: {
        this.mapsAlertsEvent(mapActionEvent.mapsAlertsEvent);
        return;
      }
      case MapActionTypes.MarkerClick: {
        this.onMarkerClick(mapActionEvent.markerClick);
        return;
      }
      case MapActionTypes.MapClick: {
        this.onMapClick(mapActionEvent.mapClick);
        return;
      }
      default: {
        // Unhandled action event
        console.log(mapActionEvent);
        return;
      }
    }
  }

  private onMapLoaded(loaded: boolean): void {
    if (loaded) {
      this.locationsMarkers = [
        this.mapService.buildMapMarker(
          '1',
          'assets/1.png',
          {
            lat: 31.5925,
            lng: 74.3095,
          },
          MAP_CIRCLE_RADIUS_KMS,
          '#custom_pin_maps',
        ),
      ];
      this.initAutocomplete();
      this.mapType = google.maps.MapTypeId.ROADMAP;
    }
  }

  private onMarkerClick(marker: MapMarkerModel): void {
    alert('Marker clicked');
  }

  private onMapClick(event: google.maps.MapMouseEvent): void {
    alert('Map Clicked');
  }

  private mapsAlertsEvent(data: MapsAlertModel): void {
    alert(data.message);
  }

  private _mapActionEventCode(): Record<string, string> {
    return {
      html: `
      <!-- HTML Example Usage -->
      <lib-map (mapActionEvent)="onMapActionEvent($event)"></lib-map>
      `,
      typescript: `
    // Typescript method example usage inside the Host application
    public onMapActionEvent(mapActionEvent: MapActionEvent): void {
        switch (mapActionEvent.type) {
          case MapActionTypes.SetMapsSearch: {
            // Handle "SetMapsSearch" event here
            break;
          }

          case MapActionTypes.MapsAlertsEvent: {
            // Handle "MapsAlertsEvent" event here
            break;
          }

          case MapActionTypes.MapLoaded: {
            // Handle "MapLoaded" event here
            break;
          }

          case MapActionTypes.MarkerClick: {
            // Handle "MarkerClick" event here
            break;
          }

          case MapActionTypes.MarkerUpdated: {
            // Handle "MarkerUpdated" event here
            break;
          }

          case MapActionTypes.SetDeleteLocationIndex: {
            // Handle "SetDeleteLocationIndex" event here
            break;
          }

          case MapActionTypes.SetEditLocationIndex: {
            // Handle "SetEditLocationIndex" event here
            break;
          }

          case MapActionTypes.MapCenterChanged: {
            // Handle "MapCenterChanged" event here
            break;
          }

          default: {
            // Unhandled Action Event
            break;
          }
        }
      }`,
    };
  }

  private _mapActionEventsSample(): Record<string, string> {
    const action = {
      type: MapActionTypes.MapLoaded,
      mapLoaded: false,
      markerClick: {
        id: '1',
        position: {
          lat: 9.4455,
          lng: 5.2255,
        },
        radius: 5,
        icon: 'icon-here',
        omitMarkerCircle: false,
      },
      markerUpdated: [
        {
          id: '1',
          position: {
            lat: 9.4455,
            lng: 5.2255,
          },
          radius: 5,
          icon: 'icon-here',
          omitMarkerCircle: false,
        },
        {
          id: '2',
          position: {
            lat: 10.4455,
            lng: 50.2255,
          },
          radius: 5,
          icon: 'icon-here',
          omitMarkerCircle: false,
        },
      ],
      mapsAlertsEvent: {
        title: 'Map alert title',
        message: 'Description about the title',
        severity: ToastrSeverity.INFO,
      },
      updatedLocations: ['Moscow', 'Chicago', 'Tokyo', 'Pune', 'New York'],
      setMapsSearch: 'Minskaya St, 6, Moskva, Russia, 121096',
      setDeleteLocationIndex: 0,
      setEditLocationIndex: 0,
      mapClick: {
        latLng: { lat: 37.7749, lng: -122.4194 },
      },
      mapCenterChanged: {
        lat: 37.7749,
        lng: -122.4194,
      },
    };
    return Object.entries(action)
      .map(([key, value]) => ({ [key]: JSON.stringify({ type: MapActionTypes[key.charAt(0).toUpperCase() + key.slice(1)], [key]: value }, null, 2) }))
      .reduce((acc, curr) => ({ ...acc, ...curr }));
  }
}
