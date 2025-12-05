import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToggleVariants } from 'ui-builder-component-lib';

@Component({
  selector: 'app-toggle-demo',
  templateUrl: './toggle-demo.component.html',
  styleUrls: ['./toggle-demo.component.scss'],
})
export class ToggleDemoComponent {
  public TOGGLE_VARIANTS = ToggleVariants;
  public toggleState: boolean = false;
  public fcToggleState: FormControl<boolean> = new FormControl<boolean>(false);
  public codeExample0: string = '<lib-toggle id="toggle-button-elem" [(toggleState)]="toggleState" (toggleStateChange)="onToggleChange($event)"></lib-toggle>';
  public codeExample1: string = '<lib-toggle id="toggle-button-elem" [formControl]="fcToggleState"></lib-toggle>';
  public codeExample2: string = '<lib-toggle id="toggle-button-elem" [disabled]="true"></lib-toggle>';
  public codeExample4: string = `<lib-toggle
            id="toggle-button-elem-custom-icon"
            [formControl]="fcToggleState"
            [graphics]="{ thumb: { img: 'assets/icons/practise-mode.svg' }, left: { text: { disable: 'ON' } }, right: { text: { disable: 'Off' } } }"
            [variant]="TOGGLE_VARIANT.GraphicText"
          ></lib-toggle>
  `;
  public codeExample5: string = `<lib-toggle
            id="toggle-button-elem-custom-icon"
            [formControl]="fcToggleState"
            [graphics]="{
              left: {
                img: {
                  enable: 'assets/icons/phone.svg',
                  disable: 'assets/icons/disable-phone.svg'
                }
              },
              right: {
                img: {
                  enable: 'assets/icons/mail.svg',
                  disable: 'assets/icons/disable-mail.svg'
                }
              }
            }"
            [variant]="TOGGLE_VARIANT.GraphicImage"
          ></lib-toggle>`;

  /**
   * Method is invoked on toggle value change
   *
   * @param { boolean } value - Toggle state value, it is either true or false
   */
  public onToggleChange(value: boolean): void {
    // Purposely leaving a console.log to demonstrate the onToggleChange
    // eslint-disable-next-line no-console
    console.log({ value });
  }
}
