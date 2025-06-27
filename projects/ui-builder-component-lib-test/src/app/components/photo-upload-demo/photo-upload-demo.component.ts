import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ImageModel, NsfwClasses, PopupModalService } from 'ui-builder-component-lib';

import { Observable, catchError, from, of } from 'rxjs';

@Component({
  selector: 'app-photo-upload-demo',
  templateUrl: './photo-upload-demo.component.html',
  styleUrls: ['./photo-upload-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosUploadDemoComponent implements OnInit {
  public photos: ImageModel[] = [];
  public skeletonLoaders: boolean[] = [false, false, false, false];
  public imageBeingLoaded: boolean = false;
  public imageBeingModerated: boolean = false;
  public codeExample: string = `
    <lib-picture-gallery [faceDetector]="faceDetector.bind(this)" [nsfwChecker]="nsfwDetector.bind(this)" [enableNsfwCheck]="true" [enableFaceCheck]="true"></lib-picture-gallery>
  `;

  public largeFileUploadParams = {
    icon: 'nothing',
    confirmButton: 'UNMATCHED_USER.UPLOAD_ANYWAY',
    cancelButton: 'UNMATCHED_USER.CANCEL',
    title: 'UNMATCHED_USER.UPLOAD_WARNING',
    message: 'UNMATCHED_USER.UPLOAD_WARNING_MESSAGE',
  };

  public showFooter: boolean = true;
  public form = new FormControl<boolean>(null, [Validators.required]);
  private worker: ServiceWorkerRegistration;

  constructor(
    public route: ActivatedRoute,
    public modalFactoryService: PopupModalService,
  ) {}

  ngOnInit(): void {
    if ('serviceWorker' in navigator) {
      from(navigator.serviceWorker.register('/assets/service-workers/nsfw.js')).subscribe((registration) => {
        this.worker = registration;

        if (!navigator.serviceWorker.controller) {
          from(navigator.serviceWorker.ready).subscribe(() => {
            this.worker.active?.postMessage({ action: 'loadModels' });
          });
        } else {
          this.worker.active?.postMessage({ action: 'loadModels' });
        }

        // Listen for updates
        registration.onupdatefound = () => {
          const newWorker = registration.installing;
          newWorker.onstatechange = () => {
            if (newWorker.state === 'activated' && navigator.serviceWorker.controller) {
              window.location.reload();
            }
          };
        };

        this.loadModels().subscribe();
      });
    }
  }

  public faceDetector(image: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      navigator.serviceWorker.addEventListener('message', (event: MessageEvent) => {
        if (event?.data?.action === 'facesDetected') {
          observer.next(event?.data?.faces?.length > 0);
          observer.complete();
        }
      });
      this.worker.active?.postMessage({ action: 'detectFaces', imageUrl: image });
    }).pipe(catchError((err) => of(false)));
  }

  public nsfwDetector(image: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      navigator.serviceWorker.addEventListener('message', (event: MessageEvent) => {
        if (event?.data?.action === 'imageClassified') {
          const nsfwClass = event.data.classifications[0].className; // Classifications contain the top three guesses for the input image, but we only need the first guess for our purposes
          observer.next(nsfwClass === NsfwClasses.NEUTRAL || nsfwClass === NsfwClasses.SEXY);
          observer.complete();
        }
      });
      this.worker.active?.postMessage({ action: 'classifyImage', imageUrl: image });
    }).pipe(catchError((err) => of(false)));
  }

  private loadModels(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      navigator.serviceWorker.addEventListener('message', (event: MessageEvent) => {
        if (event?.data?.action === 'modelsLoaded') {
          observer.next(true);
          observer.complete();
        }
      });

      this.worker.active?.postMessage({ action: 'loadModels' });
    }).pipe(catchError((err) => of(false)));
  }
}
