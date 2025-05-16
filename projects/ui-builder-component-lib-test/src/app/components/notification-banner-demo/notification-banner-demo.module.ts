import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NotificationBannerModule } from 'ui-builder-component-lib';
import { NotificationBannerDemoComponent } from './notification-banner-demo.component';

const routes: Route[] = [{ path: '', component: NotificationBannerDemoComponent }];

@NgModule({
  declarations: [NotificationBannerDemoComponent],
  imports: [CommonModule, NotificationBannerModule, RouterModule.forChild(routes)],
})
export class NotificationBannerDemoModule {}
