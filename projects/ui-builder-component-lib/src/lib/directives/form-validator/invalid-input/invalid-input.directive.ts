import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroupDirective } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Directive({
  selector: '[libInvalidInput]',
})
export class InvalidInputDirective implements OnInit, OnDestroy {
  @Input() appInvalidInput: string;
  private control: AbstractControl;
  private destroy$: Subject<void> = new Subject();
  constructor(
    private _fg: ControlContainer,
    private _el: ElementRef,
    private render: Renderer2,
  ) {}
  get form(): any {
    return this._fg.formDirective ? (this._fg.formDirective as FormGroupDirective).form : null;
  }
  @HostListener('focus', ['$event'])
  private onFocus(): void {
    this.setInvalidClass();
  }
  @HostListener('blur', ['$event'])
  private onBlur(): void {
    this.setInvalidClass();
  }
  ngOnInit(): void {
    this.control = this.form.get(this.appInvalidInput);
    this.control.statusChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.setInvalidClass();
    });
    (this._fg as FormGroupDirective).ngSubmit.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.form.markAllAsTouched();
      this.setInvalidClass();
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  private setInvalidClass(): void {
    if (this.control.invalid && this.control.touched) {
      this.control.markAsTouched({ onlySelf: true });
      this.render.addClass(this._el.nativeElement, 'invalid-input');
    } else {
      this.render.removeClass(this._el.nativeElement, 'invalid-input');
    }
  }
}
