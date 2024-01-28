import { ChangeDetectionStrategy, Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputDateFieldComponent } from '../input-date-field.component';
@Component({
  selector: 'lib-input-date-field-inline',
  templateUrl: './input-date-field-inline.component.html',
  styleUrls: ['./input-date-field-inline.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDateFieldInlineComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class InputDateFieldInlineComponent extends InputDateFieldComponent {
  @Input() showActions: boolean;
}
