import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { InputFieldCardExpiryComponent } from './input-field-card-expiry.component';
describe('InputFieldCardExpiryComponent', () => {
  let component: InputFieldCardExpiryComponent;
  let fixture: ComponentFixture<InputFieldCardExpiryComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InputFieldCardExpiryComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();
    fixture = TestBed.createComponent(InputFieldCardExpiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
