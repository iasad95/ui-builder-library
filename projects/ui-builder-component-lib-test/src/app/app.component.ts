import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { PopupModalService } from 'ui-builder-component-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('dynamicModal', { read: ViewContainerRef }) dynamicModal: ViewContainerRef;

  constructor(private popupModalService: PopupModalService) {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/assets/service-workers/nsfw.js').then((_) => {});
    }
  }

  ngAfterViewInit(): void {
    this.popupModalService.setRootViewContainerRef(this.dynamicModal);
  }
}
