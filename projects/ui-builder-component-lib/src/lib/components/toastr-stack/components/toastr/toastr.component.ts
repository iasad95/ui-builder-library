import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, first, takeUntil } from 'rxjs';
import { ToastrActionEvent } from '../../interfaces/toastr-action.interface';
import { ToasterConfig } from '../../models/toaster.config';
import { LibToastrService } from './toastr.service';
@Component({
  selector: 'lib-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss'],
  providers: [LibToastrService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibToastrComponent implements OnInit, OnDestroy {
  @Input() config: ToasterConfig;
  @Output() closeClick = new EventEmitter();
  @Output() checkboxChange = new EventEmitter();
  public toasterLife: number;
  public show: boolean;
  public toasterIcon: string;
  public timeout: number;
  public checkbox: boolean;
  public destroy$: Subject<void>;
  public animationDuration: number;
  public toastrExiting: boolean;
  public selfKill: boolean;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private libToastrService: LibToastrService,
  ) {}
  ngOnInit(): void {
    this.toasterLife = 2000;
    this.show = false;
    this.destroy$ = new Subject<void>();
    this.checkbox = false;
    this.toastrExiting = false;
    this.selfKill = true;
    this.animationDuration = this.libToastrService.toastrAnimationDuration;
    this.libToastrService.toastrConfig = this.config;
    this.libToastrService.mouseOver$.pipe(takeUntil(this.destroy$)).subscribe((isMouseOver: boolean) => {
      if (isMouseOver) {
        this._clearTime();
      } else {
        this._initTimeout();
      }
    });
    this.libToastrService
      .onToastrReplacementEvent()
      .pipe(first())
      .subscribe((toastrActionEvent: ToastrActionEvent) => {
        this.selfKill = false;
        this.performToastrCleanupRitual(toastrActionEvent.config);
      });
    this.libToastrService
      .onToastrDeletionEvent()
      .pipe(first())
      .subscribe((toastrActionEvent: ToastrActionEvent) => {
        this.selfKill = true;
        this.performToastrCleanupRitual(toastrActionEvent.config);
      });
    this._initToaster();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  private _initToaster(): void {
    this.show = true;
    this.checkbox = false;
    this.toasterIcon = this.config.severity + '.svg';
    if (this.config.life && this.config.life > this.toasterLife) {
      this.toasterLife = this.config.life;
    }
    if (!this.config.clickToClose || this.config.hideClose) this._initTimeout();
    this.changeDetectorRef.detectChanges();
  }
  private _initTimeout(): void {
    this.timeout = setTimeout(() => {
      this.performToastrCleanupRitual();
      this.changeDetectorRef.detectChanges();
    }, this.toasterLife);
  }
  private _clearTime(): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    this.changeDetectorRef.detectChanges();
  }
  public onCloseIconClick(event: Event): void {
    this.performToastrCleanupRitual();
    this.closeClick.emit();
    event.preventDefault();
    this.changeDetectorRef.detectChanges();
  }
  public onCheckboxChange(): void {
    this.checkbox = !this.checkbox;
    this.checkboxChange.emit({ checked: this.checkbox });
    this.changeDetectorRef.detectChanges();
  }
  public mouseOver(mouseState: boolean): void {
    this.libToastrService.setMouseOverState(mouseState);
  }
  public performToastrCleanupRitual(updatedToastrConfig?: ToasterConfig): void {
    if (!this.toastrExiting) {
      this._clearTime();
      setTimeout(() => {
        if (this.selfKill) {
          this.libToastrService.emitToastrDeletionEvent(this.config);
        } else {
          this.libToastrService.emitToastrReplacementEvent(updatedToastrConfig);
        }
      }, this.animationDuration);
    }
    this.toastrExiting = true;
    this.changeDetectorRef.detectChanges();
  }
}
