import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
@Directive({
  selector: '[ngModel], [formControl], [formControlName]',
})
export class NativeElementInjectorDirective implements OnInit {
  constructor(
    private controlDir: NgControl,
    private host: ElementRef<HTMLFormElement>,
  ) {}
  ngOnInit() {
    if (this.controlDir.control) {
      this.controlDir.control['nativeElement'] = this.host.nativeElement;
    }
  }
}
