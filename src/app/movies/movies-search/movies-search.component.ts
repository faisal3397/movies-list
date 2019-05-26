import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.css']
})
export class MoviesSearchComponent implements OnInit {
  title = '';
  resultMovie: Movie;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onSearch() {
    this.httpClient.get(`http://www.omdbapi.com/?t=${this.title}&apikey=79fe984`).subscribe( (res) => {
      console.log(res);
      console.log(res['Title']);
      this.resultMovie = new Movie(6,res['Title'],res['Year'],res['Genre'],res['Plot'],res['Poster']);
      console.log(this.resultMovie);
      
    });
  }
}
