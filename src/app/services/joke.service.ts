import { HttpClient, HttpParams } from '@angular/common/http'
import { Joke } from '../interfaces/interfaces'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class JokeService {
  LOCAL_STORAGE_KEY = 'jokes'
  favoritesJokes: Joke[] = this.getDataFromLocalStorage(
    this.LOCAL_STORAGE_KEY
  ) || [
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
  jokes: Joke[] = []
  loading = false
  errorMessage = ''

  constructor(private http: HttpClient) {}

  fetchJoke(searchParam: string, apiValue: string): void {
    this.loading = true
    this.errorMessage = ''
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

    this.http.get<Joke>(baseUrl).subscribe(
      data => {
        const response = data.result || [data]
        response.forEach(item => {
          !this.containsJoke(item.id, this.jokes)
            ? this.jokes.unshift({
                ...item,
                favorite: this.containsJoke(item.id, this.favoritesJokes)
              })
            : this.bubbleUpJoke(item)
        })
        this.loading = false
      },
      e => {
        this.errorMessage = e.error.message
        this.loading = false
      }
    )
  }

  bubbleUpJoke(item: Joke) {
    this.jokes = this.jokes.filter(i => i.id !== item.id)
    item.favorite = this.containsJoke(item.id, this.favoritesJokes)
    this.jokes.unshift(item)
  }

  containsJoke(id: string | number, jokes: Joke[]) {
    return jokes.some(i => i.id === id)
  }

  saveToFavorites(id: string | number) {
    const jokes = [...this.jokes, ...this.favoritesJokes]
    const index = jokes.findIndex(i => i.id === id)

    if (jokes[index].favorite) {
      this.favoritesJokes = this.favoritesJokes.filter(i => i.id !== id)
      jokes[index].favorite = false
    } else {
      jokes[index].favorite = true
      this.favoritesJokes.unshift(jokes[index])
    }
    this.saveToLocalStorage(this.favoritesJokes, this.LOCAL_STORAGE_KEY)
  }

  saveToLocalStorage(favoritesJokes: Joke[], key: string) {
    localStorage.setItem(key, JSON.stringify(favoritesJokes))
  }
  getDataFromLocalStorage(key: string): Joke[] {
    const jokes = JSON.parse(localStorage.getItem(key))
    return jokes.length && jokes
  }
}
