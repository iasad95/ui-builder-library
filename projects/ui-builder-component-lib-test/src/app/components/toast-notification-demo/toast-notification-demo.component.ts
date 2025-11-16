import { Component, ElementRef, ViewChild } from '@angular/core';
import { StatusTypes, ToastService } from 'ui-builder-component-lib';

@Component({
  selector: 'app-toast-notification-demo',
  templateUrl: './toast-notification-demo.component.html',
  styleUrls: ['./toast-notification-demo.component.scss'],
})
export class ToastNotificationDemoComponent {
  @ViewChild('notificationTemplate') notificationTemplate: ElementRef;
  public codeExample = `<lib-toast></lib-toast>`;
  public codeExample0 = `this.toastService.setToast = {
      header: 'Success: This toast came from a template',
      message: 'If this issue persists, please contact your System Administrator.',
      type: StatusTypes.Success,
      notificationTemplate: this.notificationTemplate,
    };`;

  public codeExample1 = `this.toastService.setToast = {
      header: 'Success',
      message: 'If this issue persists, please contact your System Administrator.',
      type: StatusTypes.Success,
    };`;

  public codeExample2 = `this.toastService.setToast = {
      header: 'Info',
      message: 'If this issue persists, please contact your System Administrator.',
      type: StatusTypes.Info,
      stayActive: true,
    };`;

  public codeExample3 = `this.toastService.setToast = {
      header: 'Warning',
      message: 'If this issue persists, please contact your System Administrator.',
      type: StatusTypes.Warning,
    };`;

  public codeExample4 = `this.toastService.setToast = {
      header: 'An error occurred while trying to save <Field Name>.',
      message: 'If this issue persists, please contact your System Administrator.',
      type: StatusTypes.Error,
    };`;

  constructor(private toastService: ToastService) {}

  public onShowToast(): void {}

  public onShowTemplatedToast(): void {
    this.toastService.setToast = {
      header: 'Success: This toast came from a template',
      message: 'If this issue persists, please contact your System Administrator.',
      type: StatusTypes.Success,
      notificationTemplate: this.notificationTemplate,
    };
  }

  public onShowToastSuccess(): void {
    this.toastService.setToast = {
      header: 'Success',
      message: 'If this issue persists, please contact your System Administrator.',
      type: StatusTypes.Success,
    };
  }

  public onShowToastInfo(): void {
    this.toastService.setToast = {
      header: 'Info',
      message: 'If this issue persists, please contact your System Administrator.',
      type: StatusTypes.Info,
      stayActive: true,
    };
  }

  public onShowToastWarning(): void {
    this.toastService.setToast = {
      header: 'Warning',
      message: 'If this issue persists, please contact your System Administrator.',
      type: StatusTypes.Warning,
    };
  }

  public onShowToastError(): void {
    this.toastService.setToast = {
      header: 'An error occurred while trying to save <Field Name>.',
      message: 'If this issue persists, please contact your System Administrator.',
      type: StatusTypes.Error,
    };
  }
}
