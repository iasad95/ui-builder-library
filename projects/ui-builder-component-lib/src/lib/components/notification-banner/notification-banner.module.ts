import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationBannerComponent } from './notification-banner.component';
@NgModule({
  declarations: [NotificationBannerComponent],
  imports: [CommonModule],
  exports: [NotificationBannerComponent],
})
export class NotificationBannerModule {}
