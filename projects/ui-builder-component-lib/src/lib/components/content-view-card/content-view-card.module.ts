import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ContentViewCardComponent } from './content-view-card.component';
import { ContentCardFirstColumnDirective } from './directives/content-card-first-column.directive';
import { ContentCardHeadingDirective } from './directives/content-card-heading.directive';
import { ContentCardLastColumnDirective } from './directives/content-card-last-column.directive';
import { ContentCardSectionDirective } from './directives/content-card-section.directive';
import { ContentCardSubHeadingsDirective } from './directives/content-card-sub-headings.directive';
import { ContentCardXLargeSubHeadingsDirective } from './directives/content-card-xlsubheadings.directive';
import { ContentToggleDirective } from './directives/content-toggle.directive';
@NgModule({
  declarations: [
    ContentViewCardComponent,
    ContentCardSectionDirective,
    ContentCardHeadingDirective,
    ContentCardSubHeadingsDirective,
    ContentCardXLargeSubHeadingsDirective,
    ContentCardFirstColumnDirective,
    ContentCardLastColumnDirective,
    ContentToggleDirective,
  ],
  imports: [CommonModule, FormsModule, TranslateModule],
  exports: [
    ContentViewCardComponent,
    ContentCardSectionDirective,
    ContentCardHeadingDirective,
    ContentCardSubHeadingsDirective,
    ContentCardXLargeSubHeadingsDirective,
    ContentCardFirstColumnDirective,
    ContentCardLastColumnDirective,
    ContentToggleDirective,
  ],
})
export class ContentViewCardModule {}
