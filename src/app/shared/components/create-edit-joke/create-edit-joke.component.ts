import { Observable } from 'rxjs';
import { Joke, CategoryInterface } from 'src/app/interfaces/interfaces';
import { JokeService } from 'src/app/services/joke.service';
import { JokesDataService } from 'src/app/services/jokes-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-create-edit-joke',
  templateUrl: './create-edit-joke.component.html',
  styleUrls: ['./create-edit-joke.component.scss']
})
export class CreateEditJokeComponent implements OnInit {
  public form: FormGroup;
  public loading = false;

  @Output() errorMessage = new EventEmitter<string>();
  @Output() modifyJoke = new EventEmitter<Joke>();
  @Input() joke: Joke;

  categoriesList: CategoryInterface[] = [];
  constructor(
    private jokesDataService: JokesDataService,
    private fb: FormBuilder,
    private jokeService: JokeService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.setForm();
    this.form.valueChanges.subscribe(data => {
      this.modifyJoke.emit({
        ...data,
        categories: this.form
          .get('categories')
          .value.map((id: number) => this.getCategoriesValue(id))
      });
    });
  }

  getCategories(): void {
    this.jokesDataService.fetchCategories().subscribe(data => {
      this.categoriesList = [...data];
      if (this.joke) {
        this.form
          .get('categories')
          .setValue(
            this.joke.categories.map(title => this.getCategoriesId(title))
          );
      }
    });
  }

  getCategoriesValue(id: number): string {
    return this.categoriesList.find(i => i.id === id)?.title;
  }

  getCategoriesId(value: string): number {
    return this.categoriesList.find(i => i.title === value)?.id;
  }

  setForm(): void {
    this.form = this.fb.group({
      value: [
        this.joke ? this.joke.value : '',
        [Validators.required, Validators.minLength(3)]
      ],
      iconUrl: [''],
      categories: [[]]
    });
  }

  submit(): void {
    this.errorMessage.emit('');
    this.loading = true;

    const newJoke = { ...this.form.value };

    if (this.joke) {
      newJoke.id = this.joke.id;
      this.jokesDataService
        .editJoke(newJoke)
        .subscribe(
          joke => {
            this.jokeService.updateOldJoke(joke);
          },
          () => this.errorMessage.emit('Something went wrong...')
        )
        .add(() => {
          this.loading = false;
        });
    } else {
      this.jokesDataService
        .postJoke(newJoke)
        .subscribe(
          joke => {
            this.jokeService.createJoke(joke);
          },
          () => this.errorMessage.emit('Something went wrong...')
        )
        .add(() => {
          this.loading = false;
        });
    }
  }

  createNewJoke(joke: Joke): void {
    this.jokeService.createJoke(joke);
  }
}
