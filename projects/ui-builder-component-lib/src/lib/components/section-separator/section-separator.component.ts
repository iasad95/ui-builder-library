import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'lib-section-separator',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="fading-line"></div>`,
  styles: `
    .fading-line {
      position: relative;
      height: 0.05em;
      background: var(--border-fading-edges);
      opacity: 0.3;
      margin-top: var(--margin-top, 1.75em);
      margin-bottom: var(--margin-bottom, 1.5em);
    }
    .fading-line::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 10%;
      width: 90%;
      height: 4px;
      background: var(--cyrano-solid-no-transparency);
      filter: blur(2px);
      opacity: 0.27;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionSeparatorComponent {}
