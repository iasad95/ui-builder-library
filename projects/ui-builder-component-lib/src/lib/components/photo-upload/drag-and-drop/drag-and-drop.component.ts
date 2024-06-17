import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ImageModel } from '../../../model/image-model';
import { ImageCropperService } from '../../image-cropper/image-cropper.service';
import { ImageBaseComponent } from '../image-base/image-base.component';
@Component({
  selector: 'lib-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragAndDropComponent extends ImageBaseComponent implements OnInit, OnDestroy {
  @Input() showOutLine = true;
  @ViewChild('dragOutline') dragOutline;
  constructor(
    private imageCompress: NgxImageCompressService,
    private imageCropper: ImageCropperService,
  ) {
    super(imageCompress, imageCropper);
  }
  ngOnInit(): void {
    this.setDragAndDrop();
  }
  ngOnDestroy() {
    document.body.removeEventListener('dragenter', this.preventDefault.bind(this));
    document.body.removeEventListener('dragLeave', this.preventDefault.bind(this));
    document.body.removeEventListener('dragOver', this.preventDefault.bind(this));
    document.body.removeEventListener('drop', this.preventDefault.bind(this));
  }
  public preventDefault(event): void {
    event.preventDefault();
    event.stopPropagation();
  }
  public setDragAndDrop(): void {
    document.body.addEventListener('dragenter', this.preventDefault.bind(this));
    document.body.addEventListener('dragleave', this.preventDefault.bind(this));
    document.body.addEventListener('dragover', this.preventDefault.bind(this));
    document.body.addEventListener('drop', this.preventDefault.bind(this));
  }
  public showOutline(event): void {
    this.preventDefault(event);
    this.dragOutline.nativeElement.classList.add('show-outline');
  }
  public hideOutline(event): void {
    this.preventDefault(event);
    this.dragOutline.nativeElement.classList.remove('show-outline');
  }
  public async receiveDroppedFiles(event): Promise<void> {
    this.dragOutline.nativeElement.classList.remove('show-outline');
    if (event.dataTransfer.files && event.dataTransfer.files.length) {
      const photos = await this.readFiles(event.dataTransfer.files);
      this.onSelectImages(photos);
    }
  }
  private async readFiles(files: FileList): Promise<ImageModel[]> {
    const promises = [];
    for (let i = 0; i < files.length; i++) {
      promises.push(this.readFile(files[i]));
    }
    return await Promise.all(promises);
  }
  public async readFile(file: File): Promise<ImageModel> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (evt) => {
        resolve({
          fileName: file.name,
          image: evt.target.result as string,
        });
      };
      fileReader.onerror = (evt) => {
        reject(new Error(`An error occured while reading this file: ${file.name}`));
      };
      fileReader.readAsDataURL(file);
    });
  }
}
