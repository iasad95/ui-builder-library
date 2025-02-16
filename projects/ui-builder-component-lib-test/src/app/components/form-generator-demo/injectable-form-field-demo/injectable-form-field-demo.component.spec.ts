import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InjectableFormFieldDemoComponent } from './injectable-form-field-demo.component';

describe('InjectableFormFieldDemoComponent', () => {
  let component: InjectableFormFieldDemoComponent;
  let fixture: ComponentFixture<InjectableFormFieldDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InjectableFormFieldDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InjectableFormFieldDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
