import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { InfoCardModule, ToggleModule } from 'ui-builder-component-lib';
import { InfoCardDemoComponent } from './info-card-demo.component';

const routes: Route[] = [{ path: '', component: InfoCardDemoComponent }];

@NgModule({
  declarations: [InfoCardDemoComponent],
  imports: [CommonModule, FormsModule, InfoCardModule, RouterModule.forChild(routes), ToggleModule],
})
export class InfoCardDemoModule {}
