import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationBannerDemoComponent } from './notification-banner-demo.component';

describe('NotificationBannerDemoComponent', () => {
  let component: NotificationBannerDemoComponent;
  let fixture: ComponentFixture<NotificationBannerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationBannerDemoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationBannerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
