import { StatusTypes } from '../../enums/status-types';
export class FormBannerConfig {
  constructor(
    public statusType: StatusTypes,
    public actionLink?: string,
    public actionLinkText?: string,
  ) {}
}
