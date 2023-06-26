import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import 'inputmask';
@Directive({
  selector: '[libTimeMask]',
})
export class TimeMaskDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    new Inputmask('99:99 (AM|PM)', {
      mask: '99:99 (AM|PM)',
      showMaskOnHover: false,
      placeholder: 'hh:mm AM',
      alias: 'datetime',
      inputFormat: 'hh:mm (AM|PM)',
    }).mask(this.getHTMLInput());
  }
  private getHTMLInput(): HTMLInputElement {
    return this.elementRef.nativeElement;
  }
}
