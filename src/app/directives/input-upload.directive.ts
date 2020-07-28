import { ImageInterface } from './../interfaces/interfaces';
import { map } from 'rxjs/operators';
import { Directive, OnInit, ElementRef } from '@angular/core';
import { fromEvent, zip, Observable } from 'rxjs';
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
        const imagesExtension = Object.values(icons).reduce(
          (acc, curr: File) => {
            const extension = curr.name.slice(curr.name.lastIndexOf('.') + 1);
            acc.push(this.jokesMediaService.getImageData(extension));
            return acc;
          },
          []
        );
        zip(...imagesExtension).subscribe(
          (data: ImageInterface[]) => {
            this.jokesMediaService.setImageData(data);
          },
          e => {}
        );
      });
  }
}
