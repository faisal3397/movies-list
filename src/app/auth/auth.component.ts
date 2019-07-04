import { Component, OnInit } from '@angular/core';
import { Form, NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService, AuthResponseData } from './auth.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error = null;
  authForm: FormGroup;
  constructor(private http: HttpClient,
              private authService: AuthService,
              private translate: TranslateService,
              private router: Router) { }

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (!this.authForm.valid) {
      return;
    }
    const email = this.authForm.value.email;
    const password = this.authForm.value.password;
    this.isLoading = true;
    let authObs: Observable<AuthResponseData>

    if (this.isLoginMode === false) {
      authObs = this.authService.signup(email, password);
      } else {
      // signin
      authObs = this.authService.signIn(email, password);
    }

    authObs.subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
      this.router.navigate(['/movies']);
    }, errorRes => {
       this.translate.get(errorRes).subscribe((errorResponse) => { //translate the error then assign it to this.error
          this.error = errorResponse;
          }
        );
      this.isLoading = false;
    });



    this.authForm.reset();
  }

}
