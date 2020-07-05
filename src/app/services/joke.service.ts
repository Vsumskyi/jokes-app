import { Joke } from './../interfaces/interfaces'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  favoritesJokes: Joke[] = [
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
  }

  addJoke(jokes: Joke[]) {
    jokes.forEach(item => {
      !this.containsJoke(item.id, this.jokes)
        ? this.jokes.unshift({
            ...item,
            favorite: this.containsJoke(item.id, this.favoritesJokes)
          })
        : this.bubbleUpJoke(item)
    })
  }

  bubbleUpJoke(item: Joke) {
    this.jokes = this.jokes.filter(i => i.id !== item.id)
    item.favorite = this.containsJoke(item.id, this.favoritesJokes)
    this.jokes.unshift(item)
  }

  containsJoke(id: string | number, jokes: Joke[]) {
    return jokes.some(i => i.id === id)
  }
}
