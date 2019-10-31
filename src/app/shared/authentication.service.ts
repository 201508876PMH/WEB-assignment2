import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = 'https://protected-eyrie-63584.herokuapp.com/api/users';
  redirectUrl: string;
  

  constructor(private httpClient: HttpClient,
              private router: Router, private _snackBar: MatSnackBar) {
  }

  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  public getCurrentUser() {
    if (this.isLoggedIn()) {
      const token = this.getToken();
      const payload = JSON.parse(window.atob(token.split('.')[1]));
      const user = new User();
      user.emailAddress = payload.emailAddress;
      user.firstName = payload.firstName;
      user.lastName = payload.lastName;
      return user;
    } else {
      return '';
    }
  }

  public isLoggedIn() {
    const token = this.getToken();

    if (token) {
      const payload = JSON.parse(window.atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public logout() {
    this.removeToken();
  }

  public login(user: User) {
    console.log('logging in this user:', user);
    const url = `${this.baseUrl}/login`;
    this.httpClient.post(url, user).subscribe(data => {
      this.saveToken(data['token']);
      console.log(this.redirectUrl);

      if (this.redirectUrl) {
        console.log(this.redirectUrl);
        this.router.navigate([this.redirectUrl]);
      } else {
        this.router.navigate(['/']);
      }
      return true;
    }, (err: HttpErrorResponse) => {

      this.openSnackBar("Login failed, invalid username or password", "OK");

      if (err.error instanceof Error) {
        console.log('an error occured:', err.error.message);
      } else {
        console.log(`backend return code ${err.status}, body was: ${err.error}`);
      }
    });

  }

   

  public register(user: User) {
    const url = `${this.baseUrl}/createUser`;
    this.httpClient.post(url, user).subscribe(data => {
        // this.saveToken(data.token);

        this.router.navigate(['/']);

        return true;
      }, (err: HttpErrorResponse) => {

        if (err.error instanceof Error) {
          console.log('an error occured:', err.error.message);
        } else {          
          console.log(`backend return code ${err.status}, body was: ${err.error}`);
        }
      }
    );
  }

  private saveToken(token: string) {
    window.localStorage['loc8r-token'] = token;
  }

  private removeToken() {
    window.localStorage.removeItem('loc8r-token');
  }

  public getToken() {
    if (window.localStorage['loc8r-token']) {
      return window.localStorage['loc8r-token'];
    } else {
      return '';
    }
  }
}
