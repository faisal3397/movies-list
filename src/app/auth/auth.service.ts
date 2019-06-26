import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
  kind:	string;
  idToken: string;
  email: string;
  refreshToken:	string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(signupEmail: string, signupPassword: string) {
   return this.http.post<AuthResponseData>(
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBQhHpFWgqTUO-A_nHbMkxH1KnlpPbrVfw',
      {
        email: signupEmail,
        password: signupPassword,
        returnSecureToken: true
      }
    );
  }
}
