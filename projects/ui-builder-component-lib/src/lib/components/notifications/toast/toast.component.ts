import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fadeInOut } from '../../../animations/fade.animations';
import { StatusPosition } from '../../../enums/status-position';
import { StatusTypes } from '../../../enums/status-types';
import { StatusMessage } from '../../../interfaces/notification.interface';
import { ToastService } from '../services/toast.service';
@Component({
  selector: 'lib-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [fadeInOut()],
})
export class ToastComponent implements OnInit, OnDestroy {
  public message: StatusMessage;
  private toastHideSubject = new Subject<void>();
  private defaultDelay = 4000;
  private timeout = null;
  private componentDestroyed$: Subject<void> = new Subject();
  @Input() position = StatusPosition.topRight;
  constructor(private toastService: ToastService) {}
  ngOnInit(): void {
    this.toastService.observeToast.pipe(takeUntil(this.componentDestroyed$)).subscribe((message: StatusMessage) => {
      this.message = message;
      if (this.message?.message) {
        this.toastService.toastEvent = 'open';
        if (this.message.type === StatusTypes.Success || this.message.stayActive === false) {
          this.toastHideSubject.next();
        }
      }
    });
    this.toastHideSubject.pipe(takeUntil(this.componentDestroyed$)).subscribe(() => {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.message = null;
        this.toastService.toastEvent = 'close';
      }, this.defaultDelay);
    });
  }
  onCloseToast(): void {
    this.message = null;
    this.toastService.toastEvent = 'close';
  }
  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
