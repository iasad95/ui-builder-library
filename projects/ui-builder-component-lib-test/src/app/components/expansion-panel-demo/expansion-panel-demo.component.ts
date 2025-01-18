import { Component } from '@angular/core';
import { BaseDemoComponent } from '../../base-component/base-component';

@Component({
  selector: 'app-expansion-panel-demo',
  templateUrl: './expansion-panel-demo.component.html',
  styleUrls: ['./expansion-panel-demo.component.scss'],
})
export class ExpansionPanelDemoComponent extends BaseDemoComponent {
  public expansionPanelCode: string = `<lib-expansion-panel [title]="'Panel Title'"><h1>panel content</h1></lib-expansion-panel>`;
  public expansionCollapsedPanelCode: string = `<lib-expansion-panel [title]="'Collapsed Panel'" [expanded]="false"><h1>panel content</h1></lib-expansion-panel>`;
  public collapsedPanelRightContentCode: string = `
       <lib-expansion-panel [title]="'Panel with a custom collapsed icon'" [expanded]="false">
        <h1>panel content</h1>
        <ng-container collapsedPanelRightContent>
          <img src="assets/icons/graph-svg.svg" alt="graph-svg.svg"/>
        </ng-container>
      </lib-expansion-panel>
  `;
  public panelHeaderRightContentCode: string = `
      <lib-expansion-panel [title]="'Panel with header right'">
        <h1>panel content</h1>
        <ng-container panelHeaderRightContent>Right content</ng-container>
      </lib-expansion-panel>
  `;
  public expansionPanelWithDescriptionCode: string = `
      <lib-expansion-panel [title]="'Panel Title'" [descriptionText]="'Expansion Panel Description'">
        <h1>panel content with description</h1>
      </lib-expansion-panel>
  `;
  public expansionPanelWithToggle: string = `
      <lib-expansion-panel [title]="'Panel Title'" [descriptionText]="'Expansion Panel with Toggle'" [showToggleText]="true">
        <h1>panel content with show more/less</h1>
      </lib-expansion-panel>
  `;
}
