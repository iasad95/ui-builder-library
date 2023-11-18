import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { DateFilterComponent } from './date-filter.component';
describe('DateFilterComponent', () => {
  let component: DateFilterComponent;
  let fixture: ComponentFixture<DateFilterComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateFilterComponent],
      imports: [CommonModule, NoopAnimationsModule, ReactiveFormsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatMomentDateModule],
      providers: [
        {
          provide: MAT_DATE_FORMATS,
          useValue: {
            display: { dateInput: '' },
          },
        },
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(DateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
