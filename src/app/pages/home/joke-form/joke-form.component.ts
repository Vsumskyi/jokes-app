import { FormProperty, JokesCategories } from 'src/app/enums/FormProperty';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { JokesDataService } from 'src/app/services/jokes-data.service';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss'],
  providers: [JokesDataService]
})
export class JokeFormComponent implements OnInit {
  formProperty = FormProperty;
  loading = false;
  errorMessage = '';
  form: FormGroup;
  jokeCategories: string[];

  constructor(
    public jokeService: JokeService,
    public jokesDataService: JokesDataService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.setForm();
  }

  setForm(): void {
    this.form = this.fb.group({
      formOptions: [FormProperty[1]],
      apiValue: this.fb.group({
        random: [FormProperty[1]],
        categories: [JokesCategories[1]],
        search: ['', [Validators.required, Validators.minLength(3)]]
      })
    });
  }

  getCategories(): void {
    this.jokesDataService.fetchCategory().subscribe(categories => {
      this.jokeCategories = [...categories].slice(0, 4);
    });
  }

  submit(): void {
    this.errorMessage = '';
    this.loading = true;
    this.jokesDataService
      .fetchJoke(this.form.value)
      .subscribe(
        data => {
          this.jokeService.addJoke([data]);
        },
        e => {
          this.errorMessage = e.statusText;
        }
      )
      .add(() => {
        this.loading = false;
        this.form.get('apiValue.search').reset();
      });
  }
}
