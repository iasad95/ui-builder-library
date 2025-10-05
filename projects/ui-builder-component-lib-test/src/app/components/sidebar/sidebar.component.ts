import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  componentItems: Array<{ route: string; text: string }>;
  directiveItems: Array<{ route: string; text: string }>;
  modelItems: Array<{ route: string; text: string }>;
  styleItems: Array<{ route: string; text: string }>;
  notificationItems: Array<{ route: string; text: string }>;
  activeUrl: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.componentItems = [
      { text: 'Checkbox', route: 'dashed-checkbox' },
      { text: 'Circle Progress', route: 'circle-progress' },
      { text: 'Content View Card', route: 'content-view-card' },
      { text: 'Feedback', route: 'feedback' },
      { text: 'Form Field', route: 'form-field' },
      { text: 'Form Generator', route: 'form-generator' },
      { text: 'Grid', route: 'grid' },
      { text: 'Image Card', route: 'image-card' },
      { text: 'Info Card', route: 'info-card' },
      { text: 'Info Card List', route: 'info-card-list' },
      { text: 'Info Card Placeholder', route: 'info-card-placeholder' },
      { text: 'Input Date Field', route: 'input-date-field' },
      { text: 'Input Field', route: 'input-field' },
      { text: 'Json Editor', route: 'json-editor' },
      { text: 'List', route: 'list' },
      { text: 'Login Input Field', route: 'login-input' },
      { text: 'Map', route: 'map' },
      { text: 'Menu', route: 'menu' },
      { text: 'Multi Field', route: 'multi-field' },
      { text: 'Multiselect', route: 'multiselect' },
      { text: 'Notification Banner', route: 'notification-banner' },
      { text: 'Notifications List', route: 'notifications-list' },
      { text: 'OTP Input', route: 'otp-input' },
      { text: 'Percentage Bar', route: 'percentage-bar' },
      { text: 'Phone Number', route: 'tel-input' },
      { text: 'Photo Upload', route: 'photo-upload' },
      { text: 'Popper', route: 'popper' },
      { text: 'Premium Chip', route: 'premium-chip' },
      { text: 'Profile Card', route: 'profile-card' },
      { text: 'Profile Header', route: 'profile-header' },
      { text: 'Progressbar', route: 'progressbar' },
      { text: 'Range Selector', route: 'range-selector' },
      { text: 'Rating Field', route: 'rating-field' },
      { text: 'Search Bar', route: 'search-bar' },
      { text: 'Section Separator', route: 'section-separator' },
      { text: 'Selectable', route: 'selectable' },
      { text: 'Select Field', route: 'input-field-select' },
      { text: 'Tab Menu', route: 'tab-menu' },
      { text: 'Text Box', route: 'text-box' },
      { text: 'Text List', route: 'text-list' },
      { text: 'Timepicker', route: 'input-time-field' },
      { text: 'Toast Message', route: 'toast' },
      { text: 'Toastr', route: 'toastr' },
      { text: 'Toggle', route: 'toggle' },
      { text: 'Typeahead Field', route: 'typeahead-field' },
    ].sort((a, b) => a.text.localeCompare(b.text));

    this.directiveItems = [{ text: 'Tooltip', route: 'tooltip' }];

    this.modelItems = [
      { text: 'Form Generator Models', route: 'form-generator-models' },
      { text: 'MenuItem', route: 'menu-item' },
      { text: 'SelectOption', route: 'select-option' },
    ].sort((a, b) => a.text.localeCompare(b.text));

    this.styleItems = [
      { text: 'Bottom Modal', route: 'bottom-modal' },
      { text: 'Buttons', route: 'buttons' },
      { text: 'Expansion Panel', route: 'expansion-panel' },
      { text: 'Popup Modal', route: 'popup-modal' },
    ];

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        take(1),
      )
      .subscribe(() => {
        this.activeUrl = this.router.url.slice(1);
      });
  }

  onNavigate(route: string) {
    this.activeUrl = route;
    this.router.navigate([`/${route}`]);
  }
}
