import { ImageInterface } from './../interfaces/interfaces';
import { map } from 'rxjs/operators';
import { Directive, OnInit, ElementRef } from '@angular/core';
import { fromEvent, zip } from 'rxjs';
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
          (result, file: File) => {
            const extension = file.name.slice(file.name.lastIndexOf('.') + 1);
            result.push(this.jokesMediaService.getImageData(extension));
            return result;
          },
          []
        );
        zip(...imagesExtension).subscribe((data: ImageInterface[]) => {
          this.jokesMediaService.setImageData(data);
        });
      });
  }
}
