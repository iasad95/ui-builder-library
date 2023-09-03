import { Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { ImageModel } from '../../model/image-model';
@Component({
  selector: 'lib-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss'],
})
export class DragAndDropComponent implements OnDestroy {
  @Input() showOutLine = true;
  @Output() fileRecieved: EventEmitter<ImageModel[]> = new EventEmitter();
  @ViewChild('dragOutline') dragOutline;
  constructor() {
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
  public async recieveDroppedFiles(event): Promise<void> {
    this.dragOutline.nativeElement.classList.remove('show-outline');
    if (event.dataTransfer.files && event.dataTransfer.files.length) {
      const photos = await this.readFiles(event.dataTransfer.files);
      this.fileRecieved.emit(photos);
    }
  }
  private async readFiles(files: FileList): Promise<ImageModel[]> {
    const promises = [];
    for (let i = 0; i < files.length; i++) {
      promises.push(this.readFile(files[i]));
    }
    const images = await Promise.all(promises);
    return images;
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
