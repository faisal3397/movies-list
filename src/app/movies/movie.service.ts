import { Movie } from './movie.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class MovieService {

    movies: Movie[] = [];
    movie: Movie;
    watchList: Movie[] = [];

    constructor(private httpClient: HttpClient, private authService: AuthService) {}

    setMovies(movies: Movie[]) {
        this.movies = movies;
    }

    setWatchlist(watchlistMovies: Movie[]) {
        this.watchList = watchlistMovies;
    }

    fetchMovies() {
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                return this.httpClient.
                get<Movie[]>(`http://localhost:8080/api/movies/`);
            }), tap( responseData => {
                    if (responseData != null) {
                        // console.log(responseData._embedded.movies);
                        // this.setMovies(responseData._embedded.movies);
                        console.log(responseData);
                        this.setMovies(responseData);
                    }
                })
        );
    }


    fetchWatchlist() {
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                return this.httpClient.
                get<Movie[]>(`https://movies-list-56684.firebaseio.com/watchlist.json?auth=${user.token}`);
            }), tap( responseData => {
                    if (responseData != null) {
                        this.setWatchlist(responseData);
                    }
                })
        );
    }

    storeMovie(movie) {
        this.httpClient.post(`http://localhost:8080/api/movies/`, movie).subscribe(res => {
            console.log('Movie Was Stored', res)
        });
    }


    addToWatchlist(movie: Movie) {
        let count = 0;
        this.watchList.forEach(el => {
            if (el.title === movie.title) {
                count++;
            }
        });
        if (count === 0 ) {
            this.watchList.push(movie);
            return this.authService.user.pipe(
                exhaustMap(user => {
                    return this.httpClient.put(
                    `https://movies-list-56684.firebaseio.com/watchlist.json?auth=${user.token}`, this.watchList);
                })
            );
        } else {
            console.log('movie is already on the watchlist', movie);
        }
    }

    removeFromWatchlist(movie: Movie) {
        const index = this.watchList.indexOf(movie);
        this.watchList.splice(index, 1);
        return this.authService.user.pipe(
            exhaustMap(user => {
                return this.httpClient.put(
                `https://movies-list-56684.firebaseio.com/watchlist.json?auth=${user.token}`, this.watchList);
            })
        );
    }

    getMovie(id: number) {
        const movie = this.movies.find(
            (m) => {
                return m.id === id;
            }
        );

        return movie;
    }

    getMovies() {
        return this.movies;
    }

    titleExist(title: string) {
        let count = 0;
        if (this.movies != null) {
            this.movies.forEach(el => {
                if (el.title === title) {
                    count++;
                }
            });
        }


        return count;
    }

    createMovie(id: number, title: string, year: number, genre: string, plot: string, posterUrl: string) {
        const newMovie = new Movie(id, title, year, genre, plot, posterUrl);
        if (this.titleExist(newMovie.title) === 0) {
            this.movies.push(newMovie);
            this.storeMovie(newMovie);
        } else {
            console.log('movie exists');
        }
    }
}
