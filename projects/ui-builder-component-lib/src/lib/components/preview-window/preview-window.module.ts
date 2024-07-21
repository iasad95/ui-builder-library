import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PipeModule } from '../../pipes/pipe.module';
import { PreviewWindowComponent } from './preview-window.component';
@NgModule({
  declarations: [PreviewWindowComponent],
  imports: [CommonModule, TranslateModule, PipeModule],
  exports: [PreviewWindowComponent],
})
export class PreviewWindowModule {}
