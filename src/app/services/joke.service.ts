import { Joke } from '../interfaces/interfaces'
import { Injectable } from '@angular/core'


@Injectable({ providedIn: 'root' })
export class JokeService {
  jokes: Joke[] = [
    { url: 'Post 1', value: 'Sample text for post 1', id: 11, favorite: true },
    { url: 'Post 1', value: 'Sample text for post 1', id: 11, favorite: true },
    { url: 'Post 1', value: 'Sample text for post 1', id: 11, favorite: true },
    { url: 'Post 1', value: 'Sample text for post 1', id: 11, favorite: false }
  ]

  favorites(): Joke[] {
    return this.jokes.filter(i => i.favorite)
  }

  notFavorites(): Joke[] {
    return this.jokes.filter(i => !i.favorite)
  }
}
