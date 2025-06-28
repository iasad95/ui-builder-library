import { Component } from '@angular/core';

@Component({
  selector: 'app-popper-demo',
  templateUrl: './popper-demo.component.html',
  styleUrls: ['./popper-demo.component.scss'],
})
export class PopperDemoComponent {
  public popperCode: string = `<lib-primary-btn libPopper
          [popper]="popperContent"
          [popperTrigger]="'click'"
          [popperHideOnClickOutside]="false"
          [popperApplyArrowClass]="'popperArrowStyle'"
          [popperHideOnScroll]="false"
          [popperShowBackdrop]="true"
          >Open Popper</lib-primary-btn>`;
  public popperContentTemplate: string = `
  <lib-popper-content #popperContent>
  <div class="popover-container">
    <div class="m-title f-w-700 f-lg h-160 f-white">Popper Title</div>
    <span class="message f-w-400 f-md h-150 f-gray">Popper content</span>
    <div class="buttons">
      <lib-secondary-btn (click)="popperContent.hide()" type="button"> Cancel </lib-secondary-btn>
      <lib-primary-btn (click)="popperContent.hide()" type="button"> Confirm </lib-primary-btn>
    </div>
  </div>
</lib-popper-content>
`;
}
