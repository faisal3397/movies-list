import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: Movie;
  @Output() addMovieToWatchList = new EventEmitter<Movie>();
  constructor() { }

  ngOnInit() {
  }

  onMovieWasSelected(selectedMovie: Movie){
    this.movie = selectedMovie;
  }

  movieToAdd(movieToAdd: Movie){
    // console.log("movie to add ",movieToAdd);
    this.addMovieToWatchList.emit(movieToAdd)
  }

}
