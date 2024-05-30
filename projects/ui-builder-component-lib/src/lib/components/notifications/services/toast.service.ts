import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { StatusTypes } from '../../../enums/status-types';
import { StatusMessage } from '../../../interfaces/notification.interface';
@Injectable()
export class ToastService {
  private eventSubject = new Subject<string>();
  private displaySubject = new Subject<StatusMessage>();
  set setToast(data: StatusMessage) {
    if (data) {
      data.showIcon = data.showIcon === undefined || null || '' ? true : data.showIcon;
    }
    this.displaySubject.next(data);
  }
  set toastEvent(event: string) {
    this.eventSubject.next(event);
  }
  get observeToast() {
    return this.displaySubject.asObservable();
  }
  get observeEvents(): Observable<string> {
    return this.eventSubject.asObservable();
  }
  showErrorToast(header: string, message: string = 'Try refreshing the page a couple of times. If this issue persists, contact your System Administrator.') {
    this.setToast = {
      type: StatusTypes.Error,
      message,
      header,
    };
  }
  showSuccessToast(header: string, message?: string) {
    this.setToast = {
      type: StatusTypes.Success,
      message,
      header,
    };
  }
}
