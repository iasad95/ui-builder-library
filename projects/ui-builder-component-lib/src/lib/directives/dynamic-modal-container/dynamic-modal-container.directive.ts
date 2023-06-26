import { AfterViewInit, ChangeDetectorRef, Directive, Injector, Input, Type, ViewContainerRef } from '@angular/core';
import { MODAL_DATA } from '../../components/modal/popup-injection-tokens';
@Directive({
  selector: '[libDynamicModalContainer]',
})
export class DynamicModalContainerDirective implements AfterViewInit {
  @Input() modalComponent: Type<unknown>;
  @Input() modalComponentData: unknown;
  constructor(
    public viewContainerRef: ViewContainerRef,
    private injector: Injector,
    private cdr: ChangeDetectorRef,
  ) {}
  ngAfterViewInit(): void {
    if (this.modalComponent && this.viewContainerRef) {
      const injector = Injector.create({
        providers: [{ provide: MODAL_DATA, useValue: this.modalComponentData }],
        parent: this.injector,
      });
      const componentRef = this.viewContainerRef.createComponent<unknown>(this.modalComponent, {
        injector,
      });
      this.viewContainerRef.insert(componentRef.hostView);
      this.cdr?.detectChanges();
    }
  }
}
