import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SelectableComponent } from './selectable.component';
@NgModule({
  declarations: [SelectableComponent],
  imports: [CommonModule, IonicModule, TranslateModule],
  exports: [SelectableComponent],
})
export class SelectableModule {}
