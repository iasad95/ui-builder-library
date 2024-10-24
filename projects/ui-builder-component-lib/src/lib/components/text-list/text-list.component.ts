import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'lib-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextListComponent {
  @Input() textListStrings: string[] = [];
  @Input() placeholderText: string;
  @Input() isUrlList: boolean = false;
  @Input() disabled: boolean = false;
  public buttonsHidden: boolean = false;
  public showIndex: number = -1;
  public textValue: string = '';
  @Output() listChange: EventEmitter<string[]> = new EventEmitter();
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  public addTextItem(): void {
    const text = this.textValue.trim();
    if (text !== '') {
      this.textListStrings.push(text);
      this.listChange.emit(this.textListStrings);
    } else {
      return;
    }
    this.textValue = '';
  }
  public deleteTextItem(text: string): void {
    this.textListStrings.splice(this.textListStrings.indexOf(text), 1);
    this.listChange.emit(this.textListStrings);
  }
  public handleButtonToggle(): void {
    this.changeDetectorRef.detectChanges();
  }
  public hideButtons(): void {
    this.buttonsHidden = true;
    this.changeDetectorRef.detectChanges();
  }
  public onKeyUp(event: KeyboardEvent, text: string): void {
    if (event.key === 'Enter') {
      this.addTextItem();
    }
  }
  public openUrl(item: string): void {
    try {
      new URL(item);
      window.open(item, '_blank');
    } catch {
      if (item) {
        window.open(encodeURI(`https://google.com/search?q=${item}`), '_blank');
      }
    }
  }
  public cancel($event): void {
    this.textValue = '';
    this.changeDetectorRef.detectChanges();
  }
}
