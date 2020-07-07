import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diffDate'
})
export class DiffDatePipe implements PipeTransform {
  transform(apiDate: Date): string {
    return (
      (new Date().getTime() - new Date(apiDate).getTime()) /
      (1000 * 60 * 60)
    ).toFixed(0);
  }
}
