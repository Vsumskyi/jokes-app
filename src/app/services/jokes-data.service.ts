import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JokeTypeEnum } from '../enums/enums';
import {
  Joke,
  JokeSearchFormValue,
  PostJokeInterface,
  CategoryInterface
} from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class JokesDataService {
  private jokeTypeEnum = JokeTypeEnum;
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  fetchCategories(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>(this.apiUrl + 'categories');
  }

  fetchJoke(formValue: JokeSearchFormValue): Observable<Joke> {
    const jokeTypeEnum = this.jokeTypeEnum;
    const urls = {
      [jokeTypeEnum.Random]: `${formValue.apiValue.random}`,
      [jokeTypeEnum.Category]: `random?${formValue.formOptions}=${formValue.apiValue.categories}`,
      [jokeTypeEnum.Search]: `${formValue.formOptions}?query=${formValue.apiValue.search}`
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

  postJoke(joke: PostJokeInterface): Observable<Joke> {
    return this.http.post<Joke>(this.apiUrl, joke);
  }

  saveJokeToDb(id: number | string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}favorite/${id}`, id);
  }

  removeFromDb(id: number | string): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}favorite/${id}`);
  }
}
