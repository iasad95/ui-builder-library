import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibLoadingBarComponent } from './loading-bar.component';
describe('LibLoadingBarComponent', () => {
  let component: LibLoadingBarComponent;
  let fixture: ComponentFixture<LibLoadingBarComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibLoadingBarComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LibLoadingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
