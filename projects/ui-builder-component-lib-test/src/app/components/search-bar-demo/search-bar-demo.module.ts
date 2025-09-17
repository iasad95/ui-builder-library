import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { SearchBarModule } from 'ui-builder-component-lib';
import { SearchBarDemoComponent } from './search-bar-demo.component';

const routes: Route[] = [{ path: '', component: SearchBarDemoComponent }];

@NgModule({
  declarations: [SearchBarDemoComponent],
  imports: [CommonModule, FormsModule, SearchBarModule, RouterModule.forChild(routes)],
})
export class SearchBarDemoModule {}
