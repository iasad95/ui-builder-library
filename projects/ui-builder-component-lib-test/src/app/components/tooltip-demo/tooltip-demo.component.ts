import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TooltipDirectionPreference } from 'ui-builder-component-lib';

@Component({
  selector: 'app-tooltip-demo',
  templateUrl: './tooltip-demo.component.html',
  styleUrls: ['./tooltip-demo.component.scss'],
})
export class TooltipDemoComponent implements OnInit {
  public directionPreference = TooltipDirectionPreference.Top;
  public tooltipText: SafeHtml;
  public tooltipDelay = 100;
  public directionPreferenceOptions = [
    { value: TooltipDirectionPreference.Top, caption: 'Top' },
    { value: TooltipDirectionPreference.Right, caption: 'Right' },
    { value: TooltipDirectionPreference.Bottom, caption: 'Bottom' },
    { value: TooltipDirectionPreference.Left, caption: 'Left' },
  ];
  public tooltipCode: string = `<div [libTooltip]="test tooltip" [delayTime]="500"></div>`;

  constructor(private domSantizier: DomSanitizer) {}

  ngOnInit() {
    this.tooltipText = this.domSantizier.bypassSecurityTrustHtml(
      "Lonnnnnnnnnnggggggg meeeeeeeeessssssaaaaaggggeeeee for test:<ul style='padding-left:15px;margin:5px 0'><li>Our lovely users</li><li>I'm sure I'll think of something else</li></ul>",
    );
  }
}
