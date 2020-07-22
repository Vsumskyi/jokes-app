import { Joke } from 'src/app/interfaces/interfaces';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private favoritesJokes: Joke[] = [];
  private jokes: Joke[] = [];
  private bufferJoke = new BehaviorSubject(null);
  public currentBufferJoke = this.bufferJoke.asObservable();

  public get favorites(): Joke[] {
    return this.favoritesJokes;
  }
  public get apiJokes(): Joke[] {
    return this.jokes;
  }

  saveToFavorites(joke: Joke): void {
    if (joke.favorite) {
      this.favoritesJokes = this.favoritesJokes.filter(i => i.id !== joke.id);
      joke.favorite = false;
    } else {
      joke.favorite = true;
      this.favoritesJokes.unshift(joke);
    }
    this.refreshJokes(joke);
  }

  mapJokes(data: Joke[], curetCategory?: string): void {
    this.jokes = data.flat().map(joke => {
      joke.favorite = this.containsJoke(joke);
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
      joke.favorite = this.containsJoke(joke);
      return joke;
    });
  }

  setBufferJoke(joke: Joke): void {
    joke.favorite = this.containsJoke(joke);
    this.bufferJoke.next(joke);
  }
  removeBufferJoke(): void {
    this.bufferJoke.next(null);
  }

  removeJoke(id: string | number): void {
    this.jokes = this.clear(this.jokes, id);
    this.favoritesJokes = this.clear(this.favoritesJokes, id);
    this.bufferJoke.next(null);
  }

  refreshJokes(joke: Joke): void {
    const jokesChanger = (jokes: Joke[]) =>
      jokes.map(jokeItem => {
        if (jokeItem.id === joke.id) {
          jokeItem = joke;
        }
        return jokeItem;
      });
    this.favoritesJokes = jokesChanger(this.favoritesJokes);
    this.jokes = jokesChanger(this.jokes);
  }

  clear(joke: Joke[], id: string | number): Joke[] {
    return joke.filter(i => i.id !== id);
  }
  containsJoke(joke: Joke): boolean {
    return this.favorites.some(i => i.id === joke.id);
  }
}
