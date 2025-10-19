import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ui-builder-component-lib';

@Component({
  selector: 'app-tel-input-demo',
  templateUrl: './tel-input-demo.component.html',
  styleUrls: ['./tel-input-demo.component.scss'],
})
export class TelInputDemoComponent {
  public separateDialCode = false;
  public phoneNumber = '';
  public isJson = false; // TODO: update the demo to include isJson
  public SearchCountryField = SearchCountryField;
  public CountryISO = CountryISO;
  public PhoneNumberFormat = PhoneNumberFormat;
  public preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  public phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required]),
  });
  public codeExample: string = `
  <lib-tel-input
        [cssClass]="'custom'"
        [enablePlaceholder]="true"
        [searchCountryFlag]="false"
        [searchCountryField]="searchCountryFieldValue"
        [selectFirstCountry]="false"
        [showDropDownArrow]="true"
        [maxLength]="15"
        [phoneValidation]="true"
        [separateDialCode]="separateDialCode"
        [numberFormat]="PhoneNumberFormat.National"
        formControlName="phone"
      >
      </lib-tel-input>`;

  public searchCountryFieldValue = [SearchCountryField.Iso2, SearchCountryField.Name];

  writeString(): void {
    if (!this.isJson) {
      this.phoneForm.controls.phone.setValue(this.phoneNumber);
    } else {
      try {
        this.phoneForm.controls.phone.setValue(JSON.parse(this.phoneNumber));
      } catch (e) {
        alert('invalidJson');
      }
    }
  }
}
