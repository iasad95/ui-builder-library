import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatOption } from '@angular/material/core';
import { addDays, differenceInMinutes, isAfter, isBefore, startOfDay } from 'date-fns';
import { TimeSlot, TimeSlotHours } from '../../model/input-time-field.models';
@Component({
  selector: 'lib-input-time-field',
  templateUrl: './input-time-field.component.html',
  styleUrls: ['./input-time-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTimeFieldComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTimeFieldComponent implements OnInit, ControlValueAccessor {
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  @ViewChild(MatAutocompleteTrigger, { read: MatAutocompleteTrigger })
  inputAutoComplete: MatAutocompleteTrigger;
  @Input() startDate: Date = addDays(new Date(), 2);
  @Input() interval: number = 30;
  @Input() displaySlotTime: boolean;
  @Input()
  set fromTime(fromTime: string | Date) {
    this.fromTimeValue = fromTime ? new Date(fromTime) : null;
    if (this.fromTimeValue && this.displaySlotTime) {
      this.generateTimeSlots();
      if (this.control.value && this.control.value['slotValue']) {
        const slotTime = differenceInMinutes(new Date(this.control.value['slotValue']), this.fromTimeValue);
        if (slotTime < 0) {
          this.control.setValue(null);
          this.onChange(null);
        }
      }
    }
  }
  get fromTime(): string | Date {
    return this.fromTimeValue;
  }
  @Input() format: string = 'hh:mm aa';
  @Input() label: string;
  @Input() readonly: boolean;
  @Input() showIcon: boolean;
  @Input() public disabled: boolean;
  @Output() focusEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  public timeSlots: TimeSlot[] = [];
  public filteredTimeSlots: TimeSlot[] = [];
  public control: FormControl<TimeSlot> = new FormControl();
  public focused: boolean;
  private onTouched: any;
  private onChange: any;
  private value: Date;
  private fromTimeValue: Date;
  constructor(
    private cdr: ChangeDetectorRef,
    private datePipe: DatePipe,
  ) {}
  ngOnInit(): void {
    this.generateTimeSlots();
  }
  public writeValue(value: any): void {
    this.value = value;
    if (value) {
      this.setTimeSlot(value);
      this.activeSelectedValue();
    }
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
  public onBlurPicker(): void {
    this.focused = false;
    this.onTouched(true);
    this.focusEvent.emit(true);
    this.onChange(this.control.value);
  }
  public onFocusPicker(): void {
    this.focused = true;
    this.focusEvent.emit(true);
    this.inputAutoComplete.openPanel();
    this.activeSelectedValue();
  }
  public filterTimeSlots(query?: string): void {
    if (query) {
      const timeParts: string[] = query.split(' ');
      const charactersToRemove = /[HMPA]/gi;
      query = query.replace(charactersToRemove, '');
      query = query.replace(/\s/g, '');
      this.filteredTimeSlots = this.timeSlots.filter(
        (timeSlot) => timeSlot.slotLabel.indexOf(query.toUpperCase()) !== -1 && (!this.displaySlotTime || (this.displaySlotTime && timeSlot.slotTime >= 0)),
      );
      query += ' ' + timeParts[1];
      if (query.length === 8) {
        const selectedSlot = this.filteredTimeSlots.find((timeSlot) => timeSlot.slotLabel === query.toUpperCase()) || this.buildTimeSlot(timeParts[0], query.toUpperCase());
        this.control.setValue(selectedSlot);
      }
    } else {
      this.filteredTimeSlots = this.displaySlotTime ? this.timeSlots.filter((timeSlot) => timeSlot.slotTime >= 0) : this.timeSlots;
    }
  }
  public displayFn(slot: TimeSlot): string {
    return slot?.slotLabel;
  }
  public onSelect(): void {
    const selectedSlot = this.timeSlots.find((timeSlot) => timeSlot.slotLabel === this.control.value?.slotLabel);
    this.onChange(selectedSlot?.slotValue);
    this.control.setValue(selectedSlot);
  }
  private buildTimeSlot(time: string, slotLabel: string): TimeSlot {
    const hmTimeParts = time.split(':');
    const hours = Number(hmTimeParts[0]);
    const minutes = Number(hmTimeParts[1]);
    const slotValue: Date = startOfDay(this.startDate);
    slotValue.setHours(hours === 0 ? 12 : hours);
    slotValue.setMinutes(minutes);
    if (isBefore(slotValue, this.timeSlots[0].slotValue) || isAfter(slotValue, this.timeSlots[this.timeSlots.length - 1].slotValue)) {
      return null;
    } else {
      const selectedSlot = { slotLabel, slotValue };
      if (this.timeSlots.indexOf(selectedSlot) === -1) {
        this.timeSlots.push(selectedSlot);
        this.filteredTimeSlots.push(selectedSlot);
        this.cdr.detectChanges();
      }
      return selectedSlot;
    }
  }
  private generateTimeSlots(): void {
    this.timeSlots = [];
    const minutesInDay = 24 * 60;
    const intervalsInDay = minutesInDay / this.interval;
    let currentDate = startOfDay(this.startDate);
    for (let i = 0; i < intervalsInDay; i++) {
      const slotLabel = this.datePipe.transform(currentDate, this.format);
      const slotWitHours = this.buildSlotLabelWitHours(slotLabel, currentDate) || {};
      this.timeSlots.push({
        slotLabel,
        slotValue: currentDate,
        ...slotWitHours,
      });
      currentDate = new Date(currentDate.getTime() + this.interval * 60000);
    }
    if (this.fromTimeValue && this.displaySlotTime) {
      this.filterTimeSlots();
    } else {
      this.filteredTimeSlots = this.timeSlots;
    }
    this.cdr.detectChanges();
    this.control.valueChanges.subscribe((value) => {
      if (typeof value === 'string') {
        this.filterTimeSlots(value);
      }
    });
  }
  private buildSlotLabelWitHours(slotLabel: string, slotValue: Date): TimeSlotHours {
    if (this.fromTimeValue && this.displaySlotTime) {
      const slotTime = differenceInMinutes(slotValue, this.fromTimeValue);
      if (this.interval > 0 && slotTime > 0 && slotTime < this.interval) {
        return null;
      }
      return {
        slotLabelWitHours: (slotLabel += ' (' + (slotTime >= 60 ? ((slotTime / 60) % 1 != 0 ? (slotTime / 60).toFixed(1) : slotTime / 60) + ' hr)' : slotTime + ' min)')),
        slotTime: slotTime,
      };
    } else {
      return null;
    }
  }
  private setTimeSlot(slotValue: Date): void {
    if (isBefore(slotValue, this.timeSlots[0].slotValue)) {
      this.control.setValue(null);
      if (this.onChange) {
        this.onChange(null);
      }
    } else {
      const slotLabel: string = this.datePipe.transform(slotValue, this.format);
      let selectedSlot = this.timeSlots.find((timeSlot) => timeSlot.slotLabel === slotLabel);
      if (!selectedSlot) {
        const slotWitHours = this.buildSlotLabelWitHours(slotLabel, slotValue) || {};
        selectedSlot = { slotLabel, slotValue, ...slotWitHours };
        this.timeSlots.push(selectedSlot);
      }
      this.control.setValue(selectedSlot);
      if (this.onChange) {
        this.onChange(selectedSlot.slotValue);
      }
    }
    this.cdr.detectChanges();
  }
  private activeSelectedValue(): void {
    if (this.control.value) {
      const selectedOption: MatOption = this.matAutocomplete.options.find((option: MatOption) => option.value?.slotLabel === this.control.value.slotLabel);
      if (selectedOption) {
        selectedOption.select();
        selectedOption['_getHostElement']().scrollIntoView({
          behavior: 'auto',
          block: 'start',
          inline: 'start',
        });
      }
    }
  }
}
