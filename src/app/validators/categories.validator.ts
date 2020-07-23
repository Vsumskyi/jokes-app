import { ValidationErrors } from '@angular/forms';
import { of } from 'rxjs';
import { JokesDataService } from './../services/jokes-data.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';

export class CategoryExist {
  static categoryExistValidator(
    jokesDataService: JokesDataService
  ): ValidationErrors {
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
