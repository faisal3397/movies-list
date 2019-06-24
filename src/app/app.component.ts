import { Component } from '@angular/core';
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
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  
  useLanguage(language: string) {
    this.translate.use(language);
  }

}
