import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToastNotificationDemoComponent } from './toast-notification-demo.component';

const routes: Routes = [{ path: '', component: ToastNotificationDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToastNotificationDemoRoutingModule {}
