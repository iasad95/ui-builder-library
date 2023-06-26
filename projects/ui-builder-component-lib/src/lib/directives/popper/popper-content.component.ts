import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { NgxPopperjsContentComponent } from 'ngx-popperjs';
@Component({
  selector: 'lib-popper-content',
  templateUrl: './lib-popper.component.html',
  styleUrls: ['./lib-popper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class libPopperJSComponent extends NgxPopperjsContentComponent {
  @HostListener('document:visibilitychange', ['$event'])
  handleVisibilityChange(): void {
    if (document.visibilityState === 'visible' && this.state) {
      const interval = setInterval(() => {
        if (this.popperInstance) {
          this.update();
          clearInterval(interval);
        }
      }, 100);
    }
  }
  override show(): void {
    super.show();
    setTimeout(() => {
      this.update();
    }, 100);
  }
}
