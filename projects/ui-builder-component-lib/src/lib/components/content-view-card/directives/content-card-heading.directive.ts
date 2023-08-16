import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[heading]',
})
export class ContentCardHeadingDirective implements OnInit {
  constructor(private el: ElementRef<HTMLDivElement>) {}
  ngOnInit(): void {
    if (!this.el.nativeElement.classList.contains('content-card__heading')) {
      this.el.nativeElement.classList.add('content-card__heading');
    }
  }
}
