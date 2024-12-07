import { Routes } from '@angular/router';
import { BottomModalDemoComponent } from '../components/bottom-modal-demo/bottom-modal-demo.component';
import { ButtonsDemoComponent } from '../components/buttons-demo/buttons-demo.component';
import { CircleProgressDemoComponent } from '../components/circle-progress-demo/circle-progress-demo.component';
import { ExpansionPanelDemoComponent } from '../components/expansion-panel-demo/expansion-panel-demo.component';
import { FormGeneratorModelsComponent } from '../components/form-generator-models/form-generator-models.component';
import { HomeComponent } from '../components/home/home.component';
import { ImageCardTestComponent } from '../components/image-card-test/image-card-test.component';
import { JsonEditorDemoComponent } from '../components/json-editor-demo/json-editor-demo.component';
import { ListDemoComponent } from '../components/list-demo/list-demo.component';
import { LoginInputDemoComponent } from '../components/login-input-demo/login-input-demo.component';
import { MapDemoComponent } from '../components/map-demo/map-demo.component';
import { MenuItemDemoComponent } from '../components/menu-item-demo/menu-item-demo.component';
import { OtpInputTestComponent } from '../components/otp-input-test/otp-input-test.component';
import { PhotosUploadDemoComponent } from '../components/photo-upload-demo/photo-upload-demo.component';
import { PopperDemoComponent } from '../components/popper-demo/popper-demo.component';
import { PopupModalDemoComponent } from '../components/popup-modal-demo/popup-modal-demo.component';
import { PremiumChipDemoComponent } from '../components/premium-chip-demo/premium-chip-demo.component';
import { ProfileCardComponent } from '../components/profile-card/profile-card.component';
import { ProfileHeaderComponent } from '../components/profile-header/profile-header.component';
import { ProgressbarDemoComponent } from '../components/progressbar-demo/progressbar-demo.component';
import { RangeSelectorDemoComponent } from '../components/range-selector-demo/range-selector-demo.component';
import { SectionSeparatorDemoComponent } from '../components/section-separator-demo/section-separator-demo.component';
import { SelectOptionDemoComponent } from '../components/select-option-demo/select-option-demo.component';
import { SelectableDemoComponent } from '../components/selectable-demo/selectable-demo.component';
import { TelInputDemoComponent } from '../components/tel-input-demo/tel-input-demo.component';
import { TextBoxTestComponent } from '../components/text-box-test/text-box-test.component';
import { ToggleDemoComponent } from '../components/toggle-demo/toggle-demo.component';
import { RoutePaths } from '../enums/routes.enum';

