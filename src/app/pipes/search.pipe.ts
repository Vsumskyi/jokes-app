import { Pipe, PipeTransform } from '@angular/core';
import { Joke } from '../interfaces/interfaces';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(jokes: Joke[], tracker: string): Joke[] {
    if (!tracker.trim()) {
      return jokes;
    }
    return jokes.filter(i =>
      i.value.toLowerCase().includes(tracker.toLowerCase())
    );
  }
}
