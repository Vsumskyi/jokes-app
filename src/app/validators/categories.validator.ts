import { JokesDataService } from 'src/app/services/jokes-data.service';
import {
  ValidationErrors,
  AsyncValidator,
  AbstractControl,
  NG_ASYNC_VALIDATORS
} from '@angular/forms';
import { of, timer } from 'rxjs';
import { Observable } from 'rxjs';
import { map, switchMap, filter } from 'rxjs/operators';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appCategoryExistValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: CategoryExistValidator,
      multi: true
    }
  ]
})
export class CategoryExistValidator implements AsyncValidator {
  constructor(private jokesDataService: JokesDataService) {}
  validate(
    control: AbstractControl
  ): Promise<ValidationErrors> | Observable<ValidationErrors | null> {
    if (!control || String(control.value).length === 0) {
      return of(null);
    }
    return timer(1000).pipe(
      filter(() => control.value != null),
      switchMap(() => {
        return this.jokesDataService.categoriesExist(control.value);
      }),
      map(resp => (resp ? { duplicate: true } : null))
    );
  }
}
