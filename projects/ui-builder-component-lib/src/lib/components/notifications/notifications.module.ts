import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { ToastService } from './services/toast.service';
import { StatusBannerComponent } from './status-banner/status-banner.component';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  declarations: [StatusBannerComponent, ToastComponent],
  imports: [CommonModule, SharedModule],
  exports: [StatusBannerComponent, ToastComponent],
  providers: [ToastService],
})
export class NotificationsModule {}
