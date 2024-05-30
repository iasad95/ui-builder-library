import { Component, Input } from '@angular/core';
import { reveal } from '../../../animations/fade.animations';
import { StatusTypes } from '../../../enums/status-types';
@Component({
  selector: 'lib-status-banner',
  templateUrl: './status-banner.component.html',
  styleUrls: ['./status-banner.component.scss'],
  animations: [reveal(0.5)],
})
export class StatusBannerComponent {
  @Input() show = false;
  @Input() showIcon = true;
  @Input() type: StatusTypes;
  @Input() actionLink: string;
  @Input() actionLinkText: string;
  @Input() message: string;
  @Input() title: string;
  @Input() stayActive: boolean;
  @Input() showClose = true;
  onCloseBanner(): void {
    this.show = false;
  }
}
