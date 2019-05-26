import { Component, OnInit} from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;


  constructor(private movieService: MovieService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.movie = this.movieService.getMovie(+params.id);
    });
  }

  addToWatchList(movie: Movie) {
    this.movieService.addToWatchlist(movie);
  }
}
