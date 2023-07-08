import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseBtnComponent } from '../base-btn/base-btn.component';
@Component({
  selector: 'lib-bubble-btn',
  templateUrl: './bubble-btn.component.html',
  styleUrls: ['./bubble-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BubbleBtnComponent extends BaseBtnComponent {
  @Input() title: string;
  @Input() subTitle: string;
}
