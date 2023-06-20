import { ToastrSeverity } from '../../public-api';
export interface MapsAlertModel {
  title: string;
  message: string;
  severity: ToastrSeverity;
}
