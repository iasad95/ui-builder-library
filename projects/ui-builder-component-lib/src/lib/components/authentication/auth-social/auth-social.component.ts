import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AuthProviders } from '../../../enums/auth-providers.enum';
import { AbstractAuthService } from '../abstract-auth.service';
@Component({
  selector: 'lib-auth-social',
  templateUrl: './auth-social.component.html',
  styleUrls: ['./auth-social.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSocialComponent {
  @Input() public icons: { google: string; facebook: string; twitter: string };
  public providers = AuthProviders;
  constructor(private authService: AbstractAuthService) {}
  public socialLogin = (provider: AuthProviders): void => this.authService.socialLogin(provider);
}
