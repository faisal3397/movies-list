import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MovieService } from '../movies/movie.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  @Output() pageSelected = new EventEmitter<string>();

  constructor(private movieService: MovieService, private authService: AuthService, private router: Router ){ }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe( user => {
      this.isAuthenticated = !!user //the inverse of !user so if there is a user authinticated will be true or it will be false
    });
  }

  onSelect(page: string){
    this.pageSelected.emit(page)
  }

  onLogout() {
    this.authService.signOut();
  }


  ngOnDestroy() {
    this.userSub.unsubscribe()
  }


}
