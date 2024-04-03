import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'lib-popup',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibModalComponent {
  @Input() isOpen: boolean;
  @Input() icon: any;
  @Input() title: string;
  @Input() message: string;
  @Input() extendedMessage: string;
  @Input() cancelButton: string;
  @Input() confirmButton: string;
  @Input() checkboxText: string;
  @Input() progBarCurrentStep: number;
  @Input() progBarTotalSteps: number;
  @Input() customClass: string;
  @Input() backdropDismiss: boolean = false;
  @Output() modalConfirm: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() modalDismiss: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() afterCloseEvent: EventEmitter<unknown> = new EventEmitter<unknown>();
  @Input() modalComponent: Type<unknown>;
  @Input() modalComponentData: unknown;
  public confirmationControl: FormControl<boolean> = new FormControl();
  public afterClose: Observable<any> = this.afterCloseEvent.asObservable();
  constructor(private cdr: ChangeDetectorRef) {}
  public handleModalDismiss() {
    this.modalDismiss.emit(true);
    this.isOpen = false;
  }
  public handleModalConfirm() {
    this.modalConfirm.emit(true);
    this.isOpen = false;
  }
  public show(component?: Type<unknown>, data?: unknown, func1?: unknown, func2?: unknown): LibModalComponent {
    this.modalComponent = component;
    this.modalComponentData = data;
    this.isOpen = true;
    this.confirmationControl.reset();
    this.cdr.detectChanges();
    return this;
  }
  public hide(): void {
    this.isOpen = false;
    this.cdr.detectChanges();
  }
}
