import { Component, Renderer2, OnInit, OnChanges } from '@angular/core';
import { Movie } from './movies/movie.model';
import {TranslateService} from '@ngx-translate/core';
import { MovieService } from './movies/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'movies-list';
  navigateTo = 'movies';
  constructor(private translate: TranslateService, private renderer: Renderer2, private movieService: MovieService) {
    translate.setDefaultLang('en');
  }
  
  ngOnInit(){
    this.movieService.fetchMovies();
    this.movieService.fetchWatchlist();
  }

  ngOnChanges() {
    this.movieService.fetchMovies();
    this.movieService.fetchWatchlist();
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
