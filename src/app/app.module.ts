import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

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
    EditMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
