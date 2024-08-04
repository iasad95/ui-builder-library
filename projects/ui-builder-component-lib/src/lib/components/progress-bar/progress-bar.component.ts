import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'lib-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent implements OnInit {
  @Input() progBarCurrentStep: number;
  @Input() progBarTotalSteps: number;
  public totalStepsArr = [];
  public stepWeight: number;
  constructor(private cdref: ChangeDetectorRef) {}
  ngOnInit() {
    this.totalStepsArr = Array(this.progBarTotalSteps).fill(0);
    this.stepWeight = 100 / this.progBarTotalSteps;
    this.cdref.detectChanges();
  }
}
