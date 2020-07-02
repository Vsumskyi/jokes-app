import { JokeService } from './../../../services/joke.service'
import { FormGroup, FormControl } from '@angular/forms'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss']
})
export class JokeFormComponent implements OnInit {
  form: FormGroup
  category = ['animal', 'career', 'celebrity', 'dev']

  constructor(public jokeService: JokeService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      category: new FormControl('random'),
      apiValue: new FormControl(null)
    })
  }

  submit() {
    this.jokeService.fetchJoke(
      this.form.value.category,
      this.form.value.apiValue
    )
  }
}
