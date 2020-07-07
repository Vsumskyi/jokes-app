import { Joke } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  favoritesJokes: Joke[] = [];

  jokes: Joke[] = [];

  saveToFavorites(id: string | number): void {
    const joke = [...this.jokes, ...this.favoritesJokes].find(
      jokeItem => jokeItem.id === id
    );

    if (joke.favorite) {
      this.favoritesJokes = this.favoritesJokes.filter(i => i.id !== id);
      joke.favorite = false;
    } else {
      joke.favorite = true;
      this.favoritesJokes.unshift(joke);
    }
  }

  addJoke(jokes: Joke[]): void {
    jokes
      .reduce((acc, curr) => acc.concat(curr), [])
      .forEach(item => {
        !this.containsJoke(item.id, this.jokes)
          ? this.jokes.unshift({
              ...item,
              favorite: this.containsJoke(item.id, this.favoritesJokes)
            })
          : this.bubbleUpJoke(item);
      });
  }

  bubbleUpJoke(item: Joke): void {
    this.jokes = this.jokes.filter(i => i.id !== item.id);
    item.favorite = this.containsJoke(item.id, this.favoritesJokes);
    this.jokes.unshift(item);
  }

  containsJoke(id: string | number, jokes: Joke[]): boolean {
    return jokes.some(i => i.id === id);
  }
}
