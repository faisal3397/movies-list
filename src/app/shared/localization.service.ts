import { Injectable, Renderer2, RendererFactory2, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  private renderer: Renderer2;
  langSelected = new EventEmitter<string>(); // it is used so that other components change the layout based on its value
  lang;
  constructor(private translate: TranslateService, rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    if (localStorage.getItem('language')) {
      translate.setDefaultLang(localStorage.getItem('language'));
      translate.use(localStorage.getItem('language'));
      if (localStorage.getItem('language') === 'ar') {
        this.renderer.setAttribute(document.documentElement, 'dir', 'rtl');
        this.langSelected.next('ar');
      }
    } else {
      translate.setDefaultLang('en');
      translate.use('en');
      localStorage.setItem('language', 'en');
      this.langSelected.next('en');
      this.renderer.setAttribute(document.documentElement, 'dir', 'ltr');
    }
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
    localStorage.setItem('language', language);
    this.langSelected.next(language); // every time the method is called the value is passed to subscribed components
    console.log(localStorage);
  }

}
