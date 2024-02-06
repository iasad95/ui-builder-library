import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { InputFieldCardNumberComponent } from './input-field-card-number.component';
describe('InputFieldCardNumberComponent', () => {
  let component: InputFieldCardNumberComponent;
  let fixture: ComponentFixture<InputFieldCardNumberComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InputFieldCardNumberComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();
    fixture = TestBed.createComponent(InputFieldCardNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
