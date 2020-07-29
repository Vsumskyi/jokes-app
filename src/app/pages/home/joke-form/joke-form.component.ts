import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JokeTypeEnum, JokeCategoryEnum } from 'src/app/enums/enums';
import { JokesDataService } from 'src/app/services/jokes-data.service';
import { JokeService } from 'src/app/services/joke.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss'],
  providers: [JokesDataService]
})
export class JokeFormComponent implements OnInit {
  @Output() errorMessage = new EventEmitter<string>();

  public jokeTypeEnum = JokeTypeEnum;
  private jokeCategoryEnum = JokeCategoryEnum;
  public loading = false;
  public form: FormGroup;
  public jokeCategories: string[];

  constructor(
    public jokeService: JokeService,
    public jokesDataService: JokesDataService,
    public authService: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.setForm();
  }

  setForm(): void {
    this.form = this.fb.group({
      formOptions: [this.jokeTypeEnum.Random],
      apiValue: this.fb.group({
        random: [this.jokeTypeEnum.Random],
        categories: [this.jokeCategoryEnum.Animal],
        latest: [this.jokeTypeEnum.Latest],
        top: [this.jokeTypeEnum.Top],
        search: ['', [Validators.required, Validators.minLength(3)]]
      })
    });
  }

  getCategories(): void {
    this.jokesDataService.fetchCategories().subscribe(categories => {
      this.jokeCategories = categories.map(i => i.title);
      this.form.get('apiValue.categories').setValue(this.jokeCategories[0]);
    });
  }

  submit(): void {
    this.loading = true;
    this.jokesDataService
      .fetchJoke(this.form.value)
      .subscribe(
        data => {
          if (data) {
            this.errorMessage.emit('');
            this.jokeService.mapJokes(
              [data],
              this.form.get('apiValue.categories').value
            );
          } else {
            this.errorMessage.emit('No jokes in this category..');
          }
          this.form.get('apiValue.search').reset();
        },
        e => {
          this.errorMessage.emit(
            e.status === 404 ? 'Jokes not found...' : e.statusText
          );
        }
      )
      .add(() => {
        this.loading = false;
      });
  }
}
