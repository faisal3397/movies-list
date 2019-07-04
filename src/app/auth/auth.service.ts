import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs/operators';
import {throwError, Subject, BehaviorSubject} from 'rxjs';
import { User } from './user.model';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

export interface AuthResponseData {
  kind:	string;
  idToken: string;
  email: string;
  refreshToken:	string;
  expiresIn: string;
  localId: string;
  registered?: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null); // we need behavior subject to keep the state when the user refresh the page
  private tokenExpirationTimer;

  constructor(private http: HttpClient, private router: Router) { }

  signup(signupEmail: string, signupPassword: string) {
   return this.http.post<AuthResponseData>(
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBQhHpFWgqTUO-A_nHbMkxH1KnlpPbrVfw',
      {
        email: signupEmail,
        password: signupPassword,
        returnSecureToken: true
      }
    ).pipe(catchError(this.errorHandling), tap(resData => {
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }

  signIn(signinEmail: string, signinPassword: string) {
    return this.http.post<AuthResponseData>(
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBQhHpFWgqTUO-A_nHbMkxH1KnlpPbrVfw',
      {
        email: signinEmail,
        password: signinPassword,
        returnSecureToken: true
      }
    ).pipe(catchError(this.errorHandling), tap(resData => {
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }

  autoLogin() { // we load the user here so that we don't lose it when we refresh the page,
                // this method should be called from app.component.ts
                // we called JSON.parse to turn the string back into an object
    const userData: {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationDate: Date
    } = JSON.parse(localStorage.getItem('userData'));
    if(!userData) {
      return;
    }
    const loadedUser = new User(userData.email,
                                userData.id,
                                userData._token,
                                new Date(userData._tokenExpirationDate)
                                );
    if(loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime()
      // the duration that we have until the token expires
      this.autoLogout(expirationDuration);
    }
  }

  signOut() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.clear();
    if(this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null; // if the user logs out we will not need a timer for the token
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.signOut();
    }, expirationDuration);
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000); // activate token timer
    localStorage.setItem('userData', JSON.stringify(user));
    // save the user data to local storage so that we don't lose it when we refresh the page
    // we called JSON.stringify to turn the object into a string because we need to store it as a string
  }

  private errorHandling(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
          errorMessage = 'demo.emailExists';
          break;
      case 'EMAIL_NOT_FOUND':
          errorMessage = 'demo.emailNotFound';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'demo.invalidPassword';
          break;
        case 'USER_DISABLED':
          errorMessage = 'demo.userDisabled';
          break;
    }

    return throwError(errorMessage);
  }
}
