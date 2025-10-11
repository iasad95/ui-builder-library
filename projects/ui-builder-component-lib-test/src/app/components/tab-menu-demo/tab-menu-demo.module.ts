import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { Route, RouterModule } from '@angular/router';
import { LibTabMenuModule } from 'ui-builder-component-lib';
import { TabMenuDemoComponent } from './tab-menu-demo.component';

const routes: Route[] = [{ path: '', component: TabMenuDemoComponent }];

@NgModule({
  declarations: [TabMenuDemoComponent],
  imports: [CommonModule, MatDialogModule, LibTabMenuModule, RouterModule.forChild(routes)],
})
export class TabMenuDemoModule {}
