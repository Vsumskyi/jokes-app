import { Pipe, PipeTransform } from '@angular/core';
import { Joke } from '../interfaces/interfaces';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(jokes: Joke[], tracker: string, category: string): Joke[] {
    if (!category.trim() && !tracker.trim()) {
      return jokes;
    }
    return jokes
      .filter(joke => joke.categories.join('').indexOf(category) === 0)
      .filter(joke => joke.value.toLowerCase().includes(tracker.toLowerCase()));
  }
}
