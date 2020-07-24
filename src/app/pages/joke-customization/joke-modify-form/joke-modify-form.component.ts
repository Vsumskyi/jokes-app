import { CategoryInterface } from 'src/app/interfaces/interfaces';
import { Joke } from 'src/app/interfaces/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-joke-modify-form',
  templateUrl: './joke-modify-form.component.html',
  styleUrls: ['./joke-modify-form.component.scss']
})
export class JokeModifyFormComponent implements OnInit {
  public form: FormGroup;

  @Output() modifyOnJoke = new EventEmitter<Joke>();
  @Input() categoryList: CategoryInterface;
  @Input() modifyJokeMode: boolean;
  @Input() joke = {} as Joke;
  @Input() loadingState: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setForm(this.joke);
  }

  setForm(jokeModel: Joke): void {
    this.form = this.fb.group({
      value: [jokeModel.value, [Validators.required, Validators.minLength(3)]],
      iconUrl: [jokeModel.iconUrl],
      categories: [jokeModel.categories || []],
      customCategories: ['']
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.modifyOnJoke.emit(this.form.value);
    }
    if (!this.modifyJokeMode) {
      this.form.reset(this.joke);
      this.form.get('categories').setValue([]);
    }
  }
}
