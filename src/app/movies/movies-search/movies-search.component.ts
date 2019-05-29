import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.css']
})
export class MoviesSearchComponent implements OnInit {
  title = '';
  resultMovie: Movie;
  searchMovieForm: FormGroup;
  constructor(private httpClient: HttpClient, private movieService: MovieService) { }

  ngOnInit() { 
    this.searchMovieForm = new FormGroup({
      'movieTitle': new FormControl(null, Validators.required)
    });
  }

  onSearch() {
    this.title = this.searchMovieForm.value.movieTitle;
    console.log("title", this.title);
    this.httpClient.get(`http://www.omdbapi.com/?t=${this.title}&apikey=79fe984`).subscribe( (res) => {
      if(res['Title'] !== undefined){
        const id = Math.floor(Math.random() * 101);
        this.resultMovie = new Movie(id,res['Title'],res['Year'],res['Genre'],res['Plot'],res['Poster']);
        this.movieService.createMovie(id,res['Title'],res['Year'],res['Genre'],res['Plot'],res['Poster'])
        console.log('result: ', this.resultMovie);
      } else {
        console.log('movie does not exist');
      }

    });
  }

  addToWatchList(movie: Movie) {
    this.movieService.addToWatchlist(movie);
  }
}
