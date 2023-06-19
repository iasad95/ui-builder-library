import { ElementRef } from '@angular/core';
import { StatusTypes } from '../enums/status-types';
export interface StatusMessage {
  type: StatusTypes;
  header: string;
  message: string;
  actionLink?: string;
  actionLinkText?: string;
  delay?: number;
  stayActive?: boolean;
  showIcon?: boolean;
  notificationTemplate?: ElementRef;
}
