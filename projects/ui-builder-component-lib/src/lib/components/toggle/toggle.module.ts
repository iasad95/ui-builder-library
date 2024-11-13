import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleComponent } from './toggle.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [ToggleComponent],
  imports: [CommonModule, FormsModule, TranslateModule],
  exports: [ToggleComponent],
})
export class ToggleModule {}
