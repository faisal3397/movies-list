import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie = new Movie("The Lord of the Rings: The return of the King",2003, "Fantasy", "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.","https://images-na.ssl-images-amazon.com/images/I/71X6YzwV0gL._SY550_.jpg");
  constructor() { }

  ngOnInit() {
  }

}
