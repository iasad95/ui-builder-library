import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';
import { BaseDemoComponent } from '../../base-component/base-component';

@Component({
  selector: 'app-circle-progress-demo',
  templateUrl: './circle-progress-demo.component.html',
  styleUrls: ['./circle-progress-demo.component.scss'],
})
export class CircleProgressDemoComponent extends BaseDemoComponent implements OnInit, OnDestroy {
  public width = '50px';
  public rangeControl: FormControl<number> = new FormControl(50);
  public circleProgressCode: string = `<lib-circle-progress [max]="max" [value]="value" [imageUrl]="imageUrl"></lib-circle-progress>`;

  private componentDestroyed$: Subject<void> = new Subject();

  ngOnInit(): void {
    this.rangeControl.valueChanges
      .pipe(
        tap((res) => {
          this.width = res + 'px';
        }),
        takeUntil(this.componentDestroyed$),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  public onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.width = input.value + 'px';
  }
}
