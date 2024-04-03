import { ComponentRef, Injectable, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { PopupModal } from '../../../model/popup-modal';
import { LibModalComponent } from './popup-modal.component';
export type Content<T> = string | TemplateRef<T> | Type<T>;
@Injectable({
  providedIn: 'root',
})
export class PopupModalService {
  private rootViewContainerRef: ViewContainerRef;
  private ref: ComponentRef<LibModalComponent>;
  constructor() {}
  public setRootViewContainerRef(view: ViewContainerRef): void {
    this.rootViewContainerRef = view;
  }
  public reset(): void {
    this.rootViewContainerRef.clear();
  }
  public insertModalComponent<T>(content: Content<T> = null): void {
    if (content) {
      const ngContent = this.resolveNgContent(content);
      this.ref = this.rootViewContainerRef.createComponent(LibModalComponent, {
        projectableNodes: ngContent,
      });
    } else {
      this.ref = this.rootViewContainerRef.createComponent(LibModalComponent);
    }
    this.ref.hostView.detectChanges();
  }
  public resolveNgContent(content): Node[][] {
    const componentRef = this.rootViewContainerRef.createComponent(content);
    return [[componentRef.location.nativeElement]];
  }
  public getInstance(): ComponentRef<LibModalComponent> {
    return this.ref;
  }
  public setInstance(instance: ComponentRef<LibModalComponent>): void {
    this.ref = instance;
  }
  public show<T, D>(component?: Type<T>, data?: D, newInstance?: boolean): LibModalComponent {
    if (!this.ref || newInstance) {
      this.ref = this.rootViewContainerRef.createComponent(LibModalComponent);
    }
    return this.ref.instance.show(component, data);
  }
  public hide(data?: unknown): void {
    if (data) {
      this.ref.instance.afterCloseEvent.emit(data);
    }
    this.ref.instance.hide();
  }
  public isOpenStatus() {
    return this.ref.instance.isOpen;
  }
  public setValues(obj: PopupModal = null): void {
    this.ref.setInput('icon', obj?.icon ? obj?.icon : null);
    this.ref.setInput('title', obj?.title ? obj?.title : null);
    this.ref.setInput('message', obj?.message ? obj?.message : null);
    this.ref.setInput('cancelButton', obj?.cancelButton ? obj?.cancelButton : null);
    this.ref.setInput('confirmButton', obj?.confirmButton ? obj?.confirmButton : null);
    this.ref.setInput('checkboxText', obj?.checkboxText ? obj?.checkboxText : null);
    this.ref.setInput('extendedMessage', obj?.extendedMessage ? obj?.extendedMessage : null);
    this.ref.setInput('customClass', obj?.customClass ? obj?.customClass : null);
    this.ref.setInput('progBarCurrentStep', obj?.progBarCurrentStep ? obj?.progBarCurrentStep : null);
    this.ref.setInput('progBarTotalSteps', obj?.progBarTotalSteps ? obj?.progBarTotalSteps : null);
    this.ref.setInput('backdropDismiss', obj?.backdropDismiss ? obj?.backdropDismiss : false);
  }
}
