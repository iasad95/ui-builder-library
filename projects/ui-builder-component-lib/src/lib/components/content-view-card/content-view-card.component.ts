import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, OnInit, QueryList, ViewEncapsulation } from '@angular/core';
import { ContentViewCardService } from './content-view-card.service';
import { ContentCardHeadingDirective } from './directives/content-card-heading.directive';
import { ContentCardSectionDirective } from './directives/content-card-section.directive';
import { ContentCardSubHeadingsDirective } from './directives/content-card-sub-headings.directive';
@Component({
  selector: 'lib-content-view-card',
  templateUrl: './content-view-card.component.html',
  styleUrls: ['./content-view-card.component.scss'],
  providers: [ContentViewCardService],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentViewCardComponent implements OnInit {
  @ContentChildren(ContentCardSectionDirective, { descendants: true })
  sections!: QueryList<ContentCardSectionDirective>;
  @ContentChildren(ContentCardHeadingDirective)
  headings!: QueryList<ContentCardHeadingDirective>;
  @ContentChildren(ContentCardSubHeadingsDirective)
  subHeadings!: QueryList<ContentCardSubHeadingsDirective>;
  @Input() public imgSrc: string;
  public cardExpanded: boolean;
  constructor(
    private contentViewCardService: ContentViewCardService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this.cardExpanded = this.contentViewCardService.getCardExpansionState();
    this.contentViewCardService.setCardExpansionState(this.cardExpanded);
    this.changeDetectorRef.detectChanges();
  }
  public toggleCardExpansion(): void {
    this.cardExpanded = !this.cardExpanded;
    this.contentViewCardService.setCardExpansionState(this.cardExpanded);
    this.changeDetectorRef.detectChanges();
  }
}
