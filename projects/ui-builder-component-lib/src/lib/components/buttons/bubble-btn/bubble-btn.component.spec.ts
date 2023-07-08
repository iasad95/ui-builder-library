import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BubbleBtnComponent } from './bubble-btn.component';
describe('BubbleBtnComponent', () => {
  let component: BubbleBtnComponent;
  let fixture: ComponentFixture<BubbleBtnComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BubbleBtnComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(BubbleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
