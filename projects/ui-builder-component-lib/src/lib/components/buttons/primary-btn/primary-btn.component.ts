import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseBtnComponent } from '../base-btn/base-btn.component';
@Component({
  selector: 'lib-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrls: ['./primary-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimaryBtnComponent extends BaseBtnComponent {
  @Input() override hoverOutline: boolean = true;
}
