import { JokeTypeEnum, JokeCategoryEnum } from 'src/app/enums/FormProperty';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { JokesDataService } from 'src/app/services/jokes-data.service';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss']
})
export class JokeFormComponent implements OnInit {
  public jokeTypeEnum = JokeTypeEnum;
  private jokeCategoryEnum = JokeCategoryEnum;
  public loading = false;
  public errorMessage = '';
  public form: FormGroup;
  public jokeCategories: string[];

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
      formOptions: [this.jokeTypeEnum[1]],
      apiValue: this.fb.group({
        random: [this.jokeTypeEnum[1]],
        categories: [this.jokeCategoryEnum[1]],
        search: ['', [Validators.required, Validators.minLength(3)]]
      })
    });
  }

  getCategories(): void {
    this.jokesDataService.fetchCategories().subscribe(categories => {
      this.jokeCategories = [...categories].slice(0, 4);
    });
  }

  submit(): void {
    this.errorMessage = '';
    this.jokesDataService.loading = true;
    this.jokesDataService
      .fetchJoke(this.form.value)
      .subscribe(
        data => {
          this.jokeService.addJoke([data]);
        },
        e => {
          this.errorMessage =
            e.status === 404 ? 'Jokes not found...' : e.statusText;
        }
      )
      .add(() => {
        this.jokesDataService.loading = false;
        this.form.get('apiValue.search').reset();
      });
  }
}
