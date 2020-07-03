import { HttpClient, HttpParams } from '@angular/common/http'
import { Joke } from '../interfaces/interfaces'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class JokeService {
  jokes: Joke[] = [
    {
      url: 'Post 1',
      value: 'Sample text for post 1',
      id: 11,
      favorite: true,
      updated_at: '129',
      categories: []
    },
    {
      url: 'Post 1',
      value: 'Sample text for post 1',
      id: 12,
      favorite: true,
      updated_at: '129',
      categories: []
    },
    {
      url: 'Post 1',
      value: 'Sample text for post 1',
      id: 13,
      favorite: true,
      updated_at: '129',
      categories: []
    }
  ]
  loading = false

  constructor(private http: HttpClient) {}

  fetchJoke(category: string, apiValue: string): void {
    this.loading = true

    const params = new HttpParams()
    const baseUrl = 'https://api.chucknorris.io/jokes/'
    if (category === 'random') {
      params.set('random', '')
    }
    if (category === 'fromCategory') {
      params.set('category', apiValue)
    }
    if (category === 'search') {
      params.set('search', apiValue)
    }

    this.http
      .get<Joke>(baseUrl, { params })
      .subscribe(data => {
        if (category !== 'search') {
          this.jokes.unshift({
            ...data,
            favorite: false
          })
        } else {
          data.result.forEach(i => {
            this.jokes.unshift({
              ...i,
              favorite: false
            })
          })
        }
        this.loading = false
      })
  }

  favorites(): Joke[] {
    return this.jokes.filter(i => i.favorite)
  }

  notFavorites(): Joke[] {
    return this.jokes.filter(i => !i.favorite)
  }
}
