import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSelectorDemoComponent } from './range-selector-demo.component';

describe('RangeSelectorDemoComponent', () => {
  let component: RangeSelectorDemoComponent;
  let fixture: ComponentFixture<RangeSelectorDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RangeSelectorDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RangeSelectorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
