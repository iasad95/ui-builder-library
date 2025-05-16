import { Component } from '@angular/core';
import { NotificationBannerType } from 'ui-builder-component-lib';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-notification-banner-demo',
  templateUrl: './notification-banner-demo.component.html',
  styleUrls: ['./notification-banner-demo.component.scss'],
})
export class NotificationBannerDemoComponent {
  public codeExample: string = `<lib-notification-banner [notification$]="notification$"></lib-notification-banner>`;
  private notificationSubject$: Subject<{ message: string; type: NotificationBannerType }> = new Subject();
  public notification$: Observable<{ message: string; type: string }> = this.notificationSubject$.asObservable();

  handleSuccessClick() {
    this.notificationSubject$.next({ message: 'Success!!!!', type: NotificationBannerType.Success });
  }

  handleWarnClick() {
    this.notificationSubject$.next({ message: 'Warn, scary stuff', type: NotificationBannerType.Warn });
  }

  handleErrorClick() {
    this.notificationSubject$.next({ message: 'Error. Big fail.', type: NotificationBannerType.Error });
  }
}
