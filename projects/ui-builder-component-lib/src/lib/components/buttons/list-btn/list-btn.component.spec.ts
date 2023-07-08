import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListBtnComponent } from './list-btn.component';
describe('MenuBtnComponent', () => {
  let component: ListBtnComponent;
  let fixture: ComponentFixture<ListBtnComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListBtnComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ListBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
