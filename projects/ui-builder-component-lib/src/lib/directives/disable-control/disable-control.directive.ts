import { Directive, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
@Directive({
  selector: '[disableControl]',
})
export class DisableControlDirective implements OnInit {
  @Input() set disableControl(condition: boolean) {
    const action = condition ? 'disable' : 'enable';
    this.ngControl.control[action]();
  }
  constructor(private ngControl: NgControl) {}
  ngOnInit() {
    if (!this.ngControl) {
      console.debug('DisableControlDirective requires formControlName or formControl to be provided.');
      return;
    }
  }
}
