import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { InfoCardListModule, ToggleModule } from 'ui-builder-component-lib';
import { InfoCardListDemoComponent } from './info-card-list-demo.component';

const routes: Route[] = [{ path: '', component: InfoCardListDemoComponent }];

@NgModule({
  declarations: [InfoCardListDemoComponent],
  imports: [CommonModule, FormsModule, InfoCardListModule, ToggleModule, RouterModule.forChild(routes)],
})
export class InfoCardListDemoModule {}
