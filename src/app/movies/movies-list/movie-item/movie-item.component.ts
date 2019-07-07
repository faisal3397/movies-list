import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../movie.model';
import { MovieService } from '../../movie.service';
import { LocalizationService } from 'src/app/shared/localization.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie: Movie;
  lang
  constructor(private movieService: MovieService, private localizationService: LocalizationService) { }

  ngOnInit() {
    this.localizationService.langSelected.subscribe( value => {
      console.log('Subscription Value: ', value);
      this.lang = value;
    });
  }
}
