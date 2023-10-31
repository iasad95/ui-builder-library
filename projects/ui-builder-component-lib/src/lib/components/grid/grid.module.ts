import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MAT_SELECT_CONFIG } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { PipeModule } from '../../pipes/pipe.module';
import { ButtonsModule } from '../buttons/buttons.module';
import { ColumnManagementModalModule } from '../column-management-modal/column-management-modal.module';
import { DashedCheckboxModule } from '../dashed-checkbox/dashed-checkbox.module';
import { FormFieldModule } from '../form-field/form-field.module';
import { GridToolbarModule } from '../grid-toolbar/grid-toolbar.module';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { TypeaheadFieldModule } from '../typeahead-field/typeahead-field.module';
import { GridComponent } from './grid.component';
import { GridService } from './grid.service';
@NgModule({
  declarations: [GridComponent],
  exports: [GridComponent],
  imports: [
    ButtonsModule,
    CommonModule,
    HttpClientModule,
    ColumnManagementModalModule,
    DragDropModule,
    FormFieldModule,
    FormsModule,
    MatDialogModule,
    PaginatorModule,
    PipeModule,
    TableModule,
    ReactiveFormsModule,
    SearchBarModule,
    TooltipModule,
    TypeaheadFieldModule,
    TranslateModule,
    MatButtonModule,
    ButtonModule,
    MatIconModule,
    ButtonsModule,
    DashedCheckboxModule,
    MatMenuModule,
    MenuModule,
    GridToolbarModule,
  ],
  providers: [
    {
      provide: MAT_SELECT_CONFIG,
      useValue: { overlayPanelClass: 'grid-overlay' },
    },
    CurrencyPipe,
    GridService,
  ],
})
export class GridModule {}
