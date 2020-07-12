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

  mapJokes(data: Joke[], curetCategory: string): void {
    this.jokes = data.flat().map(joke => {
      joke.favorite = this.favoritesJokes.some(i => i.id === joke.id);
      if (joke.categories.includes(curetCategory)) {
        joke.categories = [curetCategory];
      } else {
        joke.categories = [joke.categories[0]];
      }
      return joke;
    });
  }

  getActualCategories(): string[] {
    const categories = this.favoritesJokes.reduce((acc, curr) => {
      curr.categories.forEach(category => acc.push(category));
      return acc.filter(i => i);
    }, []);
    return Array.from(new Set(categories));
  }
}
