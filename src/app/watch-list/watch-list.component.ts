import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movies/movie.model';
import { MovieService } from '../movies/movie.service';
import { LocalizationService } from '../shared/localization.service';
@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {


  watchlistMovies: Movie[];
  lang;
  constructor(private movieService: MovieService, private localizationService: LocalizationService) { }

  ngOnInit() {
    this.watchlistMovies = this.movieService.watchList;

    this.localizationService.langSelected.subscribe( value => {
      console.log('Subscription Value: ', value);
      this.lang = value;
    });
  }

  remove(movie: Movie){
    this.movieService.removeFromWatchlist(movie).subscribe();
  }
}
