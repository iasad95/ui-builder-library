import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IConfig } from 'ngx-mask';
import { first } from 'rxjs/operators';
import { LocationAutocompleteConfig, LocationCoordinates, LocationModel } from '../../model/location.model';
import { MapService } from '../map/map.service';
@Component({
  selector: 'lib-input-field,[lib-input-field]',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFieldComponent<T = string> implements ControlValueAccessor, AfterViewInit {
  @Input() name: string;
  @Input() autocomplete: string;
  @Input() label: string;
  @Input() placeholder = ' ';
  @Input() type: string;
  @Input() readonly = false;
  @Input() focus: boolean;
  @Input() enableGoogleAddress: boolean;
  @Input() locationAutocompleteConfig: LocationAutocompleteConfig;
  @Input() defaultLocation: LocationCoordinates;
  @Input() mask: string;
  @Input() prefix: string = '';
  @Input() suffix: string = '';
  @Input() maxLength: string = '20';
  @Input() value: string | T;
  @Input() address: string;
  @Input() textarea: boolean;
  @Input() resize: boolean;
  @Input() patterns: IConfig['patterns'];
  @Input() trimWhiteSpace: boolean = true;
  @Input('disabled') set setDisabled(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
  @Output() mapError: EventEmitter<void> = new EventEmitter<void>();
  @Output() locationChange: EventEmitter<LocationModel> = new EventEmitter();
  @Output() keyDown: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();
  @Output() onBlur: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('inputFieldRef') inputFieldRef: ElementRef;
  public apiLoaded: boolean = false;
  public placeSelected: boolean;
  public disabled: boolean;
  constructor(
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef,
    private mapService: MapService,
  ) {}
  public get inputRef(): HTMLInputElement {
    return this.inputFieldRef.nativeElement;
  }
  ngAfterViewInit(): void {
    if (this.enableGoogleAddress) {
      this.mapService.loadingObservable.pipe(first()).subscribe({
        next: () => this.initAutocomplete(),
        error: () => this.mapError.emit(),
      });
    }
    if (this.focus && this.inputFieldRef) {
      this.inputFieldRef.nativeElement.focus();
    }
  }
  public onChange(value: any): void {}
  public onTouched(touched: boolean): void {}
  writeValue(value: string | T): void {
    this.value = value;
    this.cdr.detectChanges();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  public touched(touched: boolean): void {
    this.onTouched(touched);
  }
  public focused(): void {
    this.placeSelected = false;
  }
  public initAutocomplete(): void {
    const autocomplete = new google.maps.places.Autocomplete(this.inputFieldRef.nativeElement, this.locationAutocompleteConfig);
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        this.onPlaceChange(autocomplete.getPlace());
      });
    });
    if (this.defaultLocation) {
      const geocoder = new google.maps.Geocoder();
      const latLng = new google.maps.LatLng(this.defaultLocation.lat, this.defaultLocation.lng);
      geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === 'OK' && results && results?.length > 0) {
          results.forEach((result) => {
            if (result.types && (result.types.indexOf('country') > -1 || result.types.indexOf('political') > -1)) {
              this.inputFieldRef.nativeElement.value = result.formatted_address;
            }
          });
        }
      });
    }
  }
  private onPlaceChange(place: google.maps.places.PlaceResult): void {
    this.locationChange.emit({
      coordinates: [place.geometry.location.lng(), place.geometry.location.lat()],
      address: place.formatted_address,
    });
    this.value = place.formatted_address;
    this.onChange(place.formatted_address);
    this.writeValue(place.formatted_address);
    this.placeSelected = true;
    this.touched(true);
  }
  public detectAutofill(event: any): void {
    this.cdr.detectChanges();
  }
  public onKeyDown(event: KeyboardEvent): void {
    if (event.code === 'Space' && this.trimWhiteSpace) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.keyDown.emit(event);
  }
}
