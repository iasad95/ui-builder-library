import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LibToastrComponent } from './toastr.component';
xdescribe('LibToastrComponent', () => {
  let component: LibToastrComponent;
  let fixture: ComponentFixture<LibToastrComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LibToastrComponent],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LibToastrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
