import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from "../movie.model";
import { MovieService } from '../movie.service';
import { LocalizationService } from 'src/app/shared/localization.service';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: Movie[] = [];
  lang
  constructor(private movieService: MovieService, private localizationService: LocalizationService) { }

  ngOnInit() {
    this.movies = this.movieService.movies;
    this.localizationService.langSelected.subscribe( value => {
      // console.log('Subscription Value: ', value);
      this.lang = value;
    });
  }


}
