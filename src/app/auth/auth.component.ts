import { Component, OnInit } from '@angular/core';
import { Form, NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  authForm: FormGroup;
  constructor(private http: HttpClient, private authService: AuthService) { }

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
    console.log(this.authForm.value);
    const email = this.authForm.value.email;
    const password = this.authForm.value.password;
    if(this.isLoginMode === false) {
      this.authService.signup(email, password).subscribe(resData => {
        console.log(resData);
      }, error => {
        console.log(error)
      });
    } else {
      // signin
    }


    this.authForm.reset();
  }
}
