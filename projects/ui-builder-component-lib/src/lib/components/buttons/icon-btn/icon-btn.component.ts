import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseBtnComponent } from '../base-btn/base-btn.component';
@Component({
  selector: 'lib-icon-btn',
  templateUrl: './icon-btn.component.html',
  styleUrls: ['./icon-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBtnComponent extends BaseBtnComponent {}
