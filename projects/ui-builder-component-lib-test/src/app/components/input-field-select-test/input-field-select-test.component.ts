import { Component, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-field-select-test',
  templateUrl: './input-field-select-test.component.html',
  styleUrls: ['./input-field-select-test.component.scss'],
})
export class InputFieldSelectTestComponent implements OnInit {
  @ViewChildren('optionsTemplate') templateRefs: QueryList<TemplateRef<any>>;
  public options: { name: string; value: string }[] = [
    { name: 'option1', value: 'option1' },
    { name: 'option2', value: 'option2' },
    { name: 'option3', value: 'option3' },
  ];
  public form: FormGroup;
  public codeExample = `
  <lib-input-field-select formControlName="controlName" [optionLabel]="'name'" [optionValue]="'value'" label="Select" [options]="options"> </lib-input-field-select>
  `;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.buildForm();
    this.form.get('testListDisabled').disable();
  }

  private buildForm(): FormGroup<any> {
    return this.fb.group({
      testListDisabled: ['', Validators.required],
      testList: ['', Validators.required],
      testFilterList: ['', Validators.required],
      testTemplateList: ['', Validators.required],
    });
  }
}
