import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ImageUploaddModalComponent } from './image-upload-modal.component';
describe('ImageCropperComponent', () => {
  let component: ImageUploaddModalComponent;
  let fixture: ComponentFixture<ImageUploaddModalComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ImageUploaddModalComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();
    fixture = TestBed.createComponent(ImageUploaddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
