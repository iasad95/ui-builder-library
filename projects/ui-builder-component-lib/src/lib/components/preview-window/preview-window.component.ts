import { ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subject, take } from 'rxjs';
import { IRouteParams } from './route-params.interface';
@Component({
  selector: 'lib-preview-window',
  templateUrl: './preview-window.component.html',
  styleUrls: ['./preview-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewWindowComponent implements OnDestroy {
  @ViewChild('thumbnail') thumbnail: ElementRef;
  @Input() stepWeight: number;
  @Input() routes: IRouteParams[];
  @Input() includeSteps: boolean;
  @Input() includeStepsCount: boolean;
  @Input() progress: number = 0;
  @Input() availableFarthestProgress: number = 0;
  @Input() farthestProgress: number = 0;
  @Input() canContinue$: Observable<boolean>;
  @Input() router: {
    routeToNextPage: (user: {}, storage: boolean, url: string) => void;
    routeBackinRegistrationFlow: (url: string) => void;
    routeToPage?: (url: string) => void;
    shouldINavigateOnClick?: (url: string) => boolean;
  };
  public thumbnailUrl: string = '';
  public displayThumbnail: boolean = false;
  public selectedRoute: IRouteParams;
  private unsubscribeAll: Subject<void> = new Subject();
  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.unsubscribe();
  }
  public onPress($event: MouseEvent, selectedRoute: IRouteParams): void {
    this.adoptElement($event, selectedRoute);
    this.showThumbnail($event);
  }
  public showThumbnail(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target?.classList.contains('preview-wrapper')) {
      return;
    }
    let offsetX = event.offsetX;
    if (target?.classList.contains('step')) {
      const stepRect = target.getBoundingClientRect();
      const parentNode = target.parentNode as HTMLElement;
      if (parentNode) {
        offsetX = stepRect.left - parentNode.getBoundingClientRect().left;
      }
    }
    this.displayThumbnail = true;
    this.thumbnail.nativeElement.style.left = offsetX + 'px';
  }
  public adoptElement(event: MouseEvent, selectedRoute: IRouteParams): void {
    this.selectedRoute = selectedRoute;
    this.thumbnailUrl = selectedRoute.previewThumbnail;
    const preview = this.thumbnail.nativeElement;
    this.thumbnail.nativeElement.style.left = event.offsetX + 'px';
    const target = event.currentTarget as HTMLElement;
    if (target) {
      target.appendChild(preview.parentNode.removeChild(preview));
    }
  }
  public mouseLeave(): void {
    this.displayThumbnail = false;
  }
  public navigateOnClick(url: string, progress: number): void {
    this.canContinue$?.pipe(take(1)).subscribe((canContinue) => {
      if ((progress >= this.progress && !canContinue) || !this.router.shouldINavigateOnClick(url) || progress >= this.farthestProgress) {
        return;
      }
      if (progress >= this.progress) {
        this.router.routeToNextPage({}, true, url);
      } else {
        this.router.routeBackinRegistrationFlow(url);
      }
    });
  }
  public navigateOnClickSubRoute(event: MouseEvent, url: string): void {
    event.stopPropagation();
    this.router.routeToPage(url);
  }
  public subRouteMouseMove(event: MouseEvent): void {
    event.stopPropagation();
  }
}
