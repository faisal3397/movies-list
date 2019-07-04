import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MoviesStartComponent } from './movies/movies-start/movies-start.component';
import { EditMoviesComponent } from './movies/edit-movies/edit-movies.component';
import { MoviesSearchComponent } from './movies/movies-search/movies-search.component';
import { MoviesResolverService } from './movies/movies-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  { path: 'movies', 
    component: MoviesComponent,
    canActivate: [AuthGuard], // Our Authentication guard to check if the user is logged in or not
    children: [
    {path: '', component: MoviesStartComponent},
    {path: 'search', component: MoviesSearchComponent},
    {path: 'new', component: EditMoviesComponent},
    {path: ':id', component: MovieDetailComponent, resolve: [MoviesResolverService]},
    {path: ':id/edit', component: EditMoviesComponent, resolve: [MoviesResolverService]}
  ]},
  {
    path: 'watchlist',
    component: WatchListComponent,
    canActivate: [AuthGuard]},
  {path:'auth', component: AuthComponent},
  {path: '**', redirectTo: 'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
