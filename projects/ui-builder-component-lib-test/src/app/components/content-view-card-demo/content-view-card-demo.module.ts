import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { ContentViewCardModule, LibPercentageBarModule } from 'ui-builder-component-lib';
import { ContentViewCardDemoComponent } from './content-view-card-demo.component';

const routes: Route[] = [{ path: '', component: ContentViewCardDemoComponent }];

@NgModule({
  declarations: [ContentViewCardDemoComponent],
  imports: [CommonModule, FormsModule, ContentViewCardModule, RouterModule.forChild(routes), LibPercentageBarModule],
})
export class ContentViewCardDemoModule {}
