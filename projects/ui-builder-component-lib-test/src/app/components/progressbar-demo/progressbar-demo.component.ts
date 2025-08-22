import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IRouteParams } from 'ui-builder-component-lib';

@Component({
  selector: 'app-progressbar-demo',
  templateUrl: './progressbar-demo.component.html',
  styleUrls: ['./progressbar-demo.component.scss'],
})
export class ProgressbarDemoComponent {
  public progressbarCode: string = `<lib-preview-window
    [routes]="routes"
    [stepWeight]="20"
    [progress]="40"
    [farthestProgress]="80"
  ></lib-preview-window>`;

  public routes: IRouteParams[] = [
    {
      key: 'popper',
      value: '/popper',
      previewThumbnail: 'assets/popper.png',
      pageTitle: 'Title',
      stepStart: true,
    },
    {
      key: 'popup-modal',
      value: '/popup-modal',
      previewThumbnail: 'assets/modal.png',
      pageTitle: 'Title',
      stepStart: true,
    },
    {
      key: 'json-editor',
      value: '/json-editor',
      previewThumbnail: 'assets/json.png',
      pageTitle: 'Title',
      stepStart: true,
    },
    {
      key: 'grid',
      value: '/grid',
      previewThumbnail: 'assets/grid.png',
      pageTitle: 'Title',
      stepStart: true,
      subRoutes: [
        {
          key: 'grid',
          value: '/grid',
          previewThumbnail: 'assets/grid.png',
          pageTitle: 'Sub Title1',
          stepStart: true,
        },
        {
          key: 'grid',
          value: '/grid',
          previewThumbnail: 'assets/grid.png',
          pageTitle: 'Sub Title2',
          stepStart: true,
        },
      ],
    },
  ];
  public stepWeight: number = 25;
  public progress: number = 50;
  public availableFarthestProgress: number = 50;
  public farthestProgress: number = 100;
  public includeSteps: FormControl<boolean> = new FormControl(true);
  public includeStepsCount: FormControl<boolean> = new FormControl(true);
  constructor(private router: Router) {}

  public routeFns = {
    routeToNextPage: (url: string) => this.router.navigate([url]),
    routeBackinRegistrationFlow: (url: string) => this.router.navigate([url]),
  };
}
