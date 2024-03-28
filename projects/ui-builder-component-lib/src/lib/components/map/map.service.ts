import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { Observable, Observer, ReplaySubject, from, of } from 'rxjs';
import { catchError, concatMap, first, map, toArray } from 'rxjs/operators';
import { MapMarkerModel } from '../../model/map.marker';
import { PositionModel } from '../../model/position.model';
import { MapAddressType } from './map-address.type';
import { MAP_CIRCLE_RADIUS_KMS } from './map.config';
import { PlaceQuery } from './place-query-parameters.model';
import { Place } from './place.model';
@Injectable({
  providedIn: 'root',
})
export class MapService {
  public apiLoaded = false;
  public loadingObservable: ReplaySubject<boolean>;
  private googleMapsKey: string;
  private googleMapsURL: string;
  private isApiLoading: boolean = false;
  constructor() {
    this.loadingObservable = new ReplaySubject(1);
  }
  public setGoogleMapsKey(key: string): void {
    this.googleMapsKey = key;
  }
  public getGoogleMapsKey(): string {
    return this.googleMapsKey;
  }
  public setGoogleMapsURL(url: string): void {
    this.googleMapsURL = url;
  }
  public getGoogleMapsURL(): string {
    return this.googleMapsURL;
  }
  public loadGoogleApis(): Observable<boolean> {
    if (this.apiLoaded) {
      return of(true);
    }
    if (!this.isApiLoading) {
      this.isApiLoading = true;
      const loader = new Loader({
        apiKey: this.googleMapsKey,
        libraries: ['places', 'visualization'],
      });
      from(loader.importLibrary('places'))
        .pipe(
          first(),
          map(() => true),
          catchError(() => of(false)),
        )
        .subscribe({
          next: () => {
            this.apiLoaded = true;
            this.isApiLoading = false;
            this.loadingObservable.next(true);
            this.loadingObservable.complete();
          },
          error: () => {
            this.isApiLoading = false;
            this.loadingObservable.error('Google Maps API script failed to load');
          },
        });
    }
    return this.loadingObservable.asObservable();
  }
  public buildMapMarker(
    id: string,
    icon: string,
    position: PositionModel,
    radius: number = MAP_CIRCLE_RADIUS_KMS,
    customClass: string = '#custom_marker',
    iconWidth: number = 70,
    iconHeight: number = 70,
    omitMarkerCircle: boolean = false,
    anchor: google.maps.Point = null,
  ): MapMarkerModel {
    return {
      id,
      position,
      radius,
      omitMarkerCircle,
      icon: {
        url: icon + customClass,
        size: new google.maps.Size(iconWidth, iconHeight),
        scaledSize: new google.maps.Size(iconWidth, iconHeight),
        anchor,
      },
    };
  }
  public getAddressObject(location: google.maps.LatLngLiteral): Observable<MapAddressType> {
    return new Observable<MapAddressType>((observer) => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location }, (results, status) => {
        if (status === 'OK') {
          const addressComponents = results[0]?.address_components;
          let streetNumber: string | undefined;
          let streetName: string | undefined;
          let town: string | undefined;
          let city: string | undefined;
          let state: string | undefined;
          let country: string | undefined;
          if (addressComponents) {
            for (const component of addressComponents) {
              if (component.types.includes('street_number')) {
                streetNumber = component.long_name;
              } else if (component.types.includes('route')) {
                streetName = component.long_name;
              } else if (component.types.includes('sublocality')) {
                town = component.long_name;
              } else if (component.types.includes('locality')) {
                city = component.long_name;
              } else if (component.types.includes('administrative_area_level_1')) {
                state = component.long_name;
              } else if (component.types.includes('country')) {
                country = component.long_name;
              }
            }
          }
          const mapAddressObject: MapAddressType = {
            objectAdress: {
              streetName,
              streetNumber,
              town,
              city,
              state,
              country,
            },
            formattedAddress: results[0]?.formatted_address,
          };
          observer.next(mapAddressObject);
          observer.complete();
        } else if (status === 'OVER_QUERY_LIMIT') {
          observer.error(status);
        } else {
          observer.error(`Geocoding failed: ${status}`);
        }
      });
    });
  }
  public getMapAddressString(location: google.maps.LatLngLiteral): Observable<string> {
    return this.getAddressObject(location).pipe(
      map(({ objectAdress: { streetName, streetNumber, town, city, state, country }, formattedAddress }: MapAddressType) => {
        const address: string = `${streetNumber ? streetNumber + ', ' : ''}${streetName ? streetName + ', ' : ''} ${streetName ? town + ', ' : ''} ${city ? city + ', ' : ''} ${
          state ? state + ', ' : ''
        } ${country ? country : ''}`;
        return address.match(/[a-zA-Z0-9]+/g) ? address : formattedAddress;
      }),
    );
  }
  public getBatchAddresses(locations: google.maps.LatLngLiteral[]): Observable<string[]> {
    const geocoder = new google.maps.Geocoder();
    return from(locations).pipe(
      concatMap((location) =>
        new Observable<string>((observer) => {
          geocoder.geocode({ location }, (results, status) => {
            if (status === 'OK') {
              const addressComponents = results[0]?.address_components;
              const streetNumber = addressComponents?.find((component) => component.types.includes('street_number'))?.long_name;
              const streetName = addressComponents?.find((component) => component.types.includes('route'))?.long_name;
              const city = addressComponents?.find((component) => component.types.includes('locality'))?.long_name;
              const state = addressComponents?.find((component) => component.types.includes('administrative_area_level_1'))?.long_name;
              const country = addressComponents?.find((component) => component.types.includes('country'))?.long_name;
              const address: string = `${streetNumber ? streetNumber + ', ' : ''}${streetName ? streetName + ', ' : ''} ${city ? city + ', ' : ''} ${state ? state + ', ' : ''} ${
                country ? country : ''
              }`;
              observer.next(address.match(/[a-zA-Z0-9]+/g) ? address : results[0]?.formatted_address);
              observer.complete();
            } else if (status === 'OVER_QUERY_LIMIT') {
              observer.error(status);
            } else {
              observer.error(`Geocoding failed for location: ${location}, status: ${status}`);
            }
          });
        }).pipe(catchError((error) => of(error))),
      ),
      toArray(),
    );
  }
  public getCoordinatesFromAddress(address: string): Observable<{ lat: number; lng: number }> {
    const geocoder = new google.maps.Geocoder();
    return new Observable((observer) => {
      geocoder.geocode({ address }, (response, status) => {
        if (status === 'OK' && response[0]) {
          const coordinates = response[0].geometry.location;
          observer.next({ lat: coordinates.lat(), lng: coordinates.lng() });
          observer.complete();
        } else if (status === 'OVER_QUERY_LIMIT') {
          observer.error(status);
        } else {
          observer.next({ lat: 0, lng: 0 });
          observer.complete();
        }
      });
    });
  }
  public findNearbyPlaces(query: PlaceQuery): Observable<Place[]> {
    return new Observable((observer: Observer<Place[]>) => {
      const location = new google.maps.LatLng(query.location.lat, query.location.lng);
      const request: google.maps.places.PlaceSearchRequest = {
        location: location,
        radius: query.radius,
        type: query.type,
      };
      const mapObject = new google.maps.Map(document.createElement('div'));
      const service = new google.maps.places.PlacesService(mapObject);
      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          const places = results as Place[];
          places.forEach((place) => {
            place.url = `${this.googleMapsURL}&query=Google&query_place_id=${place.place_id}`;
          });
          observer.next(places);
          observer.complete();
        } else {
          observer.error(status);
        }
      });
    });
  }
}
