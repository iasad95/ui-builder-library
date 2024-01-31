import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { LibMapModule } from '../map/map.module';
import { ImageCardModule } from '../photo-upload/image-card/image-card.module';
import { InputFieldComponent } from './input-field.component';
@NgModule({
  declarations: [InputFieldComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, GoogleMapsModule, NgxMaskDirective, NgxMaskPipe, ImageCardModule, LibMapModule],
  exports: [InputFieldComponent],
  providers: [provideNgxMask()],
})
export class InputFieldModule {}
