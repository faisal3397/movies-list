import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movies/movie.model';
@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {


  @Input() movies: Movie[];

  constructor() { }

  ngOnInit() {
  }

  remove(movie: Movie){
    let index = this.movies.indexOf(movie);
    this.movies.splice(index, 1);
  }
}
