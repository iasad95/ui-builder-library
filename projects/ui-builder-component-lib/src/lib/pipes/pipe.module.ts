import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArraySortPipe } from './array-sort/array.sort.pipe';
import { DateLocalizationPipe } from './date-localization/date-localization.pipe';
import { GetDisplayValuePipe } from './get-display-value/get-display-value.pipe';
import { GetMultiSelectDisplayTextPipe } from './get-multi-select-display-text/get-multi-select-display-text.pipe';
import { RoundPipe } from './round/round.pipe';
@NgModule({
  declarations: [ArraySortPipe, GetDisplayValuePipe, GetMultiSelectDisplayTextPipe, DateLocalizationPipe, RoundPipe],
  imports: [CommonModule],
  exports: [ArraySortPipe, GetDisplayValuePipe, GetMultiSelectDisplayTextPipe, DateLocalizationPipe, RoundPipe],
  providers: [GetDisplayValuePipe, GetMultiSelectDisplayTextPipe, DateLocalizationPipe],
})
export class PipeModule {}
