import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JokeTypeEnum } from '../enums/enums';
import { Joke, JokeSearchFormValue } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class JokesDataService {
  private jokeTypeEnum = JokeTypeEnum;
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  fetchCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + 'categories');
  }

  fetchJoke(formValue: JokeSearchFormValue): Observable<Joke> {
    const jokeTypeEnum = this.jokeTypeEnum;
    const urls = {
      [jokeTypeEnum[1]]: `${formValue.apiValue.random}`,
      [jokeTypeEnum[2]]: `random?${formValue.formOptions}=${formValue.apiValue.categories}`,
      [jokeTypeEnum[3]]: `${formValue.formOptions}?query=${formValue.apiValue.search}`
    };
    return this.http.get<Joke>(this.apiUrl + urls[formValue.formOptions]);
  }

  getDataFromDb(): Observable<Joke[]> {
    return this.http.get<Joke[]>(this.apiUrl + 'user-favorite').pipe(
      map(joke =>
        joke.map(i => {
          i.favorite = true;
          return i;
        })
      )
    );
  }

  saveJokeToDb(id: number | string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}favorite/${id}`, id);
  }

  removeFromDb(id: number | string): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}favorite/${id}`);
  }
}
