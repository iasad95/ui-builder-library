import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { TranslateModule } from '@ngx-translate/core';
import { LibMapsComponent } from './map.component';
import { MapService } from './map.service';
@NgModule({
  declarations: [LibMapsComponent],
  imports: [CommonModule, GoogleMapsModule, TranslateModule, DragDropModule],
  exports: [LibMapsComponent],
})
export class LibMapModule {
  static forRoot(config: { googleMapsKey: string; googleMapsURL: string }): ModuleWithProviders<LibMapModule> {
    return {
      ngModule: LibMapModule,
      providers: [
        {
          provide: MapService,
          useFactory: () => {
            const mapService = new MapService();
            mapService.setGoogleMapsKey(config.googleMapsKey);
            mapService.setGoogleMapsURL(config.googleMapsURL);
            return mapService;
          },
        },
      ],
    };
  }
}
