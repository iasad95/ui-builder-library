import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusIconComponent } from './shared/status-icon/status-icon.component';
@NgModule({
  declarations: [StatusIconComponent],
  imports: [CommonModule],
  exports: [StatusIconComponent],
})
export class SharedModule {}
