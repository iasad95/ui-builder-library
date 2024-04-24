import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UntypedFormControl } from '@angular/forms';
import { MultiFieldComponent } from './multi-field.component';
xdescribe('MultiFieldComponent', () => {
  let component: MultiFieldComponent;
  let fixture: ComponentFixture<MultiFieldComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultiFieldComponent],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(MultiFieldComponent);
    component = fixture.componentInstance;
    component.formFieldControl = new UntypedFormControl();
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
