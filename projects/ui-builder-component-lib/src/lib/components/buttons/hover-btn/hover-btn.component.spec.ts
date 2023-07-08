import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoverBtnComponent } from './hover-btn.component';
describe('MenuBtnComponent', () => {
  let component: HoverBtnComponent;
  let fixture: ComponentFixture<HoverBtnComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoverBtnComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HoverBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
