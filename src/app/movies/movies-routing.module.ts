import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { AuthGuard } from '../auth/auth.guard';
import { MoviesStartComponent } from './movies-start/movies-start.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { EditMoviesComponent } from './edit-movies/edit-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesResolverService } from './movies-resolver.service';

const routes: Routes = [
    { path: 'movies', 
    component: MoviesComponent,
    canActivate: [AuthGuard], // Our Authentication guard to check if the user is logged in or not
    children: [
    {path: '', component: MoviesStartComponent},
    {path: 'search', component: MoviesSearchComponent},
    {path: 'new', component: EditMoviesComponent},
    {path: ':id', component: MovieDetailComponent, resolve: [MoviesResolverService]},
    {path: ':id/edit', component: EditMoviesComponent, resolve: [MoviesResolverService]}
  ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MoviesRoutingModule {}
