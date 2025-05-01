import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { Route, RouterModule } from '@angular/router';
import { ButtonsModule } from 'ui-builder-component-lib';
import { MenuDemoComponent } from './menu-demo.component';

const routes: Route[] = [{ path: '', component: MenuDemoComponent }];

@NgModule({
  declarations: [MenuDemoComponent],
  imports: [CommonModule, ButtonsModule, MatDialogModule, RouterModule.forChild(routes)],
})
export class MenuDemoModule {}
