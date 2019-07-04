import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movies/movie.model';
import { MovieService } from '../movies/movie.service';
@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {


  watchlistMovies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.watchlistMovies = this.movieService.watchList;
  }

  remove(movie: Movie){
    this.movieService.removeFromWatchlist(movie).subscribe();
  }
}
