import { Joke, CategoryInterface } from 'src/app/interfaces/interfaces';
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
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.setForm();
  }

  getCategories(): void {
    this.jokesDataService.fetchCategories().subscribe(data => {
      this.categoriesList = [...data];
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
      value: ['', [Validators.required, Validators.minLength(3)]],
      iconUrl: [''],
      categories: [[]]
    });
  }

  submit(): void {
    this.errorMessage.emit('');
    this.loading = true;

    if (this.joke) {
      this.updateJoke();
    } else {
      this.postJoke();
    }
  }

  postJoke(): void {
    const newJoke = { ...this.form.value };
    this.jokesDataService
      .postJoke(newJoke)
      .subscribe(
        joke => {
          this.modifyJoke.emit(joke);
          this.form.reset();
          this.form.get('categories').setValue([]);
        },
        () => this.errorMessage.emit('Something went wrong...')
      )
      .add(() => {
        this.loading = false;
      });
  }

  updateJoke(): void {
    const newJoke = { ...this.form.value };
    newJoke.id = this.joke.id;
    this.jokesDataService
      .editJoke(newJoke)
      .subscribe(
        joke => {
          this.modifyJoke.emit(joke);
          this.form.reset();
          this.form.get('categories').setValue([]);
        },
        () => this.errorMessage.emit('Something went wrong...')
      )
      .add(() => {
        this.loading = false;
      });
  }
}
