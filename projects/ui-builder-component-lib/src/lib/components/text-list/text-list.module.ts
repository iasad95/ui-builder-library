import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from '../buttons/buttons.module';
import { TextListComponent } from './text-list.component';
@NgModule({
  declarations: [TextListComponent],
  exports: [TextListComponent],
  imports: [CommonModule, ButtonsModule, FormsModule],
})
export class TextListModule {}
