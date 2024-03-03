import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { LibJsonEditorComponent } from './json-editor.component';
@NgModule({
  declarations: [LibJsonEditorComponent],
  imports: [CommonModule, NgJsonEditorModule],
  exports: [LibJsonEditorComponent],
})
export class LibJsonEditorModule {}
