import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { InputFieldSelectComponent } from './input-field-select.component';
describe('InputFieldSelectComponent', () => {
  let component: InputFieldSelectComponent;
  let fixture: ComponentFixture<InputFieldSelectComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InputFieldSelectComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();
    fixture = TestBed.createComponent(InputFieldSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
