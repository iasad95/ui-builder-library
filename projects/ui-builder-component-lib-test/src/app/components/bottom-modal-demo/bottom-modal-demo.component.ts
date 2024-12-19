import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { BottomModalComponent } from 'ui-builder-component-lib';

@Component({
  selector: 'app-bottom-modal-demo',
  templateUrl: './bottom-modal-demo.component.html',
  styleUrls: ['./bottom-modal-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomModalDemoComponent {
  public bottomModalLoadingCode: string = `<lib-primary-btn (click)="isOpenLoading = true">Bottom Modal Loader</lib-primary-btn>`;
  public bottomModalContentBackCode: string = `<lib-bottom-modal [(isOpen)]="isOpenContent" [title]="'Modal With Dynamic Content'" [showBackBtn]="true" (backClick)="onBackClick()"><p>Hello Modal</p></lib-bottom-modal>`;
  public bottomModalWithCancelBtnCode: string = `<lib-bottom-modal [(isOpen)]="isOpenContent" [title]="'Modal With Dynamic Content'" [showBackBtn]="true" (backClick)="onBackClick()"><p>Hello Modal</p></lib-bottom-modal>`;
  public isOpen: boolean;
  public isOpenLoading: boolean;
  public isOpenContent: boolean;
  public enableBack: boolean;
  public canDismiss: boolean;
  public cancelButtonTitle: string;
  @ViewChild('testModal', { static: false }) testModal: BottomModalComponent;

  public updateInitialBreakpoint(): void {
    this.testModal?.updateInitialBreakpoint(0.5);
  }

  public onBackClick(): void {
    alert('handle back click');
  }

  public openModalWithCancelBtn(): void {
    this.cancelButtonTitle = 'Cancel';
    this.isOpenContent = true;
    this.canDismiss = false;
  }

  public onCloseModal(): void {
    this.canDismiss = true;
    this.enableBack = false;
    this.cancelButtonTitle = null;
  }

  public onsSubmitModal(): void {
    this.testModal.closeLibBottomModal();
  }
}
