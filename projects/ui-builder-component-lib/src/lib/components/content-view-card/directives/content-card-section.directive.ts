import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[section]',
})
export class ContentCardSectionDirective implements OnInit {
  constructor(private el: ElementRef<HTMLDivElement>) {}
  ngOnInit(): void {
    if (!this.el.nativeElement.classList.contains('content-card__section')) {
      this.el.nativeElement.classList.add('content-card__section');
    }
  }
}
