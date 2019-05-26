import { Movie } from './movie.model';
import { EventEmitter } from '@angular/core';

export class MovieService {
    movie1 = new Movie(1,
                        "The Lord of the Rings: The return of the King",
                        2003,
                        "Fantasy",
                        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
                        "https://images-na.ssl-images-amazon.com/images/I/71X6YzwV0gL._SY550_.jpg");
    movie2 = new Movie(2,
                        "Inception",
                        2010,
                        "Sci-fi/Thriller",
                        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
                        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg");
    movie3 = new Movie(3,
                        "Fight Club",
                        1999,
                        "Drama/Action",
                        "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
                        "https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWJhNWMtZDY4Nzc1MDAwMzU5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg");
    movie4 = new Movie(4,
                        "Avengers: Endgame",
                        2019,
                        "Fantasy/Sci-fi",
                        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
                        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg");
    movies: Movie[] = [this.movie1, this.movie2, this.movie3, this.movie4];
    movie: Movie;
    watchList: Movie[] = [];
    movieSelected = new EventEmitter<Movie>();


    addToWatchlist(movie: Movie){
        this.watchList.push(movie);
    }

    removeFromWatchlist(movie: Movie){
        let index = this.watchList.indexOf(movie);
        this.watchList.splice(index, 1);
    }

    getMovie(id: number) {
        const movie = this.movies.find(
            (m) => {
                return m.id === id;
            }
        );

        return movie;
    }
}