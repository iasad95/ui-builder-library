import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ToastrActionInitiator } from './enums/action-initiator.enum';
import { ToastrActionType } from './enums/action-type.enum';
import { ToastrPosition } from './enums/toastr-position.enum';
import { ToastrActionEvent } from './interfaces/toastr-action.interface';
import { ToasterConfig } from './models/toaster.config';
import { ToastrStackConfig } from './models/toastr-stack.config';
import { LibToastrStackService } from './toastr-stack.service';
@Component({
  selector: 'lib-toastr-stack',
  templateUrl: './toastr-stack.component.html',
  styleUrls: ['./toastr-stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibToastrStackComponent implements OnInit, OnChanges {
  public configs: Array<ToasterConfig>;
  private destroy$: Subject<void>;
  @Input() private max: number;
  @Input() public position: ToastrPosition;
  @Input() public config: ToastrStackConfig;
  constructor(
    private cdr: ChangeDetectorRef,
    private toastrStackService: LibToastrStackService,
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['config'] && changes['config'].currentValue) {
      const config: ToasterConfig = {
        ...changes['config'].currentValue,
        position: this.position,
      };
      if (this.configs.map(({ token }) => token).includes(config.token)) {
        const toastrReplacementActionEvent: ToastrActionEvent = {
          type: ToastrActionType.REPLACEMENT,
          initiator: ToastrActionInitiator.CONTROLLER,
          config,
        };
        this.toastrStackService.emitToastrEvent(toastrReplacementActionEvent);
      } else {
        this.configs.push(config);
      }
      if (this.configs.length > this.max) {
        const toastrLimitActionEvent: ToastrActionEvent = {
          type: ToastrActionType.DELETION,
          initiator: ToastrActionInitiator.CONTROLLER,
          config: this.configs[this.configs.length - (this.max + 1)],
        };
        this.toastrStackService.emitToastrEvent(toastrLimitActionEvent);
      }
      this.cdr.detectChanges();
    }
  }
  ngOnInit(): void {
    this.position = this.position || ToastrPosition.RightTop;
    this.max = this.max || 5;
    this.configs = this.configs || [];
    this.destroy$ = new Subject<void>();
    this.toastrStackService.toastrChanges.pipe(takeUntil(this.destroy$)).subscribe((toastrActionEvent: ToastrActionEvent) => {
      if (toastrActionEvent && toastrActionEvent?.config && toastrActionEvent.initiator === ToastrActionInitiator.TOASTR) {
        switch (toastrActionEvent.type) {
          case ToastrActionType.DELETION:
            this.configs = this.configs.filter((config) => config.token !== toastrActionEvent.config.token);
            break;
          case ToastrActionType.REPLACEMENT:
            this.configs = this.configs.filter((config) => config.token !== toastrActionEvent.config.token).concat(toastrActionEvent.config);
            break;
        }
        this.cdr.detectChanges();
      }
    });
    this.cdr.detectChanges();
  }
}
