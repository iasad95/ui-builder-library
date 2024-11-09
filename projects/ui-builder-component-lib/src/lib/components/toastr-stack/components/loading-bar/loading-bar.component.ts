import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LibToastrService } from '../toastr/toastr.service';
@Component({
  selector: 'lib-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrl: './loading-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibLoadingBarComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void>;
  public mouseOver: boolean;
  @Input() toasterLife: number;
  constructor(
    private libToastrService: LibToastrService,
    private changeDetetorRef: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this.toasterLife = this.toasterLife || 0;
    this.destroy$ = new Subject<void>();
    this.mouseOver = false;
    this.libToastrService.mouseOver$.pipe(takeUntil(this.destroy$)).subscribe((mouseOver: boolean) => {
      this.mouseOver = mouseOver;
      this.changeDetetorRef.detectChanges();
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
