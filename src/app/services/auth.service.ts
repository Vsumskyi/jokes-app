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
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = environment.authUrl;
  private localStorageKey = 'user';
  public userData: UserInterface;
  public isAuthenticated = false;
  private authPropertiesEnum = AuthPropertiesEnum;

  constructor(private http: HttpClient) {}

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
      this.authUrl + this.authPropertiesEnum[2],
      user
    );
  }
  signin(user: LoginUser): Observable<UserInterface> {
    return this.http
      .post<ApiUserInterface>(this.authUrl + this.authPropertiesEnum[1], user)
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
