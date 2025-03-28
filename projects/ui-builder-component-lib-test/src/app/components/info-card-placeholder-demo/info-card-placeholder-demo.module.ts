import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { InfoCardPlaceholderModule, ToggleModule } from 'ui-builder-component-lib';
import { InfoCardPlaceholderDemoComponent } from './info-card-placeholder-demo.component';

const routes: Route[] = [{ path: '', component: InfoCardPlaceholderDemoComponent }];

@NgModule({
  declarations: [InfoCardPlaceholderDemoComponent],
  imports: [CommonModule, InfoCardPlaceholderModule, FormsModule, RouterModule.forChild(routes), ToggleModule],
})
export class InfoCardPlaceholderDemoModule {}
