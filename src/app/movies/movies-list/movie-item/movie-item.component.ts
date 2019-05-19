import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie: Movie;
  @Output() movieClicked = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onMovieClick(){
    this.movieClicked.emit();
  }

}
