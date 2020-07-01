import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss']
})
export class JokeFormComponent implements OnInit {
  category = ['animal', 'career', 'celebrity', 'dev']

  constructor() {}

  ngOnInit(): void {}
}
