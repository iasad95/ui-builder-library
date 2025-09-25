import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectOption } from 'ui-builder-component-lib';

@Component({
  selector: 'app-selectable-demo',
  templateUrl: './selectable-demo.component.html',
  styleUrls: ['./selectable-demo.component.scss'],
})
export class SelectableDemoComponent {
  public readonly ethnicities: SelectOption<string>[] = [
    { label: 'Asian', value: 'Asian', selected: false },
    { label: 'African', value: 'African', selected: false },
    { label: 'White', value: 'White', selected: false },
    { label: 'Latino', value: 'Latino', selected: false },
    { label: 'Black', value: 'Black', selected: false },
  ];
  public codeExample: string = `
  <lib-selectable
    [options]="options"
    [singleSelectionOnly]="value"
    [maxSelectionPossible]="maxSelectionPossible"
    [formControl]="formControl"
  ></lib-selectable>
  `;
  public formControl: FormControl<string[]> = new FormControl();
  public singleSelectionOnly: FormControl<boolean> = new FormControl();
  public singleSelectionOnlyControl: FormControl<boolean> = new FormControl();
  public maxSelectionPossible: number = 2;
}
