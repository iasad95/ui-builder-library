import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashedCheckboxTestComponent } from './dashed-checkbox-test.component';

describe('DashedCheckboxTestComponent', () => {
  let component: DashedCheckboxTestComponent;
  let fixture: ComponentFixture<DashedCheckboxTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashedCheckboxTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashedCheckboxTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
