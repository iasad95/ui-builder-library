import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkListboxModule } from '@angular/cdk/listbox';
import { MatRippleModule } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { InputFieldModule } from '../../components/input-field/input-field.module';
import { DirectiveModule } from '../../directives/directive.module';
import { NativeElementInjectorDirective } from '../../directives/native-element-injector/native-element-injector.directive';
import { ToggleModule } from '../toggle/toggle.module';
import { TelInputComponent } from './tel-input.component';
@NgModule({
  declarations: [TelInputComponent, NativeElementInjectorDirective],
  exports: [TelInputComponent, NativeElementInjectorDirective],
  providers: [provideNgxMask()],
  imports: [
    CdkListboxModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    InputFieldModule,
    MatRippleModule,
    DirectiveModule,
    NgxMaskDirective,
    NgxMaskPipe,
    TranslateModule,
    ToggleModule,
  ],
})
export class TelInputModule {}
