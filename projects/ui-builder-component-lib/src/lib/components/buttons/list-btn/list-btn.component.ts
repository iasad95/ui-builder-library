import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseBtnComponent } from '../base-btn/base-btn.component';
@Component({
  selector: 'lib-list-btn',
  templateUrl: './list-btn.component.html',
  styleUrls: ['./list-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListBtnComponent extends BaseBtnComponent {
  @Input() actionLabel: string;
  @Input() hideActionIcon: boolean;
}
