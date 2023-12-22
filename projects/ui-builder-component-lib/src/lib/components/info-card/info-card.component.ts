import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ItemInfoLine } from '../../model/item-info-line';
import { ItemSummary } from '../../model/item-summary';
@Component({
  selector: 'lib-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoCardComponent {
  @Input() item: ItemSummary<any>;
  @Input() checkable = false;
  @Input() checked = false;
  @Input() selectable = false;
  @Output() checkedChange: EventEmitter<{
    item: ItemSummary<any>;
    checked: boolean;
  }> = new EventEmitter();
  @Output() selected: EventEmitter<ItemSummary<any>> = new EventEmitter();
  public selectItem() {
    if (this.item && this.selectable && !this.item.disabled) {
      this.selected.emit(this.item);
    }
  }
  public selectHeader() {
    if (this.item && !this.item.disabled && !this.selectable && this.item.header.action) {
      this.item.header.action();
    }
  }
  public selectSubheader(subheader: ItemInfoLine) {
    if (subheader.action && !this.item.disabled && !this.selectable) {
      subheader.action();
    }
  }
  public selectDetail(detail: ItemInfoLine) {
    if (detail.action && !this.item.disabled && !this.selectable) {
      detail.action();
    }
  }
  public handleAction(action: (arg: ItemSummary<any>) => any) {
    if (action && !this.item.disabled && !this.selectable) {
      action(this.item);
    }
  }
  public handleCheckedValueChange(event: boolean) {
    if (!this.item.disabled && !this.selectable) {
      this.checkedChange.emit({
        item: this.item,
        checked: event,
      });
    }
  }
}
