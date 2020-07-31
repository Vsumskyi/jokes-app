import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public returnUrl: string;

  @Input() title = 'Chuck Norris Jokes';
  @Input() disable = false;
  constructor(private location: Location) {}

  back(): void {
    this.location.back();
  }

  ngOnInit(): void {}
}
