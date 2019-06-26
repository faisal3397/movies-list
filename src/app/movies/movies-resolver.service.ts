import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';

@Injectable()
export class MoviesResolverService implements Resolve<Movie[]>{
    constructor(private movieService: MovieService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.movieService.fetchMovies()
    }
}