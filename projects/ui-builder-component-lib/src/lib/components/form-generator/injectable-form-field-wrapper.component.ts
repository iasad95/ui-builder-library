import { ChangeDetectorRef, Component, ComponentRef, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { InjectableFormField } from '../../interfaces/injectable-form-field';
@Component({
  selector: 'lib-injectable-form-field-wrapper',
  templateUrl: './injectable-form-field-wrapper.component.html',
  styleUrls: ['./injectable-form-field-wrapper.component.scss'],
})
export class InjectableFormFieldWrapperComponent implements OnInit {
  @Input() formFieldControl: UntypedFormControl;
  @Input() componentType: Type<InjectableFormField>;
  @Input() componentConfig: any;
  @ViewChild('componentContainer', { read: ViewContainerRef, static: true })
  componentContainer: ViewContainerRef;
  private componentRef: ComponentRef<InjectableFormField>;
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit() {
    this.componentRef = this.componentContainer.createComponent(this.componentType);
    this.componentRef.instance.setFormControl(this.formFieldControl);
    this.componentRef.instance.setConfig(this.componentConfig);
    this.changeDetectorRef.detectChanges();
  }
}
