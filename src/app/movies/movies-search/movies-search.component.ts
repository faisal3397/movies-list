import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalizationService } from 'src/app/shared/localization.service';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.css']
})
export class MoviesSearchComponent implements OnInit {
  title = '';
  resultMovie: Movie;
  searchMovieForm: FormGroup;
  lang;
  constructor(private httpClient: HttpClient, private movieService: MovieService, private localizationService: LocalizationService) { }

  ngOnInit() { 
    this.searchMovieForm = new FormGroup({
      'movieTitle': new FormControl(null, Validators.required)
    });

    this.localizationService.langSelected.subscribe( value => {
      console.log('Subscription Value: ', value);
      this.lang = value;
    });
  }

  onSearch() {
    this.title = this.searchMovieForm.value.movieTitle;
    this.httpClient.get(`http://www.omdbapi.com/?t=${this.title}&apikey=79fe984`).subscribe( (res) => {
      if(res['Title'] !== undefined || this.movieService.titleExist(res['Title'])){
        const id = Math.floor(Math.random() * 10001);
        this.resultMovie = new Movie(id,res['Title'],res['Year'],res['Genre'],res['Plot'],res['Poster']);
        this.movieService.createMovie(id,res['Title'],res['Year'],res['Genre'],res['Plot'],res['Poster'])
      } else {
        console.log('movie does not exist');
      }
    });
    this.searchMovieForm.reset();
  }

  addToWatchList(movie: Movie) {
    this.movieService.addToWatchlist(movie);
  }
}
