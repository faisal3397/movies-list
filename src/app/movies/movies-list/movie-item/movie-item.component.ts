import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../movie.model';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie: Movie;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  onMovieClick(){
    this.movieService.movie = this.movie;
    this.movieService.movieSelected.emit(this.movie);
  }

}
