import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from "../movie.model";
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: Movie[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.movies;
  }


}
