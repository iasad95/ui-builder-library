import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonsModule } from '../../buttons/buttons.module';
import { ImageBaseModule } from '../image-base/image-base.module';
import { ImageCardComponent } from './image-card.component';
@NgModule({
  declarations: [ImageCardComponent],
  imports: [CommonModule, MatRippleModule, MatIconModule, ButtonsModule, SkeletonModule, ImageBaseModule],
  exports: [ImageCardComponent],
})
export class ImageCardModule {}
