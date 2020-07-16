import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  UserInterface,
  RegistryUser,
  LoginUser,
  ApiUserInterface
} from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { AuthPropertiesEnum } from '../enums/enums';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = environment.authUrl;
  private localStorageKey = 'user';
  private userData: UserInterface;
  private isAuthenticated = false;
  private authPropertiesEnum = AuthPropertiesEnum;

  constructor(private http: HttpClient) {}

  get user(): UserInterface {
    return this.userData;
  }

  get authenticated(): boolean {
    return this.isAuthenticated;
  }

  refreshUserData(): void {
    const userData = this.getAuthData();
    if (!userData) {
      return;
    }
    this.isAuthenticated = true;
    this.userData = userData;
  }

  getAuthData(): UserInterface {
    return JSON.parse(localStorage.getItem(this.localStorageKey));
  }

  setAuthData(user: UserInterface, remember: boolean): void {
    this.userData = user;
    this.isAuthenticated = true;
    if (remember) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(user));
    }
  }

  signup(user: RegistryUser): Observable<boolean> {
    return this.http.post<boolean>(
      this.authUrl + this.authPropertiesEnum['Sign up'],
      user
    );
  }
  signin(user: LoginUser): Observable<UserInterface> {
    return this.http
      .post<ApiUserInterface>(
        this.authUrl + this.authPropertiesEnum['Sign in'],
        user
      )
      .pipe(
        map(data => ({
          token: data.token,
          email: data.user.email,
          firstName: data.user.firstName,
          lastName: data.user.lastName
        }))
      );
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem(this.localStorageKey);
  }
}
