import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { VerificationCodeScreenComponent } from './verification-code.component';
describe('VerificationCodeScreenComponent', () => {
  let component: VerificationCodeScreenComponent;
  let fixture: ComponentFixture<VerificationCodeScreenComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [VerificationCodeScreenComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();
    fixture = TestBed.createComponent(VerificationCodeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
