import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseBtnComponent } from '../base-btn/base-btn.component';
@Component({
  selector: 'lib-secondary-btn',
  templateUrl: './secondary-btn.component.html',
  styleUrls: ['./secondary-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondaryBtnComponent extends BaseBtnComponent {}
