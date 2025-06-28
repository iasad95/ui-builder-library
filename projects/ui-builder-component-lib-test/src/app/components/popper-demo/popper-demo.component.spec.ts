import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopperDemoComponent } from './popper-demo.component';

describe('PopperDemoComponent', () => {
  let component: PopperDemoComponent;
  let fixture: ComponentFixture<PopperDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopperDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PopperDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
