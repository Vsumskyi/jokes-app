import { Joke } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private favoritesJokes: Joke[] = [];
  private jokes: Joke[] = [];
  private createdJokes: Joke[] = [];

  public get newJokes(): Joke[] {
    return this.createdJokes;
  }
  public get favorites(): Joke[] {
    return this.favoritesJokes;
  }
  public get apiJokes(): Joke[] {
    return this.jokes;
  }

  saveToFavorites(id: string | number): void {
    const joke = [
      ...this.jokes,
      ...this.createdJokes,
      ...this.favoritesJokes
    ].find(jokeItem => jokeItem.id === id);
    if (joke.favorite) {
      this.favoritesJokes = this.favoritesJokes.filter(i => i.id !== id);
      joke.favorite = false;
    } else {
      joke.favorite = true;
      this.favoritesJokes.unshift(joke);
    }
  }

  mapJokes(data: Joke[], curetCategory?: string): void {
    this.jokes = data.flat().map(joke => {
      joke.favorite = this.favoritesJokes.some(i => i.id === joke.id);
      if (joke.categories.includes(curetCategory)) {
        joke.categories = joke.categories.filter(i => i !== curetCategory);
        joke.categories.unshift(curetCategory);
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

  restoreToDefault(): void {
    this.jokes = this.jokes.map(joke => {
      joke.favorite = false;
      return joke;
    });
    this.favoritesJokes = [];
  }

  updateJokes(jokes: Joke[]): void {
    this.favoritesJokes = [...jokes].map(i => {
      i.favorite = true;
      return i;
    });
    this.jokes = this.jokes.map(joke => {
      joke.favorite = jokes.some(i => i.id === joke.id);
      return joke;
    });
  }

  createJoke(joke: Joke): void {
    joke.favorite = false;
    this.createdJokes.unshift(joke);
  }
}
