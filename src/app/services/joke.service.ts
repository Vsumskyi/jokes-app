import { Joke } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  public favoritesJokes: Joke[] = [];
  public jokes: Joke[] = [];

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
    this.jokes = jokes
      .reduce((acc, curr) => acc.concat(curr), [])
      .map(joke => {
        if (!this.containsJoke(joke.id, this.jokes)) {
          joke.favorite = this.containsJoke(joke.id, this.favoritesJokes);
        }
        return joke;
      });
  }

  containsJoke(id: string | number, jokes: Joke[]): boolean {
    return jokes.some(i => i.id === id);
  }
}
