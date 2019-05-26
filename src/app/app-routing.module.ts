import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MoviesStartComponent } from './movies/movies-start/movies-start.component';
import { EditMoviesComponent } from './movies/edit-movies/edit-movies.component';

const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies', component: MoviesComponent, children: [
    {path: '', component: MoviesStartComponent},
    {path: 'new', component: EditMoviesComponent},
    {path: ':id', component: MovieDetailComponent},
    {path: ':id/edit', component: EditMoviesComponent}
  ]},
  {path: 'watchlist', component: WatchListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
