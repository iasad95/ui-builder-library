import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TooltipDirectionPreference } from '../../enums/tooltip-direction-preference';
@Component({
  selector: 'lib-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelComponent {
  @Input() title: string;
  @Input() hideDefaultHeader: boolean;
  @Input() expanded: boolean = true;
  @Input() showToggleText: boolean = false;
  @Input() descriptionText: string = '';
  @Input() collapsedHeaderIcon: string;
  @Input() expandedHeaderIcon: string;
  @Output() expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  public DirectionPreference = TooltipDirectionPreference;
  public togglePanel(): void {
    this.expanded = !this.expanded;
  }
  public handleHeaderClick($event): void {
    if (this.showToggleText) $event.stopPropagation();
  }
}
