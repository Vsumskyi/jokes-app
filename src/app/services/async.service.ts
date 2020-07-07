import { FormProperty } from './../enums/FormProperty';
import { HttpClient } from '@angular/common/http';
import { Joke, FormValue } from '../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AsyncService {
  LOCAL_STORAGE_KEY = 'jokes';

  constructor(private http: HttpClient) {}

  fetchJoke(formValue: FormValue): Observable<Joke> {
    let baseUrl = 'https://api.chucknorris.io/jokes/';

    if (formValue.formOptions === FormProperty.Random) {
      baseUrl += formValue.apiValue.random;
    }
    if (formValue.formOptions === FormProperty.Category) {
      baseUrl += `random?${formValue.formOptions}=${formValue.apiValue.categories}`;
    }
    if (formValue.formOptions === FormProperty.Search) {
      baseUrl += `${formValue.formOptions}?query=${formValue.apiValue.search}`;
    }

    return this.http.get<Joke>(baseUrl);
  }

  saveToLocalStorage(favoritesJokes: Joke[]): void {
    localStorage.setItem(
      this.LOCAL_STORAGE_KEY,
      JSON.stringify(favoritesJokes)
    );
  }
  getDataFromLocalStorage(): Joke[] {
    const jokes = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY));
    return jokes.length && jokes;
  }
}
