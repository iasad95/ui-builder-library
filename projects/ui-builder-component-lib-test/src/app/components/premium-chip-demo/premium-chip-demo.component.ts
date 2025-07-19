import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormFieldType, SelectOption } from 'ui-builder-component-lib';
import { PremiumChipVariantTypes } from 'projects/ui-builder-component-lib/src/public-api';
import { demoPremiumChipBackgroundImages } from './lookups/demo-images.lookup';

@Component({
  selector: 'app-premium-chip-demo',
  templateUrl: './premium-chip-demo.component.html',
  styleUrls: ['./premium-chip-demo.component.scss'],
})
export class PremiumChipDemoComponent implements OnInit {
  public PREMIUM_CHIP_VARIANT_TYPES = PremiumChipVariantTypes;
  public images: Array<SelectOption<string>>;
  public selectedPremiumChipVariantType: PremiumChipVariantTypes = PremiumChipVariantTypes.PRIMARY;
  public FORM_FIELD_TYPE = FormFieldType;
  public libChipCode: string = this.getPremiumChipCode();
  public selectedImageFormControl: FormControl<string>;

  ngOnInit(): void {
    this.images = demoPremiumChipBackgroundImages;
    this.selectedImageFormControl = new FormControl<string>(this.images[0].value);
  }

  public handleTypeChange(): void {
    this.libChipCode = this.getPremiumChipCode();
  }

  public getPremiumChipCode(): string {
    return `<lib-premium-chip variant="${this.selectedPremiumChipVariantType}"><div class="custom-style">Cyrano Premium</div></div></lib-premium-chip>`;
  }
}
