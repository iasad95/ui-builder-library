import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import 'emoji-picker-element';
import { EmojiPickerConfig } from '../../model/emoji-picker-config';
import { ImageModel } from '../../model/image-model';
import { ImageCardModule } from '../photo-upload/image-card/image-card.module';
import { IText } from './text.interface';
@Component({
  selector: 'lib-text-box',
  standalone: true,
  imports: [CommonModule, ImageCardModule, MatInputModule, MatSelectModule, MatFormFieldModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextBoxComponent,
      multi: true,
    },
  ],
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextBoxComponent implements ControlValueAccessor, AfterViewInit {
  @Input() label: string;
  @Input() maxLength: number = 100;
  @Input() includeEmojiPicker: boolean = false;
  @Input() emojiPickerConfig: EmojiPickerConfig;
  @Input() includeImageAttachment: boolean = false;
  @Input() maxImageAttachmentLength: number = 10;
  public emojiVisibility: boolean = false;
  public attachedImagesVisibility: boolean = false;
  public attachedImages: string[] = [];
  public disabled: boolean = false;
  public value: IText;
  @ViewChild('messageBox') messageBoxRef: ElementRef;
  @ViewChild('emojiPicker') emojiPickerRef: ElementRef;
  public ngAfterViewInit(): void {
    if (this.emojiPickerConfig?.style) {
      if (this.emojiPickerRef?.nativeElement) {
        const style = document.createElement('style');
        style.textContent = this.emojiPickerConfig.style;
        this.emojiPickerRef.nativeElement.shadowRoot.appendChild(style);
      }
    }
  }
  public onEmojiclick(event: CustomEvent): void {
    this.messageBoxRef.nativeElement.innerText += event.detail.unicode;
    this.updateModel();
  }
  public onUploadImages(images: ImageModel[]): void {
    let imageStrings = images.map((value) => value.image);
    const remainder = this.maxImageAttachmentLength - this.attachedImages.length;
    if (imageStrings.length >= remainder) {
      imageStrings = imageStrings.slice(0, remainder);
    }
    this.attachedImages = this.attachedImages.concat(imageStrings);
    this.updateModel();
  }
  public onAttachedPhotoDelete(index: number): void {
    this.attachedImages.splice(index, 1);
    this.updateModel();
  }
  public onChange(value: IText): void {}
  public onTouched(touched: boolean): void {}
  writeValue(value: IText): void {
    if (!value) return;
    if (value.message) {
      this.messageBoxRef.nativeElement.innerText = value.message.slice(0, this.maxLength);
    }
    if (value.attachments) {
      this.attachedImages = value.attachments;
    }
    this.value = {
      message: this.messageBoxRef.nativeElement.innerText,
      attachments: this.attachedImages,
    };
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  public onKeydown(event: KeyboardEvent): void {
    if (this.isDeleteOrArrowKey(event.key)) return;
    if (this.messageBoxRef.nativeElement.innerText.length >= this.maxLength) {
      event.preventDefault();
      return;
    }
  }
  public onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const data = event.clipboardData.getData('text');
    if (data) {
      const clippedText = data.slice(0, this.maxLength);
      this.messageBoxRef.nativeElement.innerText = clippedText;
      this.updateModel();
    }
  }
  public onInput(event): void {
    this.updateModel();
  }
  public updateModel(): void {
    this.value = {
      message: this.messageBoxRef.nativeElement.innerText,
      attachments: this.attachedImages,
    };
    this.onChange({ ...this.value });
  }
  private isDeleteOrArrowKey(key: string): boolean {
    if (key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowTop' || key === 'ArrowBottom' || key === 'Backspace') {
      return true;
    }
    return false;
  }
}
