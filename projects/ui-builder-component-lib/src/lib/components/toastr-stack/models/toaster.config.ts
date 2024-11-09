import { TemplateRef } from '@angular/core';
import { ToastrDescription } from '../enums/toastr-description.enum';
import { ToastrPosition } from '../enums/toastr-position.enum';
import { ToastrSeverity } from '../enums/toastr-severity.enum';
export interface ToasterConfig {
  token: string;
  severity?: ToastrSeverity;
  title: string;
  description: { content: string | TemplateRef<void>; type: ToastrDescription };
  life?: number;
  loading?: boolean;
  clickToClose?: boolean;
  hideClose?: boolean;
  markCheck?: boolean;
  position: ToastrPosition;
  button?: {
    name?: string;
    onClick?: () => void;
  };
}
