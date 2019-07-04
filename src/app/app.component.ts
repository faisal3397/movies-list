import { Component, Renderer2, OnInit, OnChanges } from '@angular/core';
import { Movie } from './movies/movie.model';
import {TranslateService} from '@ngx-translate/core';
import { MovieService } from './movies/movie.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movies-list';
  navigateTo = 'movies';
  constructor(private translate: TranslateService,
              private renderer: Renderer2,
              private movieService: MovieService,
              private authService: AuthService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.authService.autoLogin();
    // this.movieService.fetchMovies().subscribe();
    // this.movieService.fetchWatchlist().subscribe();
  }


  useLanguage(language: string) {
    if ( language == 'en') {
      this.renderer.setAttribute(document.body, 'dir', 'ltr');
    } else {
      this.renderer.setAttribute(document.body, 'dir', 'rtl');
    }
    this.translate.use(language);
  }

}
