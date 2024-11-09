import { ToastrActionInitiator } from '../enums/action-initiator.enum';
import { ToastrActionType } from '../enums/action-type.enum';
import { ToasterConfig } from '../models/toaster.config';
export interface ToastrActionEvent {
  type: ToastrActionType;
  initiator: ToastrActionInitiator;
  config: ToasterConfig;
}
