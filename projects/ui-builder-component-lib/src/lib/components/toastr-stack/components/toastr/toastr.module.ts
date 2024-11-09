import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipModule } from '../../../tooltip/tooltip.module';
import { LibLoadingBarComponent } from '../loading-bar/loading-bar.component';
import { LibToastrComponent } from './toastr.component';
@NgModule({
  declarations: [LibToastrComponent, LibLoadingBarComponent],
  imports: [CommonModule, TranslateModule, TooltipModule],
  providers: [],
  exports: [LibToastrComponent],
})
export class LibToastrModule {}
