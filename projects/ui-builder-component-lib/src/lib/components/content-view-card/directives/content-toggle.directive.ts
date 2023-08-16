import { Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ContentViewCardService } from '../content-view-card.service';
@Directive({
  selector: '[libContentToggle]',
})
export class ContentToggleDirective implements OnInit, OnDestroy {
  private destroy$: Subject<void>;
  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef,
    private contentViewCardService: ContentViewCardService,
  ) {}
  ngOnInit(): void {
    this.destroy$ = new Subject<void>();
    this.setElementViewState(this.contentViewCardService.getCardExpansionState());
    this.contentViewCardService
      .onCardExpansion()
      .pipe(takeUntil(this.destroy$))
      .subscribe((cardExpansionState: boolean) => {
        this.setElementViewState(cardExpansionState);
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  private setElementViewState(elementViewState: boolean): void {
    if (elementViewState) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
