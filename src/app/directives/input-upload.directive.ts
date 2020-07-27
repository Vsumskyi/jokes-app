import { map } from 'rxjs/operators';
import { Directive, OnInit, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { JokesMediaService } from 'src/app/services/jokes-media.service';

@Directive({
  selector: '[appInputUpload]'
})
export class InputUploadDirective implements OnInit {
  constructor(
    public element: ElementRef,
    private jokesMediaService: JokesMediaService
  ) {}

  ngOnInit(): void {
    fromEvent(this.element.nativeElement, 'change')
      .pipe(map((i: InputEvent) => (i.target as HTMLInputElement).files))
      .subscribe(icons => {
        const imagesExtension = Object.values(icons).reduce((acc, curr) => {
          return curr.name.slice(curr.name.lastIndexOf('.') + 1);
        }, '');
        this.jokesMediaService.getImageData(imagesExtension).subscribe(data => {
          this.jokesMediaService.setImageData(data);
        });
      });
  }
}
