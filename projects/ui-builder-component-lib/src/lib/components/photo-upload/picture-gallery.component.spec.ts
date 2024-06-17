import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PictureGalleryComponent } from './picture-gallery.component';
describe('PhotoUploadComponent', () => {
  let component: PictureGalleryComponent;
  let fixture: ComponentFixture<PictureGalleryComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PictureGalleryComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(PictureGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
