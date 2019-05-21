import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
