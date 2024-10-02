import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import { TabMenu } from 'primeng/tabmenu';
@Component({
  selector: 'lib-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibTabMenuComponent implements AfterViewInit {
  @Input() items: MenuItem[] = [];
  @Input() activeItem: MenuItem;
  @Output() activeItemChange: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();
  @ViewChild('tabMenu', { static: false }) tabMenu: TabMenu;
  private isDown: boolean = false;
  private startX: number = 0;
  private scrollLeft: number;
  ngAfterViewInit(): void {
    this.tabMenu.updateButtonState = function () {
      this.backwardIsDisabled = false;
      this.forwardIsDisabled = false;
    };
  }
  public activeItemChanged(item: MenuItem): void {
    this.activeItem = item;
    this.activeItemChange.emit(item);
  }
  public mouseLeave(): void {
    this.isDown = false;
  }
  public mouseDown(e: MouseEvent): void {
    this.isDown = true;
    this.startX = e.pageX - this.tabMenu.content?.nativeElement.offsetLeft;
    const content = this.tabMenu.content?.nativeElement;
    this.scrollLeft = content.scrollLeft;
  }
  public mouseMove(e: MouseEvent): void {
    if (!this.isDown) return;
    const x: number = e.pageX - this.tabMenu.content?.nativeElement.offsetLeft;
    const walk: number = x - this.startX;
    const content = this.tabMenu.content?.nativeElement;
    const width = DomHandler.getWidth(content) - this.tabMenu.getVisibleButtonWidths();
    let finalPos: number = this.scrollLeft - walk;
    if (finalPos < 0) {
      finalPos = 0;
    }
    const lastPos = content.scrollWidth - width;
    if (finalPos > lastPos) {
      finalPos = lastPos;
    }
    content.scrollLeft = finalPos;
  }
}
