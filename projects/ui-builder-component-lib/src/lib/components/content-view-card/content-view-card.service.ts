import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ContentViewCardService {
  private cardExpansionState: boolean;
  private cardExpanded: Subject<boolean>;
  constructor() {
    this.cardExpanded = new Subject<boolean>();
    this.cardExpansionState = false;
  }
  public setCardExpansionState(expansionState: boolean): void {
    this.cardExpanded.next(expansionState);
  }
  public onCardExpansion(): Observable<boolean> {
    return this.cardExpanded.asObservable();
  }
  public getCardExpansionState(): boolean {
    return this.cardExpansionState;
  }
}
