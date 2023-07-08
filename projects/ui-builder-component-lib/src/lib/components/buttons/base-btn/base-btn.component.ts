import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'lib-base-btn',
  templateUrl: './base-btn.component.html',
  styleUrls: ['./base-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseBtnComponent {
  @Input() hoverOutline: boolean;
  @Input() disabled: boolean;
  @Input() type: string = 'button';
  @Input() form: string = '';
  @Input() label: string;
  @Input() showArrowIcon: boolean;
  @Input() disableTextShadow: boolean;
  @Input() notificationCount: number;
  @Input() loading$: Observable<boolean>;
  @Input() illuminateIcon: boolean = false;
  @Input() checked: boolean = false;
  public onTouchStart(): void {
    if (!this.disabled) {
      this.hoverOutline = true;
    }
  }
  public onTouchEnd(): void {
    if (!this.disabled) {
      this.hoverOutline = false;
    }
  }
  public onBtnContainerClick(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
