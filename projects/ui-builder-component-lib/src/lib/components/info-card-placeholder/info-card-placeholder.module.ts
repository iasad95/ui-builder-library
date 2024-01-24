import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardPlaceholderComponent } from './info-card-placeholder.component';
@NgModule({
  declarations: [InfoCardPlaceholderComponent],
  exports: [InfoCardPlaceholderComponent],
  imports: [CommonModule],
})
export class InfoCardPlaceholderModule {}
