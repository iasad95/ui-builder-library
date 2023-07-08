import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseBtnComponent } from '../base-btn/base-btn.component';
@Component({
  selector: 'lib-hover-btn',
  templateUrl: './hover-btn.component.html',
  styleUrls: ['./hover-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HoverBtnComponent extends BaseBtnComponent {
  @Input() iconUrl: string = '';
}
