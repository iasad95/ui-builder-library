import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, forwardRef, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { getDate } from 'date-fns';
import { Calendar, CalendarTypeView } from 'primeng/calendar';
@Component({
  selector: 'lib-input-date-field',
  templateUrl: './input-date-field.component.html',
  styleUrls: ['./input-date-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDateFieldComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDateFieldComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() defaultDate: Date;
  @Input() maxDate: Date;
  @Input() minDate: Date;
  @Input() showTime: boolean;
  @Input() hieActions: boolean;
  @Input() readonly: boolean;
  @Input() defaultDayHighlight: boolean = true;
  @Input() showIcon: boolean;
  @Input() timeOnly: boolean;
  @Input() view: CalendarTypeView = 'date';
  @Input() public disabled: boolean;
  @Input() dateFormat: string = 'mm-dd-yy';
  @Input() placeholder: string;
  @Input() appendTo: string | TemplateRef<undefined> | ElementRef;
  @Input() stepMinute: number = 15;
  @Input() mask: string;
  @Input() styleClass: string;
  @Input() timeFormat: string = 'hh:mm';
  @Output() focusEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('calendar') calendar: Calendar;
  public value: string | Date;
  public focused: boolean;
  private onTouched: any;
  private onChange: any;
  public writeValue(value: string): void {
    this.value = value;
  }
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  public change(event: Date): void {
    this.onChange(event);
  }
  public onModelChange(value: string): void {
    this.value = value;
    this.onChange(value);
  }
  public onBlurDate(): void {
    this.focused = false;
    this.onChange(this.value);
    this.onTouched(true);
    this.focusEvent.emit(true);
  }
  public onFocusDate(): void {
    this.focused = true;
    this.focusEvent.emit(true);
  }
  public openCalenderPicker(): void {
    this.calendar?.showOverlay();
    this.calendar?.cd.detectChanges();
    this.focusEvent.emit(true);
    this.highlightDefaultDay();
  }
  public selectPicker(): void {
    if (!this.value) {
      this.value = new Date();
    }
    this.calendar?.hideOverlay();
    this.calendar?.cd.detectChanges();
    this.focusEvent.emit(false);
  }
  public clearPicker(): void {
    this.calendar?.clear();
    this.calendar?.hideOverlay();
    this.calendar?.cd.detectChanges();
    this.focusEvent.emit(false);
  }
  private highlightDefaultDay(): void {
    if (this.defaultDate && !this.value && this.defaultDayHighlight) {
      const day = getDate(this.defaultDate);
      const daysElements = document.querySelectorAll('td:not(.p-datepicker-other-month) span');
      for (let i = 0; i < daysElements.length; i++) {
        const element = daysElements[i] as HTMLElement;
        if (element.innerText && Number(element.innerText) === day) {
          element.setAttribute('tabindex', '0');
          element.focus();
          element.classList.add('day-element');
        } else {
          element.classList.add('not-day-element');
          element.removeAttribute('tabindex');
          element.blur();
        }
      }
    }
  }
}
