import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies/movie.model';
@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

  movie = new Movie("The Lord of the Rings: The return of the King",2003, "Fantasy", "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.","https://images-na.ssl-images-amazon.com/images/I/71X6YzwV0gL._SY550_.jpg");
  movie2 = new Movie("Inception",2010, "Sci-fi/Thriller", "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg");

  movies: Movie[] = [this.movie, this.movie2]

  constructor() { }

  ngOnInit() {
  }

}
