import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-time-field-test',
  templateUrl: './input-time-field-test.component.html',
  styleUrls: ['./input-time-field-test.component.scss'],
})
export class InputTimeFieldTestComponent implements OnInit {
  public form: FormGroup;
  public startDate: Date = new Date();
  public codeExample: string = `
  <lib-input-time-field
    [startDate]="startDate"
    [displaySlotTime]="boolean"
    [showIcon]="boolean"
    [interval]="number"
    [fromTime]="date"
    label="label">
    </lib-input-time-field>
  `;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup {
    const defaultValue = new Date();
    defaultValue.setHours(10);
    defaultValue.setMinutes(7);
    return this.fb.group({
      fromTime: [new Date(), Validators.required],
      toTime: ['', Validators.required],
    });
  }
}
