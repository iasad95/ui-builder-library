import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {
  AuthenticationModule,
  ButtonsModule,
  CircleProgressModule,
  DashedCheckboxModule,
  DirectiveModule,
  DragAndDropModule,
  ExpansionPanelModule,
  FormFieldModule,
  FormValidatorModule,
  ImageCardModule,
  InputFieldModule,
  LibJsonEditorModule,
  LibMapModule,
  LibModalModule,
  ListModule,
  OtpInputModule,
  PhotoUploadModule,
  PopperModule,
  PremiumChipModule,
  PreviewWindowModule,
  ProfileCardModule,
  ProfileHeaderModule,
  RangeSelectorModule,
  SectionSeparatorComponent,
  SelectableModule,
  TelInputModule,
  ToggleModule,
} from 'ui-builder-component-lib';
import { Highlight, provideHighlightOptions } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LoginInputModule } from 'projects/ui-builder-component-lib/src/public-api';
import { TestingTranslationModule } from '../../../ui-builder-component-lib/src/lib/testing-resources/translation.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { BottomModalDemoComponent } from './components/bottom-modal-demo/bottom-modal-demo.component';
import { ButtonsDemoComponent } from './components/buttons-demo/buttons-demo.component';
import { CircleProgressDemoComponent } from './components/circle-progress-demo/circle-progress-demo.component';
import { ExpansionPanelDemoComponent } from './components/expansion-panel-demo/expansion-panel-demo.component';
import { FormGeneratorModelsComponent } from './components/form-generator-models/form-generator-models.component';
import { ImageCardTestComponent } from './components/image-card-test/image-card-test.component';
import { JsonEditorDemoComponent } from './components/json-editor-demo/json-editor-demo.component';
import { ListDemoComponent } from './components/list-demo/list-demo.component';
import { LoginInputDemoComponent } from './components/login-input-demo/login-input-demo.component';
import { MapDemoComponent } from './components/map-demo/map-demo.component';
import { OtpInputTestComponent } from './components/otp-input-test/otp-input-test.component';
import { PhotosUploadDemoComponent } from './components/photo-upload-demo/photo-upload-demo.component';
import { PopperDemoComponent } from './components/popper-demo/popper-demo.component';
import { PopupModalDemoComponent } from './components/popup-modal-demo/popup-modal-demo.component';
import { PremiumChipDemoComponent } from './components/premium-chip-demo/premium-chip-demo.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ProgressbarDemoComponent } from './components/progressbar-demo/progressbar-demo.component';
import { RangeSelectorDemoComponent } from './components/range-selector-demo/range-selector-demo.component';
import { SectionSeparatorDemoComponent } from './components/section-separator-demo/section-separator-demo.component';
import { SelectableDemoComponent } from './components/selectable-demo/selectable-demo.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TelInputDemoComponent } from './components/tel-input-demo/tel-input-demo.component';
import { ToggleDemoComponent } from './components/toggle-demo/toggle-demo.component';
import { appRoutes } from './routes/routes';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CircleProgressDemoComponent,
    ProfileCardComponent,
    ProfileHeaderComponent,
    ButtonsDemoComponent,
    OtpInputTestComponent,
    TelInputDemoComponent,
    PopupModalDemoComponent,
    ToggleDemoComponent,
    RangeSelectorDemoComponent,
    SelectableDemoComponent,
    PhotosUploadDemoComponent,
    ListDemoComponent,
    SectionSeparatorDemoComponent,
    ImageCardTestComponent,
    BottomModalDemoComponent,
    PremiumChipDemoComponent,
    JsonEditorDemoComponent,
    PopperDemoComponent,
    ProgressbarDemoComponent,
    ExpansionPanelDemoComponent,
    MapDemoComponent,
    FormGeneratorModelsComponent,
    LoginInputDemoComponent,
  ],
  providers: [
    provideHighlightOptions({
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        css: () => import('highlight.js/lib/languages/css'),
        xml: () => import('highlight.js/lib/languages/xml'),
        json: () => import('highlight.js/lib/languages/json'),
      },
    }),
  ],
  bootstrap: [AppComponent],
  imports: [
    CommonModule,
    InputTextareaModule,
    RouterModule.forRoot(appRoutes),
    IonicModule.forRoot(),
    TelInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    CircleProgressModule,
    ProfileCardModule,
    ProfileHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    OtpInputModule,
    ButtonsModule,
    InputFieldModule,
    AuthenticationModule,
    ToggleModule,
    PremiumChipModule,
    HttpClientModule,
    HttpClientJsonpModule,
    LibModalModule,
    MatDialogModule,
    TestingTranslationModule,
    InputSwitchModule,
    ButtonModule,
    DashedCheckboxModule,
    RangeSelectorModule,
    SelectableModule,
    PhotoUploadModule,
    MatIconModule,
    ListModule,
    SectionSeparatorComponent,
    ImageCardModule,
    DragAndDropModule,
    LibJsonEditorModule,
    PopperModule,
    PreviewWindowModule,
    ExpansionPanelModule,
    LoginInputModule,
    LibMapModule.forRoot({
      googleMapsKey: environment.googleMapsKey,
      googleMapsURL: environment.googleMapsURL,
    }),
    GoogleMapsModule,
    DirectiveModule,
    FormValidatorModule,
    FormFieldModule,
    Highlight,
    HighlightLineNumbers,
  ],
})
export class AppModule {}