export const appRoutes: Routes = [
  { path: RoutePaths.ButtonsDemoComponent, component: ButtonsDemoComponent },
  { path: RoutePaths.CircleProgressComponent, component: CircleProgressDemoComponent },
  { path: RoutePaths.HomeComponent, component: HomeComponent },
  { path: RoutePaths.PopupModalDemoComponent, component: PopupModalDemoComponent },
  { path: RoutePaths.ProfileCardComponent, component: ProfileCardComponent },
  { path: RoutePaths.ProfileHeaderComponent, component: ProfileHeaderComponent },
  {
    path: RoutePaths.PercentageBarComponent,
    loadChildren: () => import('../components/percentage-bar-demo/lib-percentage-bar-demo.module').then((m) => m.PercentageBarDemoModule),
  },
  { path: RoutePaths.GridDemoComponent, loadChildren: () => import('../components/grid-demo/grid-demo.module').then((m) => m.GridDemoModule) },
  {
    path: RoutePaths.ColumnManagementModalDemoComponent,
    loadChildren: () => import('../components/column-management-modal-demo/column-management-modal-demo.module').then((m) => m.ColumnManagementModalDemoModule),
  },
  { path: RoutePaths.InputFieldTestComponent, loadChildren: () => import('../components/input-field-test/input-field-test.module').then((m) => m.InputFieldTestModule) },
  { path: RoutePaths.OtpInputTestComponent, component: OtpInputTestComponent },
  {
    path: RoutePaths.InputFieldSelectTestComponent,
    loadChildren: () => import('../components/input-field-select-test/input-field-select-test.module').then((m) => m.InputFieldSelectTestModule),
  },
  {
    path: RoutePaths.InputDateFieldTestComponent,
    loadChildren: () => import('../components/input-date-field-test/input-date-field-test.module').then((m) => m.InputDateFieldTestModule),
  },
  {
    path: RoutePaths.InputTimeFieldTestComponent,
    loadChildren: () => import('../components/input-time-field-test/input-time-field-test.module').then((m) => m.InputTimeFieldTestModule),
  },
  { path: RoutePaths.SearchBarDemoComponent, loadChildren: () => import('../components/search-bar-demo/search-bar-demo.module').then((m) => m.SearchBarDemoModule) },
  { path: RoutePaths.TabMenuDemoComponent, loadChildren: () => import('../components/tab-menu-demo/tab-menu-demo.module').then((m) => m.TabMenuDemoModule) },
  { path: RoutePaths.TelInputDemoComponent, component: TelInputDemoComponent },
  { path: RoutePaths.ToggleDemoComponent, component: ToggleDemoComponent },
  { path: RoutePaths.TooltipDemoComponent, loadChildren: () => import('../components/tooltip-demo/tooltip-demo.module').then((m) => m.TooltipDemoModule) },
  {
    path: RoutePaths.DashedCheckboxTestComponent,
    loadChildren: () => import('../components/dashed-checkbox-test/dashed-checkbox-test.module').then((m) => m.DashedCheckboxTestModule),
  },
  { path: RoutePaths.BottomModalDemoComponent, component: BottomModalDemoComponent },
  { path: RoutePaths.ImageCardTestComponent, component: ImageCardTestComponent },
  { path: RoutePaths.ListDemoComponent, component: ListDemoComponent },
  { path: RoutePaths.PhotosUploadDemoComponent, component: PhotosUploadDemoComponent },
  { path: RoutePaths.PremiumChipDemoComponent, component: PremiumChipDemoComponent },
  { path: RoutePaths.RangeSelectorDemoComponent, component: RangeSelectorDemoComponent },
  { path: RoutePaths.SectionSeparatorDemoComponent, component: SectionSeparatorDemoComponent },
  { path: RoutePaths.SelectableDemoComponent, component: SelectableDemoComponent },
  {
    path: RoutePaths.InfoCardPlaceholderDemoComponent,
    loadChildren: () => import('../components/info-card-placeholder-demo/info-card-placeholder-demo.module').then((m) => m.InfoCardPlaceholderDemoModule),
  },
  { path: RoutePaths.FormFieldDemoComponent, loadChildren: () => import('../components/form-field-demo/form-field-demo.module').then((m) => m.FormFieldDemoModule) },
  { path: RoutePaths.FormGeneratorModelsComponent, component: FormGeneratorModelsComponent },
  { path: RoutePaths.MultiFieldDemoComponent, loadChildren: () => import('../components/multi-field-demo/multi-field-demo.module').then((m) => m.MultiFieldDemoModule) },
  { path: RoutePaths.MultiselectDemoComponent, loadChildren: () => import('../components/multiselect-demo/multiselect-demo.module').then((m) => m.MultiselectDemoModule) },
  { path: RoutePaths.RatingFieldDemoComponent, loadChildren: () => import('../components/rating-field-demo/rating-field-demo.module').then((m) => m.RatingFieldDemoModule) },
  { path: RoutePaths.SelectOptionDemoComponent, component: SelectOptionDemoComponent },
  { path: RoutePaths.TextListDemoComponent, loadChildren: () => import('../components/text-list-demo/text-list-demo.module').then((m) => m.TextListDemoModule) },
  { path: RoutePaths.ToastrDemoComponent, loadChildren: () => import('../components/toastr-demo/toastr-demo.module').then((m) => m.ToastrDemoModule) },
  {
    path: RoutePaths.FormGeneratorDemoComponent,
    loadChildren: () => import('../components/form-generator-demo/form-generator-demo.module').then((m) => m.FormGeneratorDemoModule),
  },
  {
    path: RoutePaths.NotificationBannerDemoComponent,
    loadChildren: () => import('../components/notification-banner-demo/notification-banner-demo.module').then((m) => m.NotificationBannerDemoModule),
  },
  {
    path: RoutePaths.TypeaheadFieldDemoComponent,
    loadChildren: () => import('../components/typeahead-field-demo/typeahead-field-demo.module').then((m) => m.TypeaheadFieldDemoModule),
  },
  {
    path: RoutePaths.ToastNotificationDemoComponent,
    loadChildren: () => import('../components/toast-notification-demo/toast-notification-demo.module').then((m) => m.ToastNotificationDemoModule),
  },
  { path: RoutePaths.ExpansionPanelDemoComponent, component: ExpansionPanelDemoComponent },
  { path: RoutePaths.InfoCardDemoComponent, loadChildren: () => import('../components/info-card-demo/info-card-demo.module').then((m) => m.InfoCardDemoModule) },
  { path: RoutePaths.InfoCardListDemoComponent, loadChildren: () => import('../components/info-card-list-demo/info-card-list-demo.module').then((m) => m.InfoCardListDemoModule) },
  { path: RoutePaths.JsonEditorDemoComponent, component: JsonEditorDemoComponent },
  { path: RoutePaths.LoginInputDemoComponent, component: LoginInputDemoComponent },
  { path: RoutePaths.MapDemoComponent, component: MapDemoComponent },
  { path: RoutePaths.MenuDemoComponent, loadChildren: () => import('../components/menu-demo/menu-demo.module').then((m) => m.MenuDemoModule) },
  { path: RoutePaths.MenuItemDemoComponent, component: MenuItemDemoComponent },
  { path: RoutePaths.PopperDemoComponent, component: PopperDemoComponent },
  { path: RoutePaths.ProgressbarDemoComponent, component: ProgressbarDemoComponent },
  { path: RoutePaths.TextBoxTestComponent, component: TextBoxTestComponent },
  {
    path: RoutePaths.ContentViewCardDemoComponent,
    loadChildren: () => import('../components/content-view-card-demo/content-view-card-demo.module').then((m) => m.ContentViewCardDemoModule),
  },

  // Dynamic Routes
  { path: `${RoutePaths.ButtonsDemoComponent}/:path`, component: ButtonsDemoComponent },
  { path: `${RoutePaths.CircleProgressComponent}/:path`, component: CircleProgressDemoComponent },
  { path: `${RoutePaths.GridDemoComponent}/:path`, loadChildren: () => import('../components/grid-demo/grid-demo.module').then((m) => m.GridDemoModule) },
  { path: `${RoutePaths.PopupModalDemoComponent}/:path`, component: PopupModalDemoComponent },
  { path: `${RoutePaths.ProfileCardComponent}/:path`, component: ProfileCardComponent },
  { path: `${RoutePaths.ProfileHeaderComponent}/:path`, component: ProfileHeaderComponent },
  {
    path: `${RoutePaths.ColumnManagementModalDemoComponent}/:path`,
    loadChildren: () => import('../components/column-management-modal-demo/column-management-modal-demo.module').then((m) => m.ColumnManagementModalDemoModule),
  },
  { path: `${RoutePaths.InputFieldTestComponent}/:path`, loadChildren: () => import('../components/input-field-test/input-field-test.module').then((m) => m.InputFieldTestModule) },
  { path: `${RoutePaths.OtpInputTestComponent}/:path`, component: OtpInputTestComponent },
  {
    path: `${RoutePaths.InputFieldSelectTestComponent}/:path`,
    loadChildren: () => import('../components/input-field-select-test/input-field-select-test.module').then((m) => m.InputFieldSelectTestModule),
  },
  {
    path: `${RoutePaths.InputDateFieldTestComponent}/:path`,
    loadChildren: () => import('../components/input-date-field-test/input-date-field-test.module').then((m) => m.InputDateFieldTestModule),
  },
  {
    path: `${RoutePaths.InputTimeFieldTestComponent}/:path`,
    loadChildren: () => import('../components/input-time-field-test/input-time-field-test.module').then((m) => m.InputTimeFieldTestModule),
  },
  { path: `${RoutePaths.SearchBarDemoComponent}/:path`, loadChildren: () => import('../components/search-bar-demo/search-bar-demo.module').then((m) => m.SearchBarDemoModule) },
  { path: `${RoutePaths.TabMenuDemoComponent}/:path`, loadChildren: () => import('../components/tab-menu-demo/tab-menu-demo.module').then((m) => m.TabMenuDemoModule) },
  { path: `${RoutePaths.TelInputDemoComponent}/:path`, component: TelInputDemoComponent },
  { path: `${RoutePaths.ToggleDemoComponent}/:path`, component: ToggleDemoComponent },
  { path: `${RoutePaths.TooltipDemoComponent}/:path`, loadChildren: () => import('../components/tooltip-demo/tooltip-demo.module').then((m) => m.TooltipDemoModule) },
  {
    path: `${RoutePaths.DashedCheckboxTestComponent}/:path`,
    loadChildren: () => import('../components/dashed-checkbox-test/dashed-checkbox-test.module').then((m) => m.DashedCheckboxTestModule),
  },
  { path: `${RoutePaths.BottomModalDemoComponent}/:path`, component: BottomModalDemoComponent },
  { path: `${RoutePaths.ImageCardTestComponent}/:path`, component: ImageCardTestComponent },
  { path: `${RoutePaths.ListDemoComponent}/:path`, component: ListDemoComponent },
  { path: `${RoutePaths.PhotosUploadDemoComponent}/:path`, component: PhotosUploadDemoComponent },
  { path: `${RoutePaths.PremiumChipDemoComponent}/:path`, component: PremiumChipDemoComponent },
  { path: `${RoutePaths.RangeSelectorDemoComponent}/:path`, component: RangeSelectorDemoComponent },
  { path: `${RoutePaths.SectionSeparatorDemoComponent}/:path`, component: SectionSeparatorDemoComponent },
  { path: `${RoutePaths.SelectableDemoComponent}/:path`, component: SelectableDemoComponent },
  {
    path: `${RoutePaths.InfoCardPlaceholderDemoComponent}/:path`,
    loadChildren: () => import('../components/info-card-placeholder-demo/info-card-placeholder-demo.module').then((m) => m.InfoCardPlaceholderDemoModule),
  },
  { path: `${RoutePaths.MultiFieldDemoComponent}/:path`, loadChildren: () => import('../components/multi-field-demo/multi-field-demo.module').then((m) => m.MultiFieldDemoModule) },
  {
    path: `${RoutePaths.RatingFieldDemoComponent}/:path`,
    loadChildren: () => import('../components/rating-field-demo/rating-field-demo.module').then((m) => m.RatingFieldDemoModule),
  },
  { path: `${RoutePaths.FormGeneratorModelsComponent}/:path`, component: FormGeneratorModelsComponent },
  { path: `${RoutePaths.SelectOptionDemoComponent}/:path`, component: SelectOptionDemoComponent },
  { path: `${RoutePaths.TextListDemoComponent}/:path`, loadChildren: () => import('../components/text-list-demo/text-list-demo.module').then((m) => m.TextListDemoModule) },
  {
    path: `${RoutePaths.MultiselectDemoComponent}/:path`,
    loadChildren: () => import('../components/multiselect-demo/multiselect-demo.module').then((m) => m.MultiselectDemoModule),
  },
  { path: `${RoutePaths.FormFieldDemoComponent}/:path`, loadChildren: () => import('../components/form-field-demo/form-field-demo.module').then((m) => m.FormFieldDemoModule) },
  {
    path: `${RoutePaths.FormGeneratorDemoComponent}/:path`,
    loadChildren: () => import('../components/form-generator-demo/form-generator-demo.module').then((m) => m.FormGeneratorDemoModule),
  },
  {
    path: `${RoutePaths.NotificationBannerDemoComponent}/:path`,
    loadChildren: () => import('../components/notification-banner-demo/notification-banner-demo.module').then((m) => m.NotificationBannerDemoModule),
  },
  {
    path: `${RoutePaths.TypeaheadFieldDemoComponent}/:path`,
    loadChildren: () => import('../components/typeahead-field-demo/typeahead-field-demo.module').then((m) => m.TypeaheadFieldDemoModule),
  },
  {
    path: `${RoutePaths.ToastNotificationDemoComponent}/:path`,
    loadChildren: () => import('../components/toast-notification-demo/toast-notification-demo.module').then((m) => m.ToastNotificationDemoModule),
  },
  { path: `${RoutePaths.InfoCardDemoComponent}/:path`, loadChildren: () => import('../components/info-card-demo/info-card-demo.module').then((m) => m.InfoCardDemoModule) },
  { path: `${RoutePaths.MenuDemoComponent}/:path`, loadChildren: () => import('../components/menu-demo/menu-demo.module').then((m) => m.MenuDemoModule) },
  {
    path: `${RoutePaths.InfoCardListDemoComponent}/:path`,
    loadChildren: () => import('../components/info-card-list-demo/info-card-list-demo.module').then((m) => m.InfoCardListDemoModule),
  },
  {
    path: `${RoutePaths.ToastrDemoComponent}/:path`,
    loadChildren: () => import('../components/toastr-demo/toastr-demo.module').then((m) => m.ToastrDemoModule),
  },
  { path: `${RoutePaths.ExpansionPanelDemoComponent}/:path`, component: ExpansionPanelDemoComponent },
  { path: `${RoutePaths.JsonEditorDemoComponent}/:path`, component: JsonEditorDemoComponent },
  { path: `${RoutePaths.MapDemoComponent}/:path`, component: MapDemoComponent },
  { path: `${RoutePaths.MenuItemDemoComponent}/:path`, component: MenuItemDemoComponent },
  { path: `${RoutePaths.PopperDemoComponent}/:path`, component: PopperDemoComponent },
  { path: `${RoutePaths.ProgressbarDemoComponent}/:path`, component: ProgressbarDemoComponent },
  { path: `${RoutePaths.TextBoxTestComponent}/:path`, component: TextBoxTestComponent },
  { path: `**`, redirectTo: RoutePaths.HomeComponent },
];
