import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageTmpltComponent } from './image-tmplt.component';
describe('ImageTmpltComponent', () => {
  let component: ImageTmpltComponent;
  let fixture: ComponentFixture<ImageTmpltComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageTmpltComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ImageTmpltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
