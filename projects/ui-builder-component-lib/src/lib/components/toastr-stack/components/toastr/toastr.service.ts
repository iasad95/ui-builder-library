import { Injectable } from '@angular/core';
import { Observable, Subject, filter } from 'rxjs';
import { ToastrActionInitiator } from '../../enums/action-initiator.enum';
import { ToastrActionType } from '../../enums/action-type.enum';
import { ToastrActionEvent } from '../../interfaces/toastr-action.interface';
import { ToasterConfig } from '../../models/toaster.config';
import { LibToastrStackService } from '../../toastr-stack.service';
@Injectable({
  providedIn: 'root',
})
export class LibToastrService {
  private mouseOverSubject: Subject<boolean>;
  private isMouseOver: boolean;
  public mouseOver$: Observable<boolean>;
  public toastrAnimationDuration: number;
  public toastrConfig: ToasterConfig;
  constructor(private toastrStackService: LibToastrStackService) {
    this.mouseOverSubject = new Subject<boolean>();
    this.isMouseOver = false;
    this.mouseOver$ = this.mouseOverSubject.asObservable();
    this.toastrAnimationDuration = 300;
  }
  public setMouseOverState(isMouseOver: boolean): void {
    if (this.isMouseOver !== isMouseOver) {
      this.isMouseOver = isMouseOver;
      this.mouseOverSubject.next(this.isMouseOver);
    }
  }
  public emitToastrDeletionEvent(toastrConfig: ToasterConfig): void {
    const toastrDeletionActionEvent: ToastrActionEvent = {
      type: ToastrActionType.DELETION,
      initiator: ToastrActionInitiator.TOASTR,
      config: toastrConfig,
    };
    this.toastrStackService.emitToastrEvent(toastrDeletionActionEvent);
  }
  public emitToastrReplacementEvent(updatedToastrConfig: ToasterConfig): void {
    const toastrReplacementActionEvent: ToastrActionEvent = {
      type: ToastrActionType.REPLACEMENT,
      initiator: ToastrActionInitiator.TOASTR,
      config: updatedToastrConfig,
    };
    this.toastrStackService.emitToastrEvent(toastrReplacementActionEvent);
  }
  public onToastrReplacementEvent(): Observable<ToastrActionEvent> {
    return this.toastrStackService.toastrChanges.pipe(
      filter((toastrActionEvent: ToastrActionEvent) => {
        return (
          toastrActionEvent.initiator === ToastrActionInitiator.CONTROLLER &&
          toastrActionEvent.type === ToastrActionType.REPLACEMENT &&
          toastrActionEvent.config.token === this.toastrConfig.token
        );
      }),
    );
  }
  public onToastrDeletionEvent(): Observable<ToastrActionEvent> {
    return this.toastrStackService.toastrChanges.pipe(
      filter((toastrActionEvent: ToastrActionEvent) => {
        return (
          toastrActionEvent.initiator === ToastrActionInitiator.CONTROLLER &&
          toastrActionEvent.type === ToastrActionType.DELETION &&
          toastrActionEvent.config.token === this.toastrConfig.token
        );
      }),
    );
  }
}
