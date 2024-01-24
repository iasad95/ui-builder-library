import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
@Component({
  selector: 'lib-info-card-placeholder',
  templateUrl: './info-card-placeholder.component.html',
  styleUrls: ['./info-card-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoCardPlaceholderComponent {
  @Input() avatar = false;
  @Input() count = 2;
}
