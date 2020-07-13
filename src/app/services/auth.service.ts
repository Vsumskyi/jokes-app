import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = environment.authUrl;
  private localStorageKey = 'user';
  public userData: User;
  public isAuthenticated = false;

  refreshUserData(): void {
    const userData = this.getAuthData();
    if (!userData) {
      return;
    }
    this.isAuthenticated = true;
    this.userData = userData;
  }

  constructor(private http: HttpClient) {}

  getAuthData(): User {
    return JSON.parse(localStorage.getItem(this.localStorageKey));
  }
  setAuthData(user: User, remember: boolean): void {
    this.userData = user;
    this.isAuthenticated = true;
    if (remember) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(user));
    }
  }
  login(user: User): Observable<any> {
    return this.http.post(this.authUrl + 'signin', user);
  }
  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem(this.localStorageKey);
  }
}
