import { JokesDataService } from 'src/app/services/jokes-data.service';
import { map } from 'rxjs/operators';
import { Directive, OnInit, ElementRef } from '@angular/core';
import { fromEvent, zip } from 'rxjs';
import { AbstractControl, NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputUpload]'
})
export class InputUploadDirective implements OnInit {
  constructor(
    public element: ElementRef,
    private control: NgControl,
    private jokesDataService: JokesDataService
  ) {}

  ngOnInit(): void {
    fromEvent(this.element.nativeElement, 'change')
      .pipe(map((i: InputEvent) => (i.target as HTMLInputElement).files))
      .subscribe(icons => {
        const imagesExtension = Object.values(icons).reduce((acc, curr) => {
          return curr.name.slice(curr.name.lastIndexOf('.') + 1);
        }, '');
        this.jokesDataService.getImageLink(imagesExtension).subscribe(data => {
          this.jokesDataService.setImageLink(data.imageUploadUrl);
        });
      });
  }
}
