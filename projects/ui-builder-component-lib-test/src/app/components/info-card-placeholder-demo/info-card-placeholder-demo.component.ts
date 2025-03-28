import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-info-card-placeholder-demo',
  templateUrl: './info-card-placeholder-demo.component.html',
  styleUrls: ['./info-card-placeholder-demo.component.scss'],
})
export class InfoCardPlaceholderDemoComponent {
  public avatar = true;
  public count = 2;
  public infoCardPlaceholderCode: string = `<lib-info-card-placeholder [avatar]="true" [count]="2"></lib-info-card-placeholder>`;

  public handleAvatarChange(event: MatSlideToggleChange) {
    this.avatar = event.checked;
  }
}
