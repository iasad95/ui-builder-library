import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: '',
})
export class BaseDemoComponent {
  public rowIds: string[] = [];
  private textarea: HTMLTextAreaElement;

  constructor(protected router: Router) {
    this.textarea = document.createElement('textarea');
    this.textarea.style.position = 'fixed';
    this.textarea.style.opacity = '0';
    document.body.appendChild(this.textarea);

    this.rowIds = Array.from({ length: 6 }, (_, i) => `row-${i + 1}`);
  }

  public getShareableLink(rowId: string): string {
    // Build the shareable link relative to the current route
    const relativeUrl = `${this.router.url.split('#')[0]}#${rowId}`;
    const url = `${window.location.origin + relativeUrl}`;

    // Set the textarea value and select it
    this.textarea.value = url;
    this.textarea.select();
    // Execute the copy command
    document.execCommand('copy');

    this.router.navigateByUrl(relativeUrl);

    return url;
  }
}
