import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardListComponent } from './info-card-list.component';
import { InfoCardModule } from '../info-card/info-card.module';
import { SearchBarModule } from '../search-bar/search-bar.module';
@NgModule({
  declarations: [InfoCardListComponent],
  exports: [InfoCardListComponent],
  imports: [CommonModule, InfoCardModule, SearchBarModule],
})
export class InfoCardListModule {}
