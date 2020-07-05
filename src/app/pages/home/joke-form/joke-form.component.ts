import { FormGroup, FormControl } from '@angular/forms'
import { Component, OnInit } from '@angular/core'
import { AsyncService } from 'src/app/services/async.service'
import { JokeService } from 'src/app/services/joke.service'

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss']
})
export class JokeFormComponent implements OnInit {
  loading = false
  errorMessage = ''
  form: FormGroup
  category = ['animal', 'career', 'celebrity', 'dev']

  constructor(
    public jokeService: JokeService,
    public asyncService: AsyncService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      category: new FormControl('random'),
      apiValue: new FormControl(null)
    })
  }

  submit() {
    this.errorMessage = ''
    this.loading = true
    this.asyncService
      .fetchJoke(this.form.value.category, this.form.value.apiValue)
      .subscribe(
        data => {
          this.jokeService.addJoke(data.result || [data])
          this.loading = false
        },
        e => {
          this.errorMessage = e.error.message
          this.loading = false
        }
      )
  }
}
