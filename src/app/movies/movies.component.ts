import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from './movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    
  }


}
