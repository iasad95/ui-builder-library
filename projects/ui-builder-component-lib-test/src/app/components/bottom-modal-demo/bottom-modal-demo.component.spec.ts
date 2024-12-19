import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomModalDemoComponent } from './bottom-modal-demo.component';

describe('BottomModalDemoComponent', () => {
  let component: BottomModalDemoComponent;
  let fixture: ComponentFixture<BottomModalDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BottomModalDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BottomModalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
