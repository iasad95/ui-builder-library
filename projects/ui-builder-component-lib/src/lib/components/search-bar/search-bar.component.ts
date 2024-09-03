import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
export enum Orders {
  SIC = 'SIC',
  ICS = 'ICS',
  CIS = 'CIS',
}
@Component({
  selector: 'lib-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SearchBarComponent {
  @Input() placeholderText: string;
  @Input() inputText: string;
  @Input() order: Orders = Orders.CIS;
  @Input() clearIcon: string;
  @Input() searchIcon: string;
  @Output() searchStringChange = new EventEmitter();
  @Output() cleared = new EventEmitter();
  @Output() focused = new EventEmitter();
  @Output() unfocused = new EventEmitter();
  @ViewChild('searchInput', { static: true }) input: ElementRef;
  public orders = Orders;
  public clear() {
    this.inputText = '';
    this.searchStringChange.emit('');
    this.cleared.emit();
  }
  public focus() {
    this.input.nativeElement.focus();
  }
  public handleFocus() {
    this.focused.emit();
  }
  public handleFocusOut() {
    this.unfocused.emit();
  }
  public emit() {
    this.searchStringChange.emit(this.input.nativeElement.value);
  }
}
