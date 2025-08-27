import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-range-selector-demo',
  templateUrl: './range-selector-demo.component.html',
  styleUrls: ['./range-selector-demo.component.scss'],
})
export class RangeSelectorDemoComponent implements OnInit {
  public minValue: number = 0;
  public maxValue: number = 100;
  public stepValue: number = 100;
  public dualKnobsControl: FormControl<boolean>;
  public pinControl: FormControl<boolean>;
  public reverseBarColorControl: FormControl<boolean>;
  public rangeControl: FormControl<{ lower: number; upper: number } | number>;
  public codeExample: string = `
  <lib-range-selector
    [formControl]="rangeControl"
    [pinValue]="pinControl"
    [dualKnobs]="dualKnobsControl"
    [reverseBarColor]="reverseBarColorControl"
    [minValue]="minValue"
    [maxValue]="maxValue"
  ></lib-range-selector>
  `;

  ngOnInit(): void {
    this.rangeControl = new FormControl(0);
    this.dualKnobsControl = new FormControl();
    this.pinControl = new FormControl(true);
    this.reverseBarColorControl = new FormControl();
  }
}
