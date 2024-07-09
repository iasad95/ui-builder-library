import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonOperations } from '../../operations/operations';
import { PremiumChipVariantTypes } from './premium-chip-variants.enum';
@Component({
  selector: 'lib-premium-chip',
  templateUrl: './premium-chip.component.html',
  styleUrl: './premium-chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PremiumChipComponent implements AfterViewInit {
  @ViewChild('matChipContainer') matChipRef: ElementRef<HTMLElement>;
  public PREMIUM_CHIP_VARIANT_TYPES = PremiumChipVariantTypes;
  @Input() variant: PremiumChipVariantTypes = PremiumChipVariantTypes.PRIMARY;
  private resizeObserver = new ResizeObserver((entries) => {
    const entry = entries[0];
    this.appPremiumChipContainerOffsetWidth = entry.contentRect.width + 10;
    this.changeDetectorRef.detectChanges();
  });
  public bgSvgUniqueIds = {
    fadeMaskBorderBottom: 'fade-mask-border-bottom' + CommonOperations.randomString(10),
    premiumChipBorderBottom: 'premium-chip-border-bottom' + CommonOperations.randomString(10),
    fadeMaskBorderTop: 'fade-mask-border-top' + CommonOperations.randomString(10),
    premiumChipBorderTop: 'premium-chip-border-top' + CommonOperations.randomString(10),
    fadeMaskInner: 'fade-mask-inner' + CommonOperations.randomString(10),
    premiumChipInnerMaskGradient: 'premium-chip-inner-mask-gradient' + CommonOperations.randomString(10),
    premiumChipInner: 'premium-chip-inner' + CommonOperations.randomString(10),
    premiumChipBorder: 'premium-chip-border' + CommonOperations.randomString(10),
    glassBorderGradient: CommonOperations.randomString(100),
    glassInnerGradient: CommonOperations.randomString(100),
    glassClipRoundedCorners: CommonOperations.randomString(100),
    glassBorderMask: CommonOperations.randomString(100),
  };
  public appPremiumChipContainerOffsetHeight: number = 0;
  public appPremiumChipContainerOffsetWidth: number = 0;
  public updateSvg = true;
  public readonly difference = 2.5;
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  public ngAfterViewInit(): void {
    this.initChipContainer();
  }
  private initChipContainer() {
    const chipContainerNativeElement = this.matChipRef?.nativeElement;
    if (chipContainerNativeElement) {
      this.resizeObserver.observe(chipContainerNativeElement);
      this.updateChipRect(chipContainerNativeElement);
    }
  }
  private updateChipRect(nativeElement: HTMLElement) {
    this.updateSvg = false;
    this.changeDetectorRef.detectChanges();
    setTimeout(() => {
      this.appPremiumChipContainerOffsetHeight = nativeElement?.offsetHeight || 0;
      this.appPremiumChipContainerOffsetWidth = nativeElement?.offsetWidth || 0;
      this.updateSvg = true;
      this.changeDetectorRef.detectChanges();
    }, 10);
  }
}
