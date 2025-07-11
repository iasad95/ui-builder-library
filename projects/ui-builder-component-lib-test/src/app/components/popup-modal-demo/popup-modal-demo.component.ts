import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { PopupModalService } from 'ui-builder-component-lib';

@Component({
  selector: 'app-popup-modal-demo',
  templateUrl: './popup-modal-demo.component.html',
  styleUrls: ['./popup-modal-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupModalDemoComponent implements AfterViewInit {
  public icons: any = {
    info: 'assets/icons/info.svg',
  };
  toggleModal = false;
  code = `<ng-container #dynamicModal></ng-container>
<lib-popup
  [isOpen]="toggleModal"
  [confirmButton]="'POPUP.CONFIRM'"
  [cancelButton]="'POPUP.CANCEL'"
  [title]="'POPUP.WARNING'"
  [message]="'POPUP.WARNING_MESSAGE'"
  [progBarCurrentStep]="3"
  [progBarTotalSteps]="5"
  [extendedMessage]="'POPUP.WARNING_MESSAGE_EXTENDED'"
>
</lib-popup>
<ion-button class="app-primary-button" (click)="this.toggleModal = !this.toggleModal;">Open Modal</ion-button>
`;
  @ViewChild('dynamicModal', { read: ViewContainerRef }) dynamicModal: ViewContainerRef;
  constructor(private popupModalService: PopupModalService) {}

  ngAfterViewInit() {
    this.popupModalService.setRootViewContainerRef(this.dynamicModal);
    this.popupModalService.insertModalComponent();
  }
  public openModal() {
    const obj = {
      icon: this.icons.info,
      confirmButton: 'POPUP.CONFIRM',
      cancelButton: 'POPUP.CANCEL',
      title: 'POPUP.WARNING',
      message: 'POPUP.WARNING_MESSAGE',
      checkboxText: 'POPUP.I_AGREE',
    };
    const ref = this.popupModalService.getInstance();
    this.popupModalService.setValues(obj);
    this.popupModalService.show();
    ref.changeDetectorRef.detectChanges();
  }

  public toggle() {
    this.toggleModal = !this.toggleModal;
  }
}
