import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { Route, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonsModule, LibToastrStackModule } from 'ui-builder-component-lib';
import { ToastrDemoComponent } from './toastr-demo.component';

const routes: Route[] = [{ path: '', component: ToastrDemoComponent }];

@NgModule({
  declarations: [ToastrDemoComponent],
  imports: [CommonModule, FormsModule, LibToastrStackModule, ButtonsModule, MatDialogModule, TranslateModule, RouterModule.forChild(routes)],
  providers: [DecimalPipe],
})
export class ToastrDemoModule {}
