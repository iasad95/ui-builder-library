import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupModalService } from '../../components/modal/popup-modal/popup-modal.service';
@Directive({
  selector: '[submitOnEnter]',
})
export class SubmitOnEnterDirective {
  @Output() enter: EventEmitter<boolean> = new EventEmitter<boolean>();
  private activeUrl: string;
  constructor(
    private modalFactoryService: PopupModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activeUrl = this.activatedRoute.snapshot.routeConfig?.path;
  }
  @HostListener('window:keypress', ['$event'])
  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (this.modalFactoryService.isOpenStatus()) {
        return;
      } else {
        const url = this.router.url.split('?')[0];
        if (url.includes(this.activeUrl)) {
          event.preventDefault();
          this.enter.emit(true);
        }
      }
    }
  }
}
