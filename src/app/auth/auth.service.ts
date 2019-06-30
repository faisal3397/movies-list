import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs/operators';
import {throwError, Subject} from 'rxjs';
import { User } from './user.model';

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

  user = new Subject<User>();

  constructor(private http: HttpClient) { }

  signup(signupEmail: string, signupPassword: string) {
   return this.http.post<AuthResponseData>(
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBQhHpFWgqTUO-A_nHbMkxH1KnlpPbrVfw',
      {
        email: signupEmail,
        password: signupPassword,
        returnSecureToken: true
      }
    ).pipe(catchError(this.errorHandling), tap(resData => {
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
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
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
    }));
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn*1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  private errorHandling(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
          errorMessage = 'This Email already exists';
          break;
      case 'EMAIL_NOT_FOUND':
          errorMessage = 'Email does not exist!';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'Invalid credentials!';
          break;
        case 'USER_DISABLED':
          errorMessage = 'The user account is disabled!';
          break;
    }

    return throwError(errorMessage);
  }
}
