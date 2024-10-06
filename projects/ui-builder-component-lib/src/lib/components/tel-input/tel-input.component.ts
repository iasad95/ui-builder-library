import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    QueryList,
    Self,
    SimpleChanges,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NgControl, NgModel } from '@angular/forms';
import { PhoneNumber, PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
import { setTheme } from 'ngx-bootstrap/utils';
import { provideNgxMask } from 'ngx-mask';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { AppListbox, AppOption } from '../../directives/list-box-element/list-box';
import { CountryISO } from '../../enums/country-iso.enum';
import { PhoneNumberFormat as CustomPhoneNumberFormat } from '../../enums/phone-number-format.enum';
import { SearchCountryField } from '../../enums/search-country-field.enum';
import { ChangeData } from '../../model/change-data';
import { Country } from '../../model/country.model';
import { AuthIcons } from '../../types/auth-icons';
import { InputFieldComponent } from '../input-field/input-field.component';
import { CountryCode } from './data/country-code';
import { phoneNumberValidator } from './tel-input.validator';
@Component({
  selector: 'lib-tel-input',
  templateUrl: './tel-input.component.html',
  styleUrls: ['./tel-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CountryCode,
    {
      provide: NG_VALIDATORS,
      useValue: phoneNumberValidator,
      multi: true,
    },
    provideNgxMask(),
  ],
})
export class TelInputComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {
  @ViewChild('inputElement') inputElement: ElementRef<HTMLInputElement>;
  @ViewChild('dropDownElementRef')
  dropDownElementRef: ElementRef<HTMLDivElement>;
  @ViewChild('countryList') countryList: ElementRef<HTMLUListElement>;
  @ViewChild('inputField') focusableElRef: InputFieldComponent;
  @ViewChild('ngModelRef') phoneNumFieldNgModelRef: NgModel;
  @ViewChild(AppListbox) listbox: AppListbox;
  @ViewChildren(AppOption) optionsList: QueryList<AppOption<Country>>;
  @Input() value: string | undefined = '';
  @Input() enablePlaceholder = true;
  @Input() maskPhoneNumber = true;
  @Input() eagerMask = true;
  @Input() customPlaceholder: string;
  @Input() numberFormat: CustomPhoneNumberFormat = CustomPhoneNumberFormat.International;
  @Input() cssClass = 'form-control';
  @Input() onlyCountries: Array<string> = [];
  @Input() searchCountryFlag = false;
  @Input() searchCountryField: SearchCountryField[] = [SearchCountryField.All];
  @Input() searchCountryPlaceholder = 'Search Country';
  @Input() maxLength: number;
  @Input() selectFirstCountry = true;
  @Input() selectedCountryISO: CountryISO = CountryISO.UnitedStates;
  @Input() phoneValidation = true;
  @Input() inputId = 'phone';
  @Input() separateDialCode = false;
  @Input() showDropDownArrow = false;
  @Input() icons: AuthIcons;
  @Output() readonly countryChange = new EventEmitter<Country>();
  public selectedCountry: Country = {
    areaCodes: undefined,
    dialCode: '',
    htmlId: '',
    flagClass: '',
    iso2: '',
    name: '',
    placeHolder: '',
    priority: 0,
  };
  public customPatterns = { A: { pattern: new RegExp(`[a-zA-Z ]`) } };
  public phoneNumber: ChangeData | string | undefined = '';
  public enableAutoCountrySelect = false;
  public phoneMask: string = '';
  public countryCode: string = '';
  public allCountries: Array<Country> = [];
  public filteredCountries: Array<Country> = [];
  public phoneUtil: PhoneNumberUtil = PhoneNumberUtil.getInstance();
  public disabled = false;
  public countrySearchText = '';
  public separateDialCodeClass: string;
  public autoClose = false;
  public clearTextOnSelect = true;
  public freeInputMode = false;
  public modelChangeEvent$ = new Subject<void>();
  private destroyRef$ = new Subject<void>();
  onTouched = () => {};
  onChange = (_: ChangeData) => {};
  constructor(
    private countryCodeData: CountryCode,
    private cdr: ChangeDetectorRef,
    @Self() public ngControl: NgControl,
  ) {
    ngControl.valueAccessor = this;
    setTheme('bs4');
    this.modelChangeEvent$.pipe(distinctUntilChanged(), takeUntil(this.destroyRef$)).subscribe((val) => {
      this.onPhoneNumberChange();
      this.focusableElRef?.inputRef?.click();
    });
  }
  get isValidNumber(): boolean {
    try {
      const phoneNumber = this.extractPhoneValue();
      return this.phoneUtil.isValidNumberForRegion(this.phoneUtil.parse(phoneNumber, this.selectedCountry.iso2), this.selectedCountry.iso2.toUpperCase());
    } catch (e) {
      return false;
    }
  }
  ngOnInit(): void {
    this.init();
  }
  ngOnChanges(changes: SimpleChanges): void {
    const selectedISO = changes['selectedCountryISO'];
    if (this.allCountries && selectedISO && selectedISO.currentValue !== selectedISO.previousValue) {
      this.updateSelectedCountry(false);
    }
    this.checkSeparateDialCodeStyle();
  }
  ngOnDestroy(): void {
    this.destroyRef$.next();
    this.destroyRef$.complete();
  }
  public init(): void {
    this.fetchCountryData();
    if (this.onlyCountries.length) {
      this.allCountries = this.allCountries.filter((c) => this.onlyCountries.includes(c.iso2));
    }
    this.updateSelectedCountry(true);
    this.checkSeparateDialCodeStyle();
  }
  public onDropDownShow(): void {
    this.autoClose = false;
    this.focusInputElement();
    this.onResize(this.focusableElRef?.inputRef.parentElement.parentElement.getBoundingClientRect().width);
    setTimeout(() => {
      for (const countryOption of this.optionsList) {
        if (countryOption.value.iso2 === this.selectedCountry.iso2) {
          this.autoClose = true;
          countryOption.element.scrollIntoView();
          countryOption.element.click();
        }
      }
    }, 100);
  }
  public toggleFreeInputMode(): void {
    this.freeInputMode = !this.freeInputMode;
    this.cdr.detectChanges();
    if (!this.freeInputMode) {
      setTimeout(() => {
        this.createPhoneMask();
        this.phoneNumFieldNgModelRef.control.markAsTouched();
      }, 100);
    }
    this.phoneNumber = '';
    this.onPhoneNumberChange();
  }
  private createPhoneMask(): void {
    !this.freeInputMode &&
      Inputmask({
        mask: this.phoneMask,
        greedy: true,
        onBeforePaste: (pastedValue: string, opts) => {
          const isUSPhone =
            (this.selectedCountry?.iso2.toLowerCase() === 'us' || this.selectedCountry?.iso2.toLowerCase() === 'ca') &&
            pastedValue?.length &&
            pastedValue.replace(/[^0-9]/g, '')?.charAt(0) === '1';
          return isUSPhone ? pastedValue?.replace(/[^0-9]/g, '')?.substring(1) : pastedValue;
        },
      }).mask(this.focusableElRef.inputRef);
  }
  public onListFocus(): void {
    setTimeout(() => {
      const activeCountry = this.optionsList.find((c) => c.isActive() || c.isSelected());
      if (!activeCountry) {
        this.autoClose = false;
        setTimeout(() => {
          this.listbox.focus();
          const countryItem = this.optionsList.first;
          countryItem.select();
          this.listbox.select(countryItem);
          this.listbox._setActiveOption(countryItem);
          countryItem.setActiveStyles();
          countryItem.focus();
          setTimeout(() => {
            countryItem.element.scrollIntoView();
            this.autoClose = true;
          });
        });
      } else {
        this.listbox.focus();
      }
    });
  }
  public setSelectedCountry(country: Country): void {
    this.selectedCountry = country;
    this.countryChange.emit(country);
  }
  public searchCountry(): void {
    if (!this.countrySearchText) {
      this.filteredCountries = [...this.allCountries];
      return;
    }
    const countrySearchTextLower = this.countrySearchText.toLowerCase();
    this.filteredCountries = this.allCountries.filter((country) => {
      return country.name.toLowerCase().split(' ').join('').startsWith(countrySearchTextLower);
    });
    this.setActiveSelectedCountry();
    this.checkSeparateDialCodeStyle();
    this.cdr.detectChanges();
  }
  private setActiveSelectedCountry(): void {
    setTimeout(() => {
      const selectedItem = this.optionsList.find((item) => item.value?.iso2?.toLowerCase() === this.selectedCountry?.iso2?.toLowerCase());
      if (selectedItem) {
        selectedItem.select();
        this.listbox.select(selectedItem);
        this.listbox._setActiveOption(selectedItem);
        selectedItem.setActiveStyles();
        this.inputElement?.nativeElement?.focus();
      } else {
        this.countryList.nativeElement.scrollTop = 0;
      }
    });
  }
  public onPhoneNumberChange(changeFromModel: boolean = false): void {
    let countryCode: string | undefined;
    if (this.phoneNumber && typeof this.phoneNumber === 'object') {
      const numberObj: ChangeData = this.phoneNumber;
      this.phoneNumber = numberObj.number;
      countryCode = numberObj.countryCode;
      if (!!countryCode && countryCode !== this.selectedCountry?.iso2) {
        const selectedCountry = this.allCountries.find((c) => c.iso2.toLowerCase() === countryCode?.toLowerCase());
        if (selectedCountry) {
          this.onCountrySelect(selectedCountry, null, changeFromModel);
        }
      } else {
        this.freeInputMode = true;
        this.phoneNumber = numberObj?.number ?? numberObj?.internationalNumber;
      }
    }
    this.value = this.extractPhoneValue();
    countryCode = countryCode || this.selectedCountry.iso2;
    const number = this.getParsedNumber(this.phoneNumber as string, countryCode);
    if (this.enableAutoCountrySelect) {
      countryCode = number && number.getCountryCode() ? this.getCountryIsoCode(number.getCountryCode(), number) : this.selectedCountry.iso2;
      if (countryCode && countryCode !== this.selectedCountry.iso2) {
        const newCountry = this.allCountries
          .sort((a, b) => {
            return a.priority - b.priority;
          })
          .find((c) => c.iso2 === countryCode);
        if (newCountry) {
          this.selectedCountry = newCountry;
        }
      }
    }
    countryCode = (countryCode ? countryCode : this.selectedCountry.iso2).toLowerCase();
    this.checkSeparateDialCodeStyle();
    if (!this.value) {
      if (!changeFromModel) {
        this.onChange(null);
      }
    } else if (this.freeInputMode && !changeFromModel) {
      this.onChange({
        internationalNumber: `+${this.phoneNumber}`,
      });
    } else {
      const intlNo = number ? this.phoneUtil.format(number, PhoneNumberFormat.INTERNATIONAL) : '';
      if (this.separateDialCode && intlNo) {
        this.value = this.removeDialCode(intlNo);
      }
      if (!changeFromModel) {
        this.onChange({
          number: this.value,
          internationalNumber: intlNo,
          nationalNumber: number ? this.phoneUtil.format(number, PhoneNumberFormat.NATIONAL) : '',
          e164Number: number ? this.phoneUtil.format(number, PhoneNumberFormat.E164) : '',
          countryCode: countryCode.toUpperCase(),
          dialCode: '+' + this.selectedCountry.dialCode,
        });
      }
    }
  }
  private extractPhoneValue(): string {
    return this.isString(this.phoneNumber) ? this.phoneNumber : this.phoneNumber?.internationalNumber;
  }
  public onCountrySelect(country: Country, el: Pick<HTMLInputElement, 'focus'>, changeFromModel: boolean = false, isClickUserGenerated = true): void {
    this.setSelectedCountry(country);
    this.checkSeparateDialCodeStyle();
    if (this.phoneNumber && this.isString(this.phoneNumber) && this.phoneNumber.length > 0) {
      this.value = this.extractPhoneValue();
      const number = this.getParsedNumber(this.extractPhoneValue(), this.selectedCountry.iso2);
      const intlNo = number ? this.phoneUtil.format(number, PhoneNumberFormat.INTERNATIONAL) : '';
      if (this.separateDialCode && intlNo) {
        this.value = this.removeDialCode(intlNo);
      }
      if (!changeFromModel && isClickUserGenerated) {
        this.onChange({
          number: this.value,
          internationalNumber: intlNo,
          nationalNumber: number ? this.phoneUtil.format(number, PhoneNumberFormat.NATIONAL) : '',
          e164Number: number ? this.phoneUtil.format(number, PhoneNumberFormat.E164) : '',
          countryCode: this.selectedCountry.iso2.toUpperCase(),
          dialCode: '+' + this.selectedCountry.dialCode,
        });
      }
    } else {
      if (!changeFromModel && isClickUserGenerated) {
        this.onChange(null);
      }
    }
    const countryMasks = this.countryCodeData.getPhoneMask(`${this.selectedCountry.iso2}`);
    this.countryCode = this.countryCodeData.getCountryCode(`${this.selectedCountry.iso2}`);
    this.phoneMask = this.isArray(countryMasks) ? countryMasks[0] : countryMasks;
    if (!this.phoneNumber) {
      this.phoneNumber = this.extractMaskInitialValues(this.phoneMask);
    }
    this.phoneMask = this.generalizeRestrictedMask(this.phoneMask);
    this.phoneMask = this.phoneMask.replace(/0/g, '9');
    setTimeout(() => this.createPhoneMask());
    if (!this.clearTextOnSelect) {
      this.clearTextOnSelect = true;
    } else {
      this.countrySearchText = '';
      this.searchCountry();
    }
    setTimeout(() => this.cdr.markForCheck());
    el?.focus();
  }
  public onInputKeyPress(event: KeyboardEvent): void {
    if (this.isValidInput(event)) {
      event.preventDefault();
    }
  }
  private isValidInput(event: KeyboardEvent): boolean {
    const allowedChars = /[0-9]/;
    const allowedCtrlChars = /[axcv]/;
    const allowedOtherKeys = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'Home', 'End', 'Insert', 'Delete', 'Backspace'];
    return !allowedChars.test(event.key) && !(event.ctrlKey && allowedCtrlChars.test(event.key)) && !allowedOtherKeys.includes(event.key);
  }
  public identify(index: number, item: Country): string {
    return item.htmlId;
  }
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  public isString(val: ChangeData | string): val is string {
    return typeof val === 'string';
  }
  public isChangeDataObj(val: ChangeData | string): val is ChangeData {
    return typeof val === 'object' && !!val?.internationalNumber;
  }
  public writeValue(obj: string | ChangeData): void {
    if (obj === undefined || obj === null) {
      this.phoneNumber = '';
      this.cdr.markForCheck();
      this.init();
    }
    if (typeof obj === 'string') {
      obj = this.convertStringToPhoneNumber(obj);
    }
    if (obj === null) {
      return;
    }
    this.phoneNumber = obj;
    setTimeout(() => {
      this.onPhoneNumberChange(true);
      this.cdr.markForCheck();
    }, 1);
  }
  private convertStringToPhoneNumber(obj: string): Partial<ChangeData> {
    try {
      const parsedPhone = this.phoneUtil.parse(obj);
      return {
        number: parsedPhone ? this.phoneUtil.getNationalSignificantNumber(parsedPhone) : '',
        internationalNumber: parsedPhone ? this.phoneUtil.format(parsedPhone, PhoneNumberFormat.INTERNATIONAL) : '',
        nationalNumber: parsedPhone ? this.phoneUtil.format(parsedPhone, PhoneNumberFormat.NATIONAL) : '',
        e164Number: parsedPhone ? this.phoneUtil.format(parsedPhone, PhoneNumberFormat.E164) : '',
        countryCode: parsedPhone ? this.phoneUtil.getRegionCodeForNumber(parsedPhone) : '',
        dialCode: '+' + parsedPhone.getCountryCode(),
      };
    } catch (e) {
      if (this.isValidFreeInput(obj)) {
        return {
          internationalNumber: obj.replace('+', ''),
        };
      }
      return null;
    }
  }
  public isValidFreeInput(inp: string): boolean {
    return /(^[+][0-9]*)/.test(inp);
  }
  public resolvePlaceholder(): string {
    let placeholder = '';
    if (this.customPlaceholder) {
      placeholder = this.customPlaceholder;
    } else if (this.selectedCountry.placeHolder) {
      placeholder = this.selectedCountry.placeHolder;
      if (this.separateDialCode) {
        placeholder = this.removeDialCode(placeholder);
      }
    }
    return placeholder;
  }
  public focusInputElement(): void {
    setTimeout(() => {
      this.inputElement?.nativeElement?.focus();
    }, 200);
  }
  public focusPhoneField(): void {
    setTimeout(() => {
      this.focusableElRef?.inputRef?.focus();
    }, 100);
  }
  public onResize(event: number): void {
    setTimeout(() => {
      this.dropDownElementRef?.nativeElement?.style.setProperty('--container-width', `${event}px`);
      if (this.dropDownElementRef?.nativeElement) {
        this.dropDownElementRef.nativeElement.classList.add('force-show');
      }
    });
  }
  public focusSelectedCountry(): void {
    setTimeout(() => {
      const selectedCountry = this.countryList?.nativeElement?.querySelector('.iti__country.app-option-active');
      selectedCountry?.scrollIntoView();
    });
  }
  private getParsedNumber(phoneNumber: string, countryCode: string): PhoneNumber {
    let number: PhoneNumber;
    try {
      number = this.phoneUtil.parse(phoneNumber, countryCode.toUpperCase());
    } catch (e) {
      console.debug(e);
    }
    return number;
  }
  private generalizeRestrictedMask(mask: string): string {
    return mask.replace(/[123456789]/g, '0');
  }
  private extractMaskInitialValues(mask: string): string {
    return (mask.match(/[123456789]/g) ?? []).join('');
  }
  private checkSeparateDialCodeStyle() {
    if (this.separateDialCode && this.selectedCountry) {
      const cntryCd = this.selectedCountry.dialCode;
      this.separateDialCodeClass = 'separate-dial-code iti-sdc-' + (cntryCd.length + 1);
    } else {
      this.separateDialCodeClass = '';
    }
  }
  private removeDialCode(phoneNumber: string): string {
    const number = this.getParsedNumber(phoneNumber, this.selectedCountry.iso2);
    phoneNumber = this.phoneUtil.format(number, PhoneNumberFormat[this.numberFormat]);
    if (phoneNumber.startsWith('+') && this.separateDialCode) {
      phoneNumber = phoneNumber.substr(phoneNumber.indexOf(' ') + 1);
    }
    return phoneNumber;
  }
  private getCountryIsoCode(countryCode: number, number: PhoneNumber): string | undefined {
    const rawNumber = number['values_']['2'].toString();
    const countries = this.allCountries.filter((c) => c.dialCode === countryCode.toString());
    const mainCountry = countries.find((c) => c.areaCodes === undefined);
    const secondaryCountries = countries.filter((c) => c.areaCodes !== undefined);
    let matchedCountry = mainCountry ? mainCountry.iso2 : undefined;
    secondaryCountries.forEach((country) => {
      country.areaCodes.forEach((areaCode) => {
        if (rawNumber.startsWith(areaCode)) {
          matchedCountry = country.iso2;
        }
      });
    });
    return matchedCountry;
  }
  protected getPhoneNumberPlaceHolder(countryCode: string): string {
    try {
      return this.phoneUtil.format(this.phoneUtil.getExampleNumber(countryCode), PhoneNumberFormat[this.numberFormat]);
    } catch (e) {
      return e;
    }
  }
  protected fetchCountryData(): void {
    this.allCountries = [];
    this.countryCodeData.allCountries.forEach((c) => {
      const country: Country = {
        name: c[0].toString(),
        iso2: c[1].toString(),
        dialCode: c[2].toString(),
        priority: +c[3] || 0,
        areaCodes: (c[4] as string[]) || undefined,
        htmlId: `iti-0__item-${c[1].toString()}`,
        flagClass: `iti__${c[1].toString().toLocaleLowerCase()}`,
        placeHolder: '',
      };
      if (this.enablePlaceholder) {
        country.placeHolder = this.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
      }
      this.allCountries.push(country);
    });
    this.filteredCountries = JSON.parse(JSON.stringify(this.allCountries));
  }
  private updateSelectedCountry(changeFromModel: boolean): void {
    if (this.selectedCountryISO) {
      this.selectedCountry = this.allCountries.find((c) => {
        return c.iso2.toLowerCase() === this.selectedCountryISO.toLowerCase();
      });
      if (this.selectedCountry) {
        const countryMasks = this.countryCodeData.getPhoneMask(`${this.selectedCountry.iso2}`);
        this.phoneMask = this.isArray(countryMasks) ? countryMasks[0] : countryMasks;
        this.phoneMask = this.phoneMask.replace(/0/g, '9');
        setTimeout(() => this.createPhoneMask());
        this.countryCode = this.countryCodeData.getCountryCode(`${this.selectedCountry.iso2}`);
        if (this.phoneNumber) {
          this.onPhoneNumberChange();
        } else {
          if (!changeFromModel) {
            this.onChange(null);
          }
        }
      }
    }
  }
  private isArray(arg: string | string[]): arg is string[] {
    return Array.isArray(arg);
  }
}
