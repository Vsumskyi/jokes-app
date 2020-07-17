import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empty-container',
  templateUrl: './empty-container.component.html',
  styleUrls: ['./empty-container.component.scss']
})
export class EmptyContainerComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
