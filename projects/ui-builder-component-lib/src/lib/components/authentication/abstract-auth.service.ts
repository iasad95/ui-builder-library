import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AuthProviders } from '../../enums/auth-providers.enum';
import { LoginFormType } from '../../enums/login-input-form.enum';
import { AuthModel } from '../../model/auth.models';
import { Language } from '../../model/language';
import { Theme } from '../../model/theme';
import { AuthIcons } from '../../types/auth-icons';
import { AuthModuleViewComponent } from './auth-module-view';
@Injectable()
export abstract class AbstractAuthService {
  private _loading$: BehaviorSubject<boolean>;
  public loading$: Observable<boolean>;
  private _showBackBtn$: BehaviorSubject<boolean>;
  public showBackBtn$: Observable<boolean>;
  private _secondsLeft$: BehaviorSubject<number>;
  public secondsLeft$: Observable<number>;
  public abstract icons: AuthIcons;
  public abstract username: string;
  public abstract languages: Language[];
  public abstract themes: Theme[];
  public abstract activeLanguageKey: string;
  public abstract activeThemeKey: string;
  public currentView: AuthModuleViewComponent;
  public showFooter$: Subject<boolean>;
  public formSwitcher$: Subject<FormGroup | FormControl>;
  constructor() {
    this._loading$ = new BehaviorSubject(false);
    this.loading$ = this._loading$.asObservable();
    this._showBackBtn$ = new BehaviorSubject(false);
    this.showBackBtn$ = this._showBackBtn$.asObservable();
    this._secondsLeft$ = new BehaviorSubject(30);
    this.secondsLeft$ = this._secondsLeft$.asObservable();
    this.showFooter$ = new Subject<boolean>();
    this.formSwitcher$ = new Subject<FormGroup | FormControl>();
  }
  public setLoading(loading: boolean) {
    this._loading$.next(loading);
  }
  public setShowBackBtn(showBackBtn: boolean) {
    this._showBackBtn$.next(showBackBtn);
  }
  public setSecondsLeft(secondsLeft: number) {
    this._secondsLeft$.next(secondsLeft);
  }
  public abstract login(request: AuthModel): void;
  public abstract socialLogin(provider: AuthProviders): void;
  public abstract navigateToRegister(): void;
  public abstract navigateToForgetPassword(email: string): void;
  public abstract changeTheme(theme: string): void;
  public abstract changeLanguage(lang: string): void;
  public abstract sendForgetPasswordRequest(request: { email: string }): void;
  public abstract verifyForgetPasswordRequest(request: { email: string; code: string }): void;
  public abstract verifyForgetPasswordRequestResend(request: { email: string }): void;
  public abstract sendResetPasswordRequest(request: { password: string; email: string }): void;
  public abstract onLoginFormTypeChange(loginFormType: LoginFormType): void;
}
