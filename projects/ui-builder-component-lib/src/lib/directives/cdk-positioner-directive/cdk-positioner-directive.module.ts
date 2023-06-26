import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkMenuPositionerDirective } from './cdk-positioner.directive';
import { OverlayModule } from '@angular/cdk/overlay';
@NgModule({
  declarations: [CdkMenuPositionerDirective],
  exports: [CdkMenuPositionerDirective],
  imports: [CommonModule, OverlayModule],
})
export class CdkPositionerDirectiveModule {}
