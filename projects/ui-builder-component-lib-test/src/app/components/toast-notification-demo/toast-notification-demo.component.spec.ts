import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastNotificationDemoComponent } from './toast-notification-demo.component';

describe('ToastNotificationDemoComponent', () => {
  let component: ToastNotificationDemoComponent;
  let fixture: ComponentFixture<ToastNotificationDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastNotificationDemoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastNotificationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
