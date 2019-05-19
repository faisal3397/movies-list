import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;
  @Output() toAddClicked = new EventEmitter<Movie>();
  constructor() { }

  ngOnInit() {
  }

  toBeAdded(movie: Movie){
    // console.log("added to watch list",movie);
    this.toAddClicked.emit(movie)
  }


}
