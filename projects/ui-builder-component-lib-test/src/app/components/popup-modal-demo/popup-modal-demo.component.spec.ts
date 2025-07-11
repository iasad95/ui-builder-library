import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupModalDemoComponent } from './popup-modal-demo.component';

describe('PopupModalDemoComponent', () => {
  let component: PopupModalDemoComponent;
  let fixture: ComponentFixture<PopupModalDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupModalDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PopupModalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
