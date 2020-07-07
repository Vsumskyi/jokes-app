import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormProperty } from '../enums/FormProperty';
import { Joke, JokeSearchFormValue } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable()
export class JokesDataService {
  localStorageKey = 'jokes';
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  fetchCategory(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + 'categories');
  }

  fetchJoke(formValue: JokeSearchFormValue): Observable<Joke> {
    const urls = {
      [FormProperty[1]]: `${formValue.apiValue.random}`,
      [FormProperty[2]]: `random?${formValue.formOptions}=${formValue.apiValue.categories}`,
      [FormProperty[3]]: `${formValue.formOptions}?query=${formValue.apiValue.search}`
    };
    return this.http.get<Joke>(this.apiUrl + urls[formValue.formOptions]);
  }

  saveToLocalStorage(favoritesJokes: Joke[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(favoritesJokes));
  }
  getDataFromLocalStorage(): Joke[] {
    const jokes = JSON.parse(localStorage.getItem(this.localStorageKey));
    return jokes || [];
  }
}
