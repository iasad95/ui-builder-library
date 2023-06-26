import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPopperjsModule, NgxPopperjsPlacements } from 'ngx-popperjs';
import { libPopperJSComponent } from './popper-content.component';
import { PoperDirective } from './popper.directive';
@NgModule({
  declarations: [PoperDirective, libPopperJSComponent],
  imports: [
    CommonModule,
    NgxPopperjsModule.forRoot({
      placement: NgxPopperjsPlacements.TOP,
    }),
  ],
  exports: [PoperDirective, libPopperJSComponent],
})
export class PopperModule {}
