import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/shared/localization.service';

@Component({
  selector: 'app-movies-start',
  templateUrl: './movies-start.component.html',
  styleUrls: ['./movies-start.component.css']
})
export class MoviesStartComponent implements OnInit {

  lang
  constructor(private localizationService: LocalizationService) { }

  ngOnInit() {
    this.localizationService.langSelected.subscribe( value => {
      // console.log('Subscription Value: ', value);
      this.lang = value;
    });
  }

}
