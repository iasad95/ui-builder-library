import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { SelectOption } from '../../model/select-option';
@Component({
  selector: 'lib-rating-field',
  templateUrl: './rating-field.component.html',
  styleUrls: ['./rating-field.component.scss'],
})
export class RatingFieldComponent implements OnInit, OnDestroy {
  @Input() formFieldControl: FormControl<string>;
  @Input()
  public required = false;
  @Input()
  public label = '';
  @Input()
  public submitted = false;
  @Input()
  public showLabelInRequiredErrorMessage = true;
  @Input()
  public readOnly = false;
  @Input()
  public showRequiredIndicator = false;
  @Input()
  public options: SelectOption<string>[] = [];
  private componentDestroyed$: Subject<void> = new Subject();
  ngOnInit(): void {
    if (this.required && !this.formFieldControl.value) {
      this.formFieldControl.setErrors({ required: true });
    }
  }
  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
  public handleClick(value) {
    this.formFieldControl.markAsDirty();
    this.formFieldControl.markAsTouched();
    if (!this.readOnly) {
      if (value === this.formFieldControl.value) {
        this.formFieldControl.setValue(null);
        if (this.required) {
          this.formFieldControl.setErrors({ required: true });
        }
      } else {
        this.formFieldControl.setValue(value);
        this.formFieldControl.setErrors(null);
      }
    }
  }
}
