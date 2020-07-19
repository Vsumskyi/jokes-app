import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { JokeTypeEnum } from '../enums/enums';
import {
  Joke,
  JokeSearchFormValue,
  PostJokeInterface,
  CategoryInterface
} from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable()
export class JokesDataService {
  private jokeTypeEnum = JokeTypeEnum;
  private apiUrl = environment.apiUrl;
  private loading = new BehaviorSubject(true);
  public currentLoadingState = this.loading.asObservable();

  constructor(private http: HttpClient) {}

  changeLoading(state: boolean): void {
    this.loading.next(state);
  }

  fetchCategories(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>(this.apiUrl + 'categories');
  }

  fetchJoke(formValue: JokeSearchFormValue): Observable<Joke> {
    const jokeTypeEnum = this.jokeTypeEnum;
    const urls = {
      [jokeTypeEnum.Random]: `${formValue.apiValue.random}`,
      [jokeTypeEnum.Category]: `random?${formValue.formOptions}=${formValue.apiValue.categories}`,
      [jokeTypeEnum.Search]: `${formValue.formOptions}?query=${formValue.apiValue.search}`,
      [jokeTypeEnum.Latest]: `${formValue.apiValue.latest}`,
      [jokeTypeEnum.Top]: `favorite/${formValue.apiValue.top}`
    };
    return this.http.get<Joke>(this.apiUrl + urls[formValue.formOptions]);
  }

  getRandomJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.apiUrl + 'random');
  }

  getDataFromDb(): Observable<Joke[]> {
    return this.http.get<Joke[]>(this.apiUrl + 'user-favorite');
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
