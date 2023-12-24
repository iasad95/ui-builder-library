import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ItemSummary } from '../../model/item-summary';
@Component({
  selector: 'lib-info-card-list',
  templateUrl: './info-card-list.component.html',
  styleUrls: ['./info-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoCardListComponent implements OnInit, OnDestroy {
  @Input() checkable = false;
  @Input() defaultCheckedValue = false;
  @Input() scrollable = false;
  @Input() filterable = true;
  @Input() selectable = false;
  @Input()
  set maxCount(value: number) {
    this._maxCount = value;
    if (this.itemList) {
      this.displayList = this.itemList.slice(0, this.maxCount);
    }
  }
  get maxCount(): number {
    return this._maxCount;
  }
  @Input()
  set itemList(value: ItemSummary<any>[]) {
    this._itemList = value;
    this.displayList = value.slice(0, this.maxCount);
  }
  get itemList(): ItemSummary<any>[] {
    return this._itemList;
  }
  @Input() itemType = '';
  @Output() checkedChange: EventEmitter<{
    item: ItemSummary<any>;
    checked: boolean;
  }> = new EventEmitter();
  @Output() itemSelected: EventEmitter<ItemSummary<any>> = new EventEmitter();
  public filterStringSubject: Subject<string> = new Subject();
  private componentDestroyed$: Subject<void> = new Subject();
  private _maxCount = 10;
  private _itemList: ItemSummary<any>[];
  public displayList: ItemSummary<any>[];
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit() {
    this.filterStringSubject
      .asObservable()
      .pipe(debounceTime(100), takeUntil(this.componentDestroyed$))
      .subscribe((filterValue: string) => {
        this.displayList = this._itemList
          .filter((item) => {
            const filterValueCapitalized = filterValue.toLocaleUpperCase();
            const searchStrings: string[] = [];
            if (item.header.label) {
              searchStrings.push(item.header.label.toLocaleUpperCase());
            }
            item.subheaders.forEach((subheader) => {
              if (subheader.label) {
                searchStrings.push(subheader.label.toLocaleUpperCase());
              }
            });
            item.details.forEach((detail) => {
              if (detail.label) {
                searchStrings.push(detail.label.toLocaleUpperCase());
              }
            });
            let retVal = false;
            searchStrings.forEach((searchString) => {
              if (searchString.includes(filterValueCapitalized)) {
                retVal = true;
              }
            });
            return retVal;
          })
          .slice(0, this.maxCount);
        this.changeDetectorRef.detectChanges();
      });
  }
  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
  public filterChange(filterValue: string): void {
    this.filterStringSubject.next(filterValue);
  }
  public handleCheckedValueChange(event: { item: ItemSummary<any>; checked: boolean }): void {
    this.checkedChange.emit(event);
  }
  public handleItemSelected(item: ItemSummary<any>): void {
    this.itemSelected.emit(item);
  }
}
