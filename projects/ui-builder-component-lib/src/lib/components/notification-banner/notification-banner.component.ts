import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { NotificationBannerType } from '../../enums/notification-banner-type';
@Component({
  selector: 'lib-notification-banner',
  templateUrl: './notification-banner.component.html',
  styleUrls: ['./notification-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationBannerComponent implements OnInit, OnDestroy {
  public display = false;
  private timeout = null;
  public message: string;
  public bannerType: string;
  private componentDestroyed$: Subject<void> = new Subject();
  @Input() notification$: Observable<{
    message: string;
    type: NotificationBannerType;
  }>;
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.notification$.pipe(takeUntil(this.componentDestroyed$)).subscribe((res) => {
      this.message = res.message;
      this.bannerType = res.type;
      this.setTimedDisplay();
    });
  }
  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
  private setTimedDisplay(): void {
    this.display = true;
    this.changeDetectorRef.detectChanges();
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.display = false;
      this.changeDetectorRef.detectChanges();
    }, 5000);
  }
  public hide(): void {
    this.display = false;
    this.changeDetectorRef.detectChanges();
  }
}
