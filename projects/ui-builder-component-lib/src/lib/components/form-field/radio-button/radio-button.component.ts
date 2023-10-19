import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonOperations } from '../../../operations/operations';
@Component({
  selector: 'lib-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LibRadioButtonComponent {
  public readonly UNIQUE_RADIO_COMPONENT_KEY = CommonOperations.randomString(20);
  @Input() radioButtonState: boolean = true;
}
