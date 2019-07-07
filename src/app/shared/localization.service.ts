import { Injectable, Renderer2, RendererFactory2, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  private renderer: Renderer2;
  langSelected = new EventEmitter<string>();
  lang;
  constructor(private translate: TranslateService, rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
   }

  useLanguage(language: string) {

    if ( language == 'en') {
      this.renderer.setAttribute(document.documentElement, 'dir', 'ltr');
      this.lang = 'eng';
    } else {
      this.renderer.setAttribute(document.documentElement, 'dir', 'rtl');
      this.lang = 'ar';
    }
    this.translate.use(language);
    this.langSelected.next(language) // every time the method is called the value is passed to subscribed components
    console.log(`Service Language: ${this.lang}`);
  }
}
