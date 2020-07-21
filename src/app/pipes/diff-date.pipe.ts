import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diffDate'
})
export class DiffDatePipe implements PipeTransform {
  transform(date: Date): string {
    const currentTime = new Date().getTime();
    const apiDate = new Date(date).getTime();
    const milliseconds = 1000;
    const seconds = 60;
    const minutes = 60;
    const timeOffset = new Date().getTimezoneOffset() / minutes;
    const result = Math.abs(
      (currentTime - apiDate) / (milliseconds * seconds * minutes)
    );

    return (result < 1 ? result : result - Math.abs(timeOffset)).toFixed(0);
  }
}
