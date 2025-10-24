import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { EmojiPickerConfig, IText, TextBoxComponent } from 'ui-builder-component-lib';

@Component({
  selector: 'app-text-box-test',
  standalone: true,
  imports: [TextBoxComponent, ReactiveFormsModule],
  templateUrl: './text-box-test.component.html',
  styleUrl: './text-box-test.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextBoxTestComponent {
  public emojiPickerconfig: EmojiPickerConfig = {
    pickerIcon: 'assets/icons/emoji.svg',
    style: `
      ::-webkit-scrollbar {
        width: 8px;
        opacity: 0.5;
        height: 8px;
      }

      ::-webkit-scrollbar-track {
        background: var(--cyrano-dark-color);
        opacity: 0.5;
      }

      ::-webkit-scrollbar-thumb {
        width: 5px;
        background-color: var(--cyrano-pink-shade-1);
        opacity: 0.5;
        border: 3px solid #000;
      }

      // moz
      * {
        scrollbar-width: thin;
        scrollbar-base-color: rgba(0, 0, 0, 0.5);
        scrollbar-color: var(--cyrano-pink-shade-1) transparent;
      }
    `,
  };

  public messageControl: FormControl = new FormControl<IText>(null);

  public defaultTextBox: string = `<lib-text-box></lib-text-box>`;
  public textBoxWithImageAttachment = `<lib-text-box [includeImageAttachment]="true" ></lib-text-box>`;
  public textBoxWithEmojiPicker = '<lib-text-box [includeEmojiPicker]="true"></lib-text-box>';
  public textBoxWithEmojiPickerAndConfig = `<lib-text-box [includeEmojiPicker]="true" [emojiPickerConfig]="emojiPickerconfig"></lib-text-box>`;
  public textBoxWithMaxLength = `<lib-text-box [maxLength]="200" [label]="'Comment'">`;

  constructor(private fb: FormBuilder) {}
}
