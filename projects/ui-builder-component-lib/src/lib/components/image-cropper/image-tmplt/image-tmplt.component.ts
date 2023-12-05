import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
@Component({
  selector: 'lib-image-tmplt',
  templateUrl: './image-tmplt.component.html',
  styleUrls: ['./image-tmplt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageTmpltComponent {
  @Input() disabled: boolean = false;
  @Input() src: string;
}
