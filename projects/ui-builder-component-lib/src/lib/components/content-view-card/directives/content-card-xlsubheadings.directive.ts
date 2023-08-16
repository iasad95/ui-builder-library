import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[xLSubHeadings]',
})
export class ContentCardXLargeSubHeadingsDirective implements OnInit {
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    if (!this.el.nativeElement.classList.contains('content-card__xlarge-sub-headings')) {
      this.el.nativeElement.classList.add('content-card__xlarge-sub-headings');
    }
  }
}
