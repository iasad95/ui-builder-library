import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
@Directive({
  selector: '[libContentCardFirstColumn]',
})
export class ContentCardFirstColumnDirective implements OnInit {
  @Input() imgSrc: string;
  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
  ) {}
  ngOnInit() {
    const container = this.renderer.createElement('div');
    this.renderer.addClass(container, 'content-card__profile-img__wrapper__container');
    const img = this.renderer.createElement('img');
    this.renderer.setAttribute(img, 'src', this.imgSrc);
    const wrapper = this.renderer.createElement('div');
    this.renderer.addClass(wrapper, 'content-card__profile-img__wrapper');
    this.renderer.appendChild(container, img);
    this.renderer.appendChild(wrapper, container);
    const hostElem = this.el.nativeElement;
    if (!hostElem.classList.contains('content-card__first-column')) {
      hostElem.classList.add('content-card__first-column');
    }
    this.renderer.insertBefore(hostElem, wrapper, hostElem.firstChild);
  }
}
