import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalizationService } from '../shared/localization.service';

@Component({
  selector: 'app-lang-btns',
  templateUrl: './lang-btns.component.html',
  styleUrls: ['./lang-btns.component.scss']
})
export class LangBtnsComponent implements OnInit {

  lang;
  constructor( private localizationService: LocalizationService) { }

  ngOnInit() {
    this.localizationService.langSelected.subscribe( value => {
      // console.log('Subscription Value: ', value);
      this.lang = value
    })
  }

  onChangeLang(lang: string) {
    this.localizationService.useLanguage(lang);
  }

}
