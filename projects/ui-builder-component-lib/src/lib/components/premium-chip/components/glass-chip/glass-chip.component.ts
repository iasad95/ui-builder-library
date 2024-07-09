import { Component, Input, OnInit } from '@angular/core';
import { GlassChipIds } from '../../interfaces/glass-chip-ids.interface';
@Component({
  selector: 'lib-glass-chip',
  templateUrl: './glass-chip.component.html',
  styleUrl: './glass-chip.component.scss',
})
export class GlassChipComponent implements OnInit {
  public bgSvgUniqueIds: GlassChipIds;
  @Input() public height: number = 0;
  @Input() public width: number = 0;
  ngOnInit(): void {
    this.bgSvgUniqueIds = {
      glassBorderGradient: this.randomString(100),
      glassInnerGradient: this.randomString(100),
      glassClipRoundedCorners: this.randomString(100),
      glassBorderMask: this.randomString(100),
    };
  }
  private randomString(length: number = 10): string {
    return Array.from({ length }, () => Math.random().toString(36).charAt(2)).join('');
  }
}
