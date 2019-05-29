import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
      'movieTitle': new FormControl(null, Validators.required),
      'movieYear': new FormControl(null, Validators.required),
      'movieGenre': new FormControl(null, Validators.required),
      'posterUrl': new FormControl(null, Validators.required),
      'moviePlot': new FormControl(null, Validators.required),
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
