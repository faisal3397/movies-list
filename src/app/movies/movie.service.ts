import { Movie } from './movie.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

    movies: Movie[] = [];
    movie: Movie;
    watchList: Movie[] = [];

    constructor(private httpClient: HttpClient) {}

    setMovies(movies: Movie[]) {
        this.movies = movies;
    }

    setWatchlist(watchlistMovies: Movie[]) {
        this.watchList = watchlistMovies
    }

    fetchMovies() {
        console.log('I am In');        
        return this.httpClient.get<Movie[]>('https://movies-list-56684.firebaseio.com/movies.json').subscribe(responseData => {
            console.log('Fetch Movies', responseData)
            if(responseData != null) {
                 this.setMovies(responseData);
            }
        });
    }

    fetchWatchlist() {
        return this.httpClient.get<Movie[]>('https://movies-list-56684.firebaseio.com/watchlist.json').subscribe(responseData => {
            console.log('Fetch Watchlist', responseData)
            if(responseData != null) {
                 this.setWatchlist(responseData);
            }
        });
    }

    storeMovies(){
        const storedMovies = this.getMovies();
        this.httpClient.put('https://movies-list-56684.firebaseio.com/movies.json', storedMovies).subscribe(response => {
            console.log('store', response);
        })
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
            this.httpClient.put('https://movies-list-56684.firebaseio.com/watchlist.json', this.watchList).subscribe(response => {
                console.log('store watchlist', response);
            })
            console.log('movie added to the watchlist');
        } else {
            console.log('movie is already on the watchlist');
        }
    }

    removeFromWatchlist(movie: Movie) {
        const index = this.watchList.indexOf(movie);
        this.watchList.splice(index, 1);
        this.httpClient.put('https://movies-list-56684.firebaseio.com/watchlist.json', this.watchList).subscribe(response => {
            console.log('store watchlist', response);
        })
    }

    getMovie(id: number) {
        const movie = this.movies.find(
            (m) => {
                return m.id === id;
            }
        );

        return movie;
    }

    getMovies(){
        return this.movies;
    }

    titleExist(title: string) {
        let count = 0;
        if(this.movies != null){
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
            this.storeMovies()
        } else {
            console.log('movie exists');
        }
    }
}
