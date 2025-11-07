import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { TextListModule } from 'ui-builder-component-lib';
import { TextListDemoComponent } from './text-list-demo.component';

const routes: Route[] = [{ path: '', component: TextListDemoComponent }];

@NgModule({
  declarations: [TextListDemoComponent],
  imports: [CommonModule, FormsModule, TextListModule, RouterModule.forChild(routes)],
})
export class TextListDemoModule {}
