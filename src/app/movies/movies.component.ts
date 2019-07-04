import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MovieService } from './movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnChanges {
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.fetchMovies().subscribe();
    this.movieService.fetchWatchlist().subscribe();
  }

  ngOnChanges(){
    this.movieService.fetchMovies().subscribe();
    this.movieService.fetchWatchlist().subscribe();
  }


}
