import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { ModalBreakpointChangeEventDetail } from '@ionic/core';
@Component({
  selector: 'lib-bottom-modal',
  templateUrl: './bottom-modal.component.html',
  styleUrls: ['./bottom-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomModalComponent implements OnDestroy, AfterViewInit {
  @ViewChild('bottomModalRef', { read: IonModal }) bottomModalRef: IonModal;
  @Input() breakpoints: number[] = [0, 0.25, 0.5, 0.75];
  @Input() initialBreakpoint: number = 0;
  @Input() set isOpen(open: boolean) {
    this._isOpen = open;
    this.handelOpenModal(open);
  }
  get isOpen(): boolean {
    return this._isOpen;
  }
  @Input() canDismiss: boolean = true;
  @Input() showArrow: boolean = true;
  @Input() showBackBtn: boolean;
  @Input() loading: boolean;
  @Input() showHeaderSeparator: boolean = true;
  @Input() title: string;
  @Input() description: string;
  @Input() submitButtonTitle: string;
  @Input() cancelButtonTitle: string;
  @Input() validModal: boolean = true;
  @Input() adaptToContentHeight: boolean = true;
  @Input() customClass: string;
  @Output() isOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() breakpointChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() closeModal: EventEmitter<void> = new EventEmitter();
  @Output() submitModal: EventEmitter<void> = new EventEmitter();
  @Output() backClick: EventEmitter<void> = new EventEmitter();
  private _isOpen: boolean;
  constructor(public cdk: ChangeDetectorRef) {}
  ngAfterViewInit() {
    this.handelOpenModal(this._isOpen);
  }
  ngOnDestroy() {
    this.canDismiss = true;
    this.bottomModalRef.canDismiss = true;
    this.bottomModalRef?.dismiss();
  }
  public onDidDismiss(): void {
    this.isOpenChange.emit(!this.isOpenChange);
    this.closeModal.emit();
  }
  public onBreakpointDidChange(event: CustomEvent<ModalBreakpointChangeEventDetail>): void {
    this.breakpointChange.emit(event?.detail?.breakpoint);
  }
  public updateInitialBreakpoint(initialBreakpoint: number): void {
    this.initialBreakpoint = initialBreakpoint;
    this.bottomModalRef?.setCurrentBreakpoint(initialBreakpoint);
  }
  public onClickBack(): void {
    if (this.showBackBtn && !this.loading) {
      this.backClick.emit();
    }
  }
  public closeLibBottomModal(): void {
    this.bottomModalRef.canDismiss = true;
    this.isOpen = false;
    this.cdk.detectChanges();
  }
  private handelOpenModal(open: boolean): void {
    if (open) {
      this.bottomModalRef?.present();
    } else {
      this.canDismiss = true;
      this.bottomModalRef?.dismiss();
    }
  }
}
