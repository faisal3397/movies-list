import { Component, Renderer2 } from '@angular/core';
import { Movie } from './movies/movie.model';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-list';
  navigateTo = 'movies';
  constructor(private translate: TranslateService, private renderer: Renderer2) {
    translate.setDefaultLang('en');
  }
  
  useLanguage(language: string) {
    if( language == 'en') {
      this.renderer.setAttribute(document.body, 'dir', 'ltr');
    } else {
      this.renderer.setAttribute(document.body, 'dir', 'rtl');
    }
    this.translate.use(language);
  }

}
