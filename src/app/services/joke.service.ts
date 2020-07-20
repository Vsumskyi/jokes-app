import { Joke } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private favoritesJokes: Joke[] = [];
  private jokes: Joke[] = [];

  public get favorites(): Joke[] {
    return this.favoritesJokes;
  }
  public get apiJokes(): Joke[] {
    return this.jokes;
  }

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
    this.jokes.unshift(joke);
  }

  getById(id: number): Joke {
    return [...this.favoritesJokes, ...this.jokes].find(i => i.id === id);
  }

  updateOldJoke(joke: Joke): void {
    joke.favorite = this.favoritesJokes.some(i => i.id === joke.id);
    console.log(joke);
    this.favoritesJokes = this.favoritesJokes.map(i =>
      i.id === joke.id ? (i = joke) : i
    );

    this.jokes = this.jokes.map(i => (i.id === joke.id ? (i = joke) : i));
  }

  removeJoke(id: string | number): void {
    this.jokes = this.jokes.filter(i => i.id !== id);
    this.favoritesJokes = this.favoritesJokes.filter(i => i.id !== id);
  }
}
