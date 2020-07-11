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
    this.jokes = jokes.map(joke => {
      if (!this.containsJoke(joke.id, this.jokes)) {
        joke.favorite = this.containsJoke(joke.id, this.favoritesJokes);
      }
      return joke;
    });
  }

  containsJoke(id: string | number, jokes: Joke[]): boolean {
    return jokes.some(i => i.id === id);
  }

  mapJokes(data: Joke[], curetCategory: string): Joke[] {
    return data.flat().map(joke => {
      if (joke.categories.includes(curetCategory)) {
        joke.categories = joke.categories.filter(
          (category: string) => category !== curetCategory
        );
        joke.categories.unshift(curetCategory);
      }
      return joke;
    });
  }

  getActualCategories(): string[] {
    const categories = this.favoritesJokes.reduce((acc, curr) => {
      if (curr.categories.length > 1) {
        curr.categories.forEach(category => {
          acc.push(category);
        });
      } else {
        acc.push(curr.categories.toString());
      }
      return acc;
    }, []);
    return Array.from(new Set(categories)).filter(i => i);
  }
}
