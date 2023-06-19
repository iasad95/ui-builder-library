import { Component, Input } from '@angular/core';
import { StatusTypes } from '../../../enums/status-types';
@Component({
  selector: 'lib-status-icon',
  templateUrl: './status-icon.component.html',
  styleUrls: ['./status-icon.component.scss'],
})
export class StatusIconComponent {
  @Input() type: StatusTypes;
}
