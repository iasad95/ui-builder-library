import { CommonModule, DecimalPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormFieldType } from '../../enums/form-field-type';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { FormFieldComponent } from './form-field.component';
describe('FormFieldComponent', () => {
  let component: FormFieldComponent;
  let fixture: ComponentFixture<FormFieldComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        CommonModule,
        FormsModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatMomentDateModule,
        MatRadioModule,
        MatSelectModule,
        ReactiveFormsModule,
        SearchBarModule,
        TooltipModule,
      ],
      declarations: [FormFieldComponent],
      providers: [DecimalPipe],
    }).compileComponents();
  });
  const createComponent = (overrides?: Partial<FormFieldComponent>) => {
    fixture = TestBed.createComponent(FormFieldComponent);
    component = fixture.componentInstance;
    component.fieldName = 'testField';
    component.label = 'Test Field';
    component.formFieldControl = new FormControl();
    component.type = FormFieldType.text;
    if (overrides) {
      Object.assign(component, overrides);
    }
    fixture.detectChanges();
  };
  it('should create', () => {
    createComponent();
    expect(component).toBeTruthy();
  });
  describe('Text input', () => {
    it('should display the input', () => {
      createComponent({ type: FormFieldType.text });
      const inputElement = fixture.nativeElement.querySelector('.form-field__input');
      expect(inputElement).toBeTruthy();
    });
  });
  describe('Currency input', () => {
    it('should display the input', () => {
      createComponent({ type: FormFieldType.currency });
      expect(fixture.nativeElement.querySelector('.form-field__input-currency')).toBeTruthy();
    });
    it('should default to having a decimal precision of 2 (if decimalPosition is not specified and hideCents is false)', () => {
      createComponent({
        type: FormFieldType.currency,
        decimalPosition: null,
        hideCents: false,
        formFieldControl: new FormControl(1234.5678),
      });
      const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('.form-field__input-currency');
      expect(inputElement.value).toBe('1234.57');
    });
    it('should respect hideCents (regardless of decimalPosition)', () => {
      [0, 1, 2, 3, 4].forEach((x) => {
        createComponent({
          type: FormFieldType.currency,
          decimalPosition: x,
          hideCents: true,
          formFieldControl: new FormControl(1234.5678),
        });
        const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('.form-field__input-currency');
        expect(inputElement.value).toBe('1235');
      });
    });
    it('should load the data with the correct decimal precision (with commas)', () => {
      [
        { input: 0, expected: '1235' },
        { input: 1, expected: '1234.6' },
        { input: 2, expected: '1234.57' },
        { input: 3, expected: '1234.568' },
        { input: 4, expected: '1234.5678' },
      ].forEach((x) => {
        createComponent({
          type: FormFieldType.currency,
          decimalPosition: x.input,
          hideCents: false,
          formFieldControl: new FormControl(1234.5678),
        });
        const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('.form-field__input-currency');
        expect(inputElement.value).withContext(JSON.stringify(x)).toBe(x.expected);
      });
    });
    it('should not truncate zeroes when decimalPosition is defined', () => {
      createComponent({
        type: FormFieldType.currency,
        decimalPosition: 2,
        hideCents: false,
        formFieldControl: new FormControl(1234.5),
      });
      const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('.form-field__input-currency');
      expect(inputElement.value).toBe('1234.50');
    });
    it('should not truncate zeroes by default', () => {
      createComponent({
        type: FormFieldType.currency,
        decimalPosition: null,
        hideCents: false,
        formFieldControl: new FormControl(1234.5),
      });
      const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('.form-field__input-currency');
      expect(inputElement.value).toBe('1234.50');
    });
  });
  describe('Number input', () => {
    it('should display the input', () => {
      createComponent({ type: FormFieldType.number });
      expect(fixture.nativeElement.querySelector('.form-field__input-number')).toBeTruthy();
    });
    it('should not have a default decimalPosition', () => {
      createComponent({
        type: FormFieldType.number,
        decimalPosition: null,
        hideCents: false,
        formFieldControl: new FormControl(1234.56789),
      });
      const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('.form-field__input-number');
      expect(inputElement.value).toBe('1234.56789');
    });
    it('should trim trailing non-digit characters', () => {
      createComponent({
        type: FormFieldType.number,
        decimalPosition: null,
        hideCents: false,
        formFieldControl: new FormControl('1234.56789.'),
      });
      const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('.form-field__input-number');
      expect(inputElement.value).toBe('1234.56789');
    });
    it('should load the data with the correct decimal precision (with no commas) and ignore hideCents', () => {
      [
        { input: 0, expected: '1235' },
        { input: 1, expected: '1234.6' },
        { input: 2, expected: '1234.57' },
        { input: 3, expected: '1234.568' },
        { input: 4, expected: '1234.5678' },
      ].forEach((x) => {
        createComponent({
          type: FormFieldType.number,
          decimalPosition: x.input,
          hideCents: true,
          formFieldControl: new FormControl(1234.5678),
        });
        const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('.form-field__input-number');
        inputElement.dispatchEvent(new Event('focusout'));
        fixture.detectChanges();
        expect(inputElement.value).withContext(JSON.stringify(x)).toBe(x.expected);
      });
    });
  });
  describe('Percent input', () => {
    it('should display the input', () => {
      createComponent({ type: FormFieldType.percentage });
      expect(fixture.nativeElement.querySelector('.form-field__input-percentage')).toBeTruthy();
    });
    it('should round to the nearest hundredth by default (when decimalPosition is not provided)', () => {
      createComponent({
        type: FormFieldType.percentage,
        formFieldControl: new FormControl(1234.5678),
      });
      const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('.form-field__input-percentage');
      inputElement.dispatchEvent(new Event('focusout'));
      fixture.detectChanges();
      expect(inputElement.value).toBe('1234.57');
    });
    it('should NOT round to the nearest hundredth by default when the percentage is a whole number', () => {
      createComponent({
        type: FormFieldType.percentage,
        formFieldControl: new FormControl(1234),
      });
      const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('.form-field__input-percentage');
      inputElement.dispatchEvent(new Event('focusout'));
      fixture.detectChanges();
      expect(inputElement.value).toBe('1234');
    });
    it('should ignore hideCents', () => {
      createComponent({
        type: FormFieldType.percentage,
        hideCents: true,
        formFieldControl: new FormControl(1234.56),
      });
      const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('.form-field__input-percentage');
      inputElement.dispatchEvent(new Event('focusout'));
      fixture.detectChanges();
      expect(inputElement.value).toBe('1234.56');
    });
    it('should load the data with the correct decimal precision (with no commas) and ignore hideCents', () => {
      [
        { input: 0, expected: '1235' },
        { input: 1, expected: '1234.6' },
        { input: 2, expected: '1234.57' },
        { input: 3, expected: '1234.568' },
        { input: 4, expected: '1234.5678' },
      ].forEach((x) => {
        createComponent({
          type: FormFieldType.percentage,
          decimalPosition: x.input,
          hideCents: true,
          formFieldControl: new FormControl(1234.5678),
        });
        const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('.form-field__input-percentage');
        inputElement.dispatchEvent(new Event('focusout'));
        fixture.detectChanges();
        expect(inputElement.value).withContext(JSON.stringify(x)).toBe(x.expected);
      });
    });
  });
});
