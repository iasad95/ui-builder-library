import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GlassChipComponent } from './components/glass-chip/glass-chip.component';
import { PrimaryChipComponent } from './components/primary-chip/primary-chip.component';
import { PremiumChipComponent } from './premium-chip.component';
@NgModule({
  declarations: [PremiumChipComponent, PrimaryChipComponent, GlassChipComponent],
  imports: [CommonModule],
  exports: [PremiumChipComponent],
})
export class PremiumChipModule {}
