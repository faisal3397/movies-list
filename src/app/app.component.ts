import { Component, Renderer2, OnInit, OnChanges } from '@angular/core';
import { Movie } from './movies/movie.model';
import {TranslateService} from '@ngx-translate/core';
import { MovieService } from './movies/movie.service';
import { AuthService } from './auth/auth.service';
import { LocalizationService } from './shared/localization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movies-list';
  navigateTo = 'movies';
  constructor(private translate: TranslateService,
              private authService: AuthService,
              private localizationService: LocalizationService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.authService.autoLogin();
  }

}
