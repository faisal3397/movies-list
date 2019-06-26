import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movies/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() pageSelected = new EventEmitter<string>();

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  onSelect(page: string){
    this.pageSelected.emit(page)
  }



}
