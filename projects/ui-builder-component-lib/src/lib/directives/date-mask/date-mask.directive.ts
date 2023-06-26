import { AfterViewInit, Directive, Input } from '@angular/core';
import 'inputmask';
import { Calendar, CalendarTypeView } from 'primeng/calendar';
@Directive({
  selector: 'p-calendar[libDateMask]',
})
export class DateMaskDirective implements AfterViewInit {
  @Input() view: CalendarTypeView = 'date';
  @Input() mask: string;
  @Input() placeholder: string;
  constructor(private primeCalendar: Calendar) {}
  ngAfterViewInit(): void {
    if (!this.mask) {
      this.setDateMask();
    }
    new Inputmask(this.mask, {
      placeholder: this.placeholder,
      showMaskOnFocus: false,
    }).mask(this.getHTMLInput());
  }
  private getHTMLInput(): HTMLInputElement {
    return this.primeCalendar.el.nativeElement.querySelector('input');
  }
  private setDateMask(): void {
    if (this.primeCalendar.timeOnly) {
      this.mask = '99:99';
      this.placeholder = this.placeholder || 'hh:mm';
    } else if (this.primeCalendar.showTime) {
      this.mask = '99-99-9999 99:99';
      this.placeholder = 'MM-DD-YYYY hh:mm';
    } else {
      if (this.view) {
        switch (this.view) {
          case 'date':
            this.mask = '99-99-9999';
            this.placeholder = 'MM-DD-YYYY';
            break;
          case 'month':
            this.mask = '99';
            this.placeholder = 'MM';
            break;
          case 'year':
            this.mask = '9999';
            this.placeholder = 'YYYY';
            break;
        }
      }
    }
  }
}
