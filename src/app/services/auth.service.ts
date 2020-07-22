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
import { AuthPropertiesEnum, RolesEnum } from '../enums/enums';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = environment.authUrl;
  private localStorageKey = 'user';
  private userData: UserInterface;
  private isAdmin = false;
  private isAuthenticated = false;
  private authPropertiesEnum = AuthPropertiesEnum;
  private rolesEnum = RolesEnum;

  constructor(private http: HttpClient) {}

  public get user(): UserInterface {
    return this.userData;
  }

  public get authenticated(): boolean {
    return this.isAuthenticated;
  }

  public get adminStatus(): boolean {
    return this.isAdmin;
  }

  refreshUserData(): void {
    const userData = this.getAuthData();
    if (!userData) {
      return;
    }
    this.isAdmin = this.getAdminRole(userData);
    this.isAuthenticated = true;
    this.userData = userData;
  }

  getAuthData(): UserInterface {
    return JSON.parse(localStorage.getItem(this.localStorageKey));
  }

  getAdminRole(user: UserInterface): boolean {
    return user.roles.some(i => i === this.rolesEnum['Super Admin']);
  }

  setAuthData(user: UserInterface, remember: boolean): void {
    this.userData = user;
    this.isAuthenticated = true;
    this.isAdmin = this.getAdminRole(user);
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
          lastName: data.user.lastName,
          roles: data.user.roles
        }))
      );
  }

  logout(): void {
    this.isAdmin = false;
    this.isAuthenticated = false;
    localStorage.removeItem(this.localStorageKey);
  }
}
