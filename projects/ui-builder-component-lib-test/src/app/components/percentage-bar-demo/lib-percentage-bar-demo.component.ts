import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percentage-bar-demo',
  templateUrl: './lib-percentage-bar-demo.component.html',
  styleUrls: ['./lib-percentage-bar-demo.component.scss'],
})
export class PercentageBarDemoComponent implements OnInit {
  public libDemoPercentageBar: string;
  ngOnInit(): void {
    this.libDemoPercentageBar = `<lib-percentage-bar [value]="90">90% Counter-Strike Downloaded</lib-percentage-bar>`;
  }
}
