import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibModalComponent } from './popup-modal.component';
describe('LibModalComponent', () => {
  let component: LibModalComponent;
  let fixture: ComponentFixture<LibModalComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibModalComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LibModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
