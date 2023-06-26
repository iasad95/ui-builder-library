import { ConnectedPosition, FlexibleConnectedPositionStrategy, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { ComponentRef, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
@Directive({
  selector: '[cosCdkMenuPositioner]',
})
export class CdkMenuPositionerDirective {
  @Input() componentType: ComponentType<any>;
  @Input() minimumSpaceNeeded = 0;
  @Input() position: ConnectedPosition[];
  @Input() set compArgAssignFunc(func: (ref: ComponentRef<any>) => void) {
    if (func && func.call) {
      if (this.componentRef) {
        func(this.componentRef);
      }
      this._compArgAssignFunc = func;
    }
  }
  @Input() clickCloseDetermineFunc: (e: Event) => boolean;
  private positionStrategy: FlexibleConnectedPositionStrategy;
  private _compArgAssignFunc: (ref: ComponentRef<any>) => void;
  private componentRef: ComponentRef<any>;
  private overlayRef: OverlayRef;
  @HostListener('click', ['$event']) onClick($event) {
    this.createOverlay();
  }
  constructor(
    private anchorElement: ElementRef,
    private overlay: Overlay,
    private renderer: Renderer2,
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.anchorElement && !this.anchorElement.nativeElement.contains(e.target) && this.overlayRef) {
        if (!this.clickCloseDetermineFunc || !this.clickCloseDetermineFunc.call || this.clickCloseDetermineFunc(e)) {
          this.hideOverlay();
        }
      }
    });
  }
  private setPositionStrategy(): FlexibleConnectedPositionStrategy {
    let top = false;
    if (window.innerHeight - this.anchorElement.nativeElement.getBoundingClientRect().bottom - this.minimumSpaceNeeded < 0) {
      top = true;
    }
    if (this.position) {
      return this.overlay.position().flexibleConnectedTo(this.anchorElement).withViewportMargin(10).withPush(true).withPositions(this.position);
    } else {
      return this.overlay
        .position()
        .flexibleConnectedTo(this.anchorElement)
        .withViewportMargin(10)
        .withPush(true)
        .withPositions([
          {
            originX: 'start',
            originY: top ? 'top' : 'bottom',
            overlayX: 'start',
            overlayY: top ? 'bottom' : 'top',
            offsetX: 0,
            offsetY: 0,
          },
        ]);
    }
  }
  private createOverlay(): void {
    if (this.componentType && this.anchorElement) {
      this.positionStrategy = this.setPositionStrategy();
      this.hideOverlay();
      const config: OverlayConfig = {
        positionStrategy: this.positionStrategy,
        scrollStrategy: this.overlay.scrollStrategies.reposition(),
        hasBackdrop: true,
        backdropClass: 'cdk-overlay-transparent-backdrop',
      };
      this.overlayRef = this.overlay.create(config);
      const resultPortal = new ComponentPortal(this.componentType);
      this.componentRef = this.overlayRef.attach(resultPortal);
      if (this._compArgAssignFunc && this._compArgAssignFunc.call) {
        this._compArgAssignFunc(this.componentRef);
      }
    }
  }
  private hideOverlay(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
}
