import { of } from 'rxjs';
import { JokesDataService } from './../services/jokes-data.service';
import { timer, pipe, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  take
} from 'rxjs/operators';

export class CategoryExist {
  static emailExist(jokesDataService: JokesDataService) {
    return (
      control: FormControl
    ):
      | Promise<{ [key: string]: boolean }>
      | Observable<{ [key: string]: boolean }> => {
      if (!control || String(control.value).length === 0) {
        return of(null);
      }
      return jokesDataService
        .categoriesExist(control.value)
        .pipe(map(i => (i === true ? { emailExist: true } : null)));
    };
  }
}
