import { JokeTypeEnum, JokeCategoryEnum } from 'src/app/enums/FormProperty';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JokesDataService } from 'src/app/services/jokes-data.service';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss'],
  providers: [JokesDataService]
})
export class JokeFormComponent implements OnInit {
  @Output() loadingChanged = new EventEmitter<boolean>();
  @Output() errorMessage = new EventEmitter<string>();

  public jokeTypeEnum = JokeTypeEnum;
  private jokeCategoryEnum = JokeCategoryEnum;
  public loading = false;
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
      this.jokeCategories = [...categories];
    });
  }

  submit(): void {
    this.errorMessage.emit('');
    this.loadingChanged.emit(true);
    this.loading = true;
    this.jokesDataService
      .fetchJoke(this.form.value)
      .subscribe(
        data => {
          this.jokeService.mapJokes(
            [data],
            this.form.get('apiValue.categories').value
          );
        },
        e => {
          this.errorMessage.emit(
            e.status === 404 ? 'Jokes not found...' : e.statusText
          );
        }
      )
      .add(() => {
        this.loadingChanged.emit(false);
        this.loading = false;
        this.form.get('apiValue.search').reset();
      });
  }
}
