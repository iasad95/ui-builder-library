import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotificationsModule } from 'ui-builder-component-lib';
import { ToastNotificationDemoRoutingModule } from './toast-notification-demo-routing.module';
import { ToastNotificationDemoComponent } from './toast-notification-demo.component';

@NgModule({
  declarations: [ToastNotificationDemoComponent],
  imports: [CommonModule, NotificationsModule, ToastNotificationDemoRoutingModule],
})
export class ToastNotificationDemoModule {}
