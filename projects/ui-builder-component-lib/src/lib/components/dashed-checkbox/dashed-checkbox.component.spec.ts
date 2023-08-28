import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DashedCheckboxComponent } from './dashed-checkbox.component';
describe('DashedCheckboxComponent', () => {
  let component: DashedCheckboxComponent;
  let fixture: ComponentFixture<DashedCheckboxComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashedCheckboxComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();
    fixture = TestBed.createComponent(DashedCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
