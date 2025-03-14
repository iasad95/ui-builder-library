import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ItemActionHandler, ItemInfoLine, ItemSummary } from 'ui-builder-component-lib';

@Component({
  selector: 'app-info-card-demo',
  templateUrl: './info-card-demo.component.html',
  styleUrls: ['./info-card-demo.component.scss'],
})
export class InfoCardDemoComponent implements OnInit {
  public item: ItemSummary<any>;
  public checkable = false;
  public checked = false;
  public selectable = false;
  public infoCardDemo: string = `<lib-info-card
      [item]="exampleItemSummary"
      [checkable]="true"
      [checked]="true"
      [selectable]="true"
      (checkedChange)="handleCheckedChange($event)"
  ></lib-info-card>`;

  private addIcon: SafeHtml;
  private addActionHandler: ItemActionHandler;
  private addFunction: (arg: ItemSummary<any>) => any;
  private subtractIcon: SafeHtml;
  private subtractActionHandler: ItemActionHandler;
  private subtractFunction: (arg: ItemSummary<any>) => any;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    const icon = new ItemActionHandler(this.domSanitizer.bypassSecurityTrustHtml('<i class="icon icon-star" style="color:#EDC51D;"></i>'), null, 'Test tooltip');
    this.item = new ItemSummary(
      new ItemInfoLine('Carl Contractor', 'Last communication: 5/18/19', null, [icon, icon, icon]),
      [new ItemInfoLine('ABC Contracting', 'Austin, TX', null, [icon, icon, icon])],
      [new ItemInfoLine('Landscaping', 'test', null, [icon, icon, icon]), new ItemInfoLine('Roofing', 'test', null, [icon, icon, icon])],
      null,
    );

    this.item.abbreviation = 'CC';
    this.item.visualIcon = this.domSanitizer.bypassSecurityTrustHtml('<img src="assets/sparkle-large.gif" style="height:50px; margin-top:10px">');

    this.addIcon = this.domSanitizer.bypassSecurityTrustHtml('<i class="icon icon-plus-square" style="color:#10365A;"></i>');
    this.subtractIcon = this.domSanitizer.bypassSecurityTrustHtml('<i class="icon icon-minus-square"></i>');

    this.addFunction = (item: ItemSummary<any>) => {
      item.actionHandler = this.subtractActionHandler;
      alert('Action "Add" called on item "' + item.header.label + '"');
    };
    this.subtractFunction = (item: ItemSummary<any>) => {
      item.actionHandler = this.addActionHandler;
      alert('Action "Subtract" called on item "' + item.header.label + '"');
    };

    this.addActionHandler = new ItemActionHandler(this.addIcon, this.addFunction, 'default tooltip.');
    this.subtractActionHandler = new ItemActionHandler(this.subtractIcon, this.subtractFunction);

    this.item.actionHandler = this.addActionHandler;
  }

  public handleDemoCheckedChange(event: { item: ItemSummary<any>; checked: boolean }) {
    this.checked = event.checked;
    alert('checkedChange event fired with value ' + event.checked + ' on item "' + event.item.header.label + '"');
  }

  public handleItemSelected(item: ItemSummary<any>) {
    alert('Item "' + item.header.label + '" selected.');
  }
}
