import { Component, Input } from '@angular/core';
@Component({
  selector: 'lib-primary-chip',
  templateUrl: './primary-chip.component.html',
  styleUrl: './primary-chip.component.scss',
})
export class PrimaryChipComponent {
  @Input() height: number = 0;
  @Input() width: number = 0;
}
