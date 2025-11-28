import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ToastrData, ToastrDescription, ToastrPosition, ToastrSeverity, ToastrStackConfig } from 'ui-builder-component-lib';
import { CommonOperations } from 'projects/ui-builder-component-lib/src/lib/operations/operations';

@Component({
  selector: 'app-toastr-demo',
  templateUrl: './toastr-demo.component.html',
  styleUrls: ['./toastr-demo.component.scss'],
})
export class ToastrDemoComponent implements OnInit {
  @ViewChild('toasterTemplateTest', { read: TemplateRef }) componentTemplate: TemplateRef<void>;
  public toastrData: ToastrData;
  public closeIcon: string;
  public checkIcon: string;

  public config: ToastrStackConfig;

  public toastrPosition: ToastrPosition;
  public toastrPositions: Array<ToastrPosition>;

  public toastrTitle: string;
  public toastrDescriptionString: string;
  public toastrDescriptionType: ToastrDescription;
  public toastrDescriptionTypes: Array<ToastrDescription>;

  public toastrSeverity: ToastrSeverity;
  public toastrSeverities: Array<ToastrSeverity>;

  public toastrLoadingBar: boolean;
  public toastrMarkCheck: boolean;
  public toastrLife: number;
  public toastrToken: string;
  public toastrButtonName: string;
  public toastrHideCloseButton: boolean;

  public maxToastrsLimit: number;
  public libToastrStackCode: string;

  ngOnInit(): void {
    this.closeIcon = 'assets/icons/close.svg';
    this.checkIcon = 'assets/icons/check.svg';
    this.toastrPositions = Object.values(ToastrPosition);
    this.toastrPosition = ToastrPosition.RightTop;

    this.toastrTitle = 'Toastr Title';
    this.toastrDescriptionString = 'Description of a toastr will be displayed here';

    this.toastrSeverity = ToastrSeverity.SUCCESS;
    this.toastrSeverities = Object.values(ToastrSeverity);

    this.toastrDescriptionType = ToastrDescription.STRING;
    this.toastrDescriptionTypes = Object.values(ToastrDescription);

    this.toastrLoadingBar = false;
    this.toastrMarkCheck = false;
    this.toastrLife = 2000;
    this.toastrHideCloseButton = false;

    this.toastrToken = 'success-toastr';
    this.toastrButtonName = 'click me';
    this.maxToastrsLimit = 3;

    this.libToastrStackCode = `<lib-toastr-stack [config]="config" [position]="toastrPosition" [max]="maxToastrsLimit"></lib-toastr-stack>`;
  }

  public setRandomToasterConfig(): void {
    this.config = {
      title: this.toastrTitle,
      severity: this.toastrSeverities[Math.floor(Math.random() * this.toastrSeverities.length)],
      description: { type: ToastrDescription.STRING, content: this.toastrDescriptionString },
      loading: true,
      token: CommonOperations.randomString(),
    };
  }

  public showToastr(): void {
    const content = this.toastrDescriptionType === ToastrDescription.TEMPLATE ? this.componentTemplate : this.toastrDescriptionString;
    this.config = {
      title: this.toastrTitle,
      severity: this.toastrSeverity,
      description: { type: this.toastrDescriptionType, content },
      loading: this.toastrLoadingBar,
      life: this.toastrLife,
      markCheck: this.toastrMarkCheck,
      token: this.toastrToken,
      hideClose: this.toastrHideCloseButton,
      button: {
        name: this.toastrButtonName,
        onClick: () => {
          this.toastrButtonClickSample();
        },
      },
    };
  }

  private toastrButtonClickSample(): void {
    // Following console.log left for demo purpose
    // eslint-disable-next-line no-console
    console.log('button clicked');
  }
}
