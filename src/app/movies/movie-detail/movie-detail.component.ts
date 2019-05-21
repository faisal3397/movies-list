import { Component, OnInit} from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit{
  movie: Movie;


  constructor(private movieService: MovieService) {
    this.movieService.movieSelected.subscribe( (movie: Movie) => {
      this.movie = movie;
     }
    );
  }

  ngOnInit() {
   
  }

  addToWatchList(movie: Movie){
    this.movieService.addToWatchlist(movie);
  }
}
