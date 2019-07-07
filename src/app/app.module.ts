import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { HeaderComponent } from './header/header.component';
import { MovieItemComponent } from './movies/movies-list/movie-item/movie-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { MovieService } from './movies/movie.service';
import { MoviesStartComponent } from './movies/movies-start/movies-start.component';
import { EditMoviesComponent } from './movies/edit-movies/edit-movies.component';
import { MoviesSearchComponent } from './movies/movies-search/movies-search.component';
import { AuthComponent } from './auth/auth.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MoviesResolverService } from './movies/movies-resolver.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { LangBtnsComponent } from './lang-btns/lang-btns.component';
// end of ngx-translate and the http loader imports


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    WatchListComponent,
    MoviesListComponent,
    MovieDetailComponent,
    HeaderComponent,
    MovieItemComponent,
    DropdownDirective,
    MoviesStartComponent,
    EditMoviesComponent,
    MoviesSearchComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    LangBtnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    // ngx-translate and the loader module
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [MovieService, MoviesResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}