import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[libContentLastColumn]',
})
export class ContentCardLastColumnDirective implements OnInit {
  constructor(private el: ElementRef<HTMLElement>) {}
  ngOnInit(): void {
    if (!this.el.nativeElement.classList.contains('content-card__last-column')) {
      this.el.nativeElement.classList.add('content-card__last-column');
    }
  }
}
