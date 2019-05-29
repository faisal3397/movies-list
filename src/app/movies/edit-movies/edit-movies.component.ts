import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-edit-movies',
  templateUrl: './edit-movies.component.html',
  styleUrls: ['./edit-movies.component.css']
})
export class EditMoviesComponent implements OnInit {
  id: number;
  editMode = false;
  addMovieForm: FormGroup;
  newMovie: Movie;
  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        console.log(this.editMode);
      }
    )

    this.addMovieForm = new FormGroup({
      'movieTitle': new FormControl(null),
      'movieYear': new FormControl(null),
      'movieGenre': new FormControl(null),
      'posterUrl': new FormControl(null),
      'moviePlot': new FormControl(null),
    });
  }

  onSubmit() {
    console.log('form values', this.addMovieForm.value);
    const id = Math.floor(Math.random() * 101);
    const title = this.addMovieForm.value.movieTitle;
    const year = this.addMovieForm.value.movieYear;
    const genre = this.addMovieForm.value.movieGenre;
    const poster = this.addMovieForm.value.posterUrl;
    const plot = this.addMovieForm.value.moviePlot;
    this.movieService.createMovie(id, title, year, genre, plot, poster);
    this.addMovieForm.reset();
  }

}
