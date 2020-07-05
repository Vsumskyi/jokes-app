import { HttpClient, HttpParams } from '@angular/common/http'
import { Joke } from '../interfaces/interfaces'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class AsyncService {
  LOCAL_STORAGE_KEY = 'jokes'

  constructor(private http: HttpClient) {}

  fetchJoke(searchParam: string, apiValue: string): Observable<Joke> {
    let baseUrl = 'https://api.chucknorris.io/jokes/'

    if (searchParam === 'random') {
      baseUrl += searchParam
    }
    if (searchParam === 'category') {
      baseUrl += `random?${searchParam}=${apiValue}`
    }
    if (searchParam === 'search') {
      baseUrl += `${searchParam}?query=${apiValue}`
    }

    return this.http.get<Joke>(baseUrl)
  }

  saveToLocalStorage(favoritesJokes: Joke[]) {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(favoritesJokes))
  }
  getDataFromLocalStorage(): Joke[] {
    const jokes = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY))
    return jokes.length && jokes
  }
}
