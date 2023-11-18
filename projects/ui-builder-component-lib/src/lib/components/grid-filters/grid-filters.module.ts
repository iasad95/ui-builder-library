import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MenuModule } from 'primeng/menu';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonsModule } from '../buttons/buttons.module';
import { DashedCheckboxModule } from '../dashed-checkbox/dashed-checkbox.module';
import { FormFieldModule } from '../form-field/form-field.module';
import { PremiumChipModule } from '../premium-chip/premium-chip.module';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { DateFilterComponent } from './date-filter/date-filter.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { GridFiltersModalComponent } from './grid-filters-modal/grid-filters-modal.component';
import { ManageFiltersModalComponent } from './manage-filters-modal/manage-filters-modal.component';
import { SelectFilterComponent } from './select-filter/select-filter.component';
import { GridFilterService } from './services/grid-filter.service';
@NgModule({
  declarations: [GridFiltersModalComponent, SelectFilterComponent, DateFilterComponent, FilterBarComponent, ManageFiltersModalComponent],
  exports: [GridFiltersModalComponent, SelectFilterComponent, DateFilterComponent, FilterBarComponent, ManageFiltersModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DragDropModule,
    FormsModule,
    MenuModule,
    ReactiveFormsModule,
    FormFieldModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatMenuModule,
    MatMomentDateModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    SearchBarModule,
    TooltipModule,
    ButtonsModule,
    TranslateModule,
    PremiumChipModule,
    DashedCheckboxModule,
  ],
  providers: [DecimalPipe, GridFilterService],
})
export class GridFiltersModule {}
