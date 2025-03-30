import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { subDays } from 'date-fns';

@Component({
  selector: 'app-input-date-field-test',
  templateUrl: './input-date-field-test.component.html',
  styleUrls: ['./input-date-field-test.component.scss'],
})
export class InputDateFieldTestComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder) {}
  public control: FormControl = new FormControl(new Date());
  public inlinePickerControl: FormControl = new FormControl(subDays(new Date(), 1));
  public dateFieldCode: string = `<lib-input-date-field [profile]="profileWithProgress"></lib-input-date-field>`;

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  private buildForm(): FormGroup<any> {
    return this.fb.group({
      dateReadOnly: ['', Validators.required],
      dateDefaultValue: [new Date(), Validators.required],
      dateDisabled: [new Date(), Validators.required],
      dateInput: ['', Validators.required],
      tmeOnly: ['', Validators.required],
      pickerIcon: ['', Validators.required],
      pickerTimeIcon: ['', Validators.required],
      yearPicker: ['', Validators.required],
      monthPicker: ['', Validators.required],
      dateTimePicker: ['', Validators.required],
      dateTWithoutActions: ['', Validators.required],
    });
  }
}
