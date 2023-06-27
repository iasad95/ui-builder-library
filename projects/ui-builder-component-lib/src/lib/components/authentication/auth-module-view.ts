import { ChangeDetectionStrategy, Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AuthIcons } from '../../types/auth-icons';
import { AbstractAuthService } from './abstract-auth.service';
@Component({ template: '', changeDetection: ChangeDetectionStrategy.OnPush })
export abstract class AuthModuleViewComponent implements OnInit, OnDestroy {
  @Input() viewEntered$: Subject<void>;
  public continueButtonText: string = 'SEND';
  public previousRouteUrl: string;
  public showBackButton: boolean = true;
  public showFooter: boolean = true;
  public form: FormGroup | FormControl;
  public username: string;
  public icons: AuthIcons;
  public loading$: Observable<boolean>;
  public componentDestroyed$: Subject<void>;
  constructor(@Inject(AbstractAuthService) public authService: AbstractAuthService) {}
  ngOnInit(): void {
    this.loading$ = this.authService.loading$;
    this.username = this.authService.username;
    this.icons = this.authService.icons;
    this.form = new FormControl(true);
    this.componentDestroyed$ = new Subject();
    this.viewEntered$.pipe(takeUntil(this.componentDestroyed$)).subscribe(() => {
      this.authService.currentView = this;
      this.authService.showFooter$.next(this.authService.currentView.showFooter);
      this.authService.formSwitcher$.next(this.authService.currentView.form);
      this.authService.setShowBackBtn(this.authService.currentView.showBackButton);
    });
  }
  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
  abstract onSubmit(): void;
}
