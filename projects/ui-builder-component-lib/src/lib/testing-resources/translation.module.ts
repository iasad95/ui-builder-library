import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MissingTranslationHandler, MissingTranslationHandlerParams, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export class TranslateHandler implements MissingTranslationHandler {
  private response: String;
  handle(params: MissingTranslationHandlerParams) {
    return params.key;
  }
}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
      useDefaultLang: true,
      missingTranslationHandler: [{ provide: MissingTranslationHandler, useClass: TranslateHandler }],
    }),
  ],
  exports: [TranslateModule],
})
export class TestingTranslationModule {}
