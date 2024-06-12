import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'lib-percentage-bar',
  templateUrl: './percentage-bar.component.html',
  styleUrls: ['./percentage-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LibPercentageBarComponent {
  @Input() value: number = 0;
}
