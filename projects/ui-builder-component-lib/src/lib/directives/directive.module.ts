import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AutoFocusDirective } from './auto-focus/autoFocus.directive';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';
import { DisableControlDirective } from './disable-control/disable-control.directive';
import { LazyImageDirective } from './lazy-image/lazy-image.directive';
import { AppListbox, AppOption } from './list-box-element/list-box';
import { ResizedDirective } from './resized-observer/resized-observer.directive';
import { SubmitOnEnterDirective } from './submit-form-on-enter/submit-on-enter.directive';
import { TrimFieldValueDirective } from './trim-field-value/trim-field-value.directive';
const Directives = [
  AppListbox,
  AppOption,
  ResizedDirective,
  LazyImageDirective,
  TrimFieldValueDirective,
  AutoFocusDirective,
  DebounceClickDirective,
  DisableControlDirective,
  SubmitOnEnterDirective,
];
@NgModule({
  declarations: [...Directives],
  imports: [CommonModule],
  exports: [...Directives],
})
export class DirectiveModule {}
