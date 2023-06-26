import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { NgxPopperjsDirective, NgxPopperjsOptions } from 'ngx-popperjs';
import { Subject, takeUntil } from 'rxjs';
@Directive({
  selector: '[libPopper]',
  exportAs: 'libPopper',
})
export class PoperDirective extends NgxPopperjsDirective implements OnInit, OnDestroy {
  private overlay: any;
  private destroy$ = new Subject<void>();
  @Input() popperShowBackdrop: boolean = false;
  @Output() backdropUpdated = new EventEmitter<boolean>();
  constructor(
    private renderer: Renderer2,
    private myChangeDetectorRef: ChangeDetectorRef,
    private elementRef: ElementRef,
    private myVcr: ViewContainerRef,
  ) {
    const popperDefaults: NgxPopperjsOptions = {};
    super(myChangeDetectorRef, elementRef, myVcr, popperDefaults);
  }
  override ngOnInit(): void {
    super.ngOnInit();
    if (this.popperShowBackdrop) {
      this.popperOnShown.pipe(takeUntil(this.destroy$)).subscribe(() => this.showOverlay());
      this.popperOnHidden.pipe(takeUntil(this.destroy$)).subscribe(() => this.hideOverlay());
    }
  }
  private createOverlay(): void {
    this.overlay = this.renderer.createElement('div');
    this.renderer.setStyle(this.overlay, 'position', 'fixed');
    this.renderer.setStyle(this.overlay, 'top', '0');
    this.renderer.setStyle(this.overlay, 'left', '-50vw');
    this.renderer.setStyle(this.overlay, 'height', '100vh');
    this.renderer.setStyle(this.overlay, 'width', '200vw');
    this.renderer.setStyle(this.overlay, 'background-color', 'rgba(0, 0, 0, 0.3)');
    this.renderer.setStyle(this.overlay, 'z-index', '1000');
  }
  private showOverlay(): void {
    if (!this.overlay) {
      this.createOverlay();
    }
    const parent = this.elementRef.nativeElement.parentNode;
    const refChild = this.elementRef.nativeElement.nextSibling;
    this.renderer.insertBefore(parent, this.overlay, refChild);
    const targetElement = this.elementRef.nativeElement;
    this.renderer.setStyle(targetElement, 'position', 'relative');
    this.renderer.setStyle(targetElement, 'z-index', '1001');
    this.backdropUpdated.emit(true);
  }
  private hideOverlay(): void {
    if (this.overlay) {
      this.renderer.removeChild(this.overlay.parentNode, this.overlay);
    }
    const targetElement = this.elementRef.nativeElement;
    this.renderer.removeStyle(targetElement, 'z-index');
    this.backdropUpdated.emit(false);
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.destroy$.next();
    this.destroy$.complete();
    if (this.overlay) {
      this.renderer.removeChild(this.overlay.parentNode, this.overlay);
    }
  }
}
