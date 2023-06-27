import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { distinctUntilChanged, Observable } from 'rxjs';
import { LibMenuItem } from '../../../model/lib-menu-item';
import { AbstractAuthService } from '../abstract-auth.service';
@Component({
  selector: 'lib-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthHeaderComponent implements OnInit {
  public languagesMenuItems: LibMenuItem[] = [];
  public themesMenuItems: LibMenuItem[] = [];
  public showBackBtn$: Observable<boolean>;
  constructor(
    private authService: AbstractAuthService,
    private nav: NavController,
  ) {}
  ngOnInit(): void {
    this.showBackBtn$ = this.authService.showBackBtn$.pipe(distinctUntilChanged());
    this.buildHeaderMenus();
  }
  public changeTheme = (theme: string): void => this.authService.changeTheme(theme);
  public changeLanguage = (lang: string): void => this.authService.changeLanguage(lang);
  public gotToPreviousRoute(): void {
    if (this.authService.currentView.previousRouteUrl) {
      this.nav.navigateBack(this.authService.currentView.previousRouteUrl, {
        animated: true,
        animationDirection: 'back',
      });
    } else {
      this.nav.back();
    }
  }
  private buildHeaderMenus(): void {
    this.authService.languages?.forEach((language) =>
      this.languagesMenuItems.push({
        title: language.name,
        command: () => this.changeLanguage(language.key),
        active: language.key === this.authService.activeLanguageKey,
      }),
    );
    this.authService.themes?.forEach((theme) =>
      this.themesMenuItems.push({
        title: theme.name,
        command: () => this.changeTheme(theme.key),
        active: theme.key === this.authService.activeThemeKey,
      }),
    );
  }
}
