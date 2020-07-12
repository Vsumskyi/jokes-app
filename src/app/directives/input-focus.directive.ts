import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFocus]'
})
export class InputFocusDirective implements OnInit {
  constructor(public element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.focus();
  }
}
