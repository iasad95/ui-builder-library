import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tab-menu-demo',
  templateUrl: './tab-menu-demo.component.html',
  styleUrl: './tab-menu-demo.component.scss',
})
export class TabMenuDemoComponent implements OnInit {
  public items: MenuItem[] = [];
  public codeExample: string = `<lib-tab-menu [items]="items" (activeItemChange)="onActiveItemChange($event)" #libTabMenu></lib-tab-menu>`;

  ngOnInit() {
    this.items = Array.from({ length: 6 }, (_, i) => ({ label: `Tab ${i + 1}` }));
  }

  onActiveItemChange(menuItem: MenuItem): void {}
}
