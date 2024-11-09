import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastrActionEvent } from './interfaces/toastr-action.interface';
@Injectable({
  providedIn: 'root',
})
export class LibToastrStackService {
  private toastrChangeSubject: Subject<ToastrActionEvent>;
  public toastrChanges: Observable<ToastrActionEvent>;
  constructor() {
    this.toastrChangeSubject = new Subject<ToastrActionEvent>();
    this.toastrChanges = this.toastrChangeSubject.asObservable();
  }
  public emitToastrEvent(toastrActionEvent: ToastrActionEvent): void {
    this.toastrChangeSubject.next(toastrActionEvent);
  }
}
