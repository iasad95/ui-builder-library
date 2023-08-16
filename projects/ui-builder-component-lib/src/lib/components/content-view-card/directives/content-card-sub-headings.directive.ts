import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[subHeadings]',
})
export class ContentCardSubHeadingsDirective implements OnInit {
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    if (!this.el.nativeElement.classList.contains('content-card__sub-headings')) {
      this.el.nativeElement.classList.add('content-card__sub-headings');
    }
  }
}
