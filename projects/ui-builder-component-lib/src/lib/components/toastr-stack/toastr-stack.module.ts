import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipModule } from '../tooltip/tooltip.module';
import { LibToastrModule } from './components/toastr/toastr.module';
import { LibToastrStackComponent } from './toastr-stack.component';
import { LibToastrStackService } from './toastr-stack.service';
@NgModule({
  declarations: [LibToastrStackComponent],
  imports: [CommonModule, TranslateModule, TooltipModule, LibToastrModule],
  providers: [LibToastrStackService],
  exports: [LibToastrStackComponent],
})
export class LibToastrStackModule {}
