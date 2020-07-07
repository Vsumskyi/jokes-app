import { FormProperty } from 'src/app/enums/FormProperty';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AsyncService } from 'src/app/services/async.service';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss']
})
export class JokeFormComponent implements OnInit {
  eFormProperty = FormProperty;
  loading = false;
  errorMessage = '';
  form: FormGroup;
  category = ['animal', 'career', 'celebrity', 'dev'];

  constructor(
    public jokeService: JokeService,
    public asyncService: AsyncService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      formOptions: [this.eFormProperty.Random],
      apiValue: this.fb.group({
        random: ['random'],
        categories: ['animal'],
        search: ['', [Validators.required, Validators.minLength(3)]]
      })
    });
  }

  submit(): void {
    this.errorMessage = '';
    this.loading = true;
    this.asyncService.fetchJoke(this.form.value).subscribe(
      data => {
        this.jokeService.addJoke(data.result || [data]);
        this.loading = false;
      },
      e => {
        this.errorMessage = e.error.message;
        this.loading = false;
      }
    );
  }
}
