import { CategoryInterface } from 'src/app/interfaces/interfaces';
import { Joke } from 'src/app/interfaces/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-edit-joke-form',
  templateUrl: './create-edit-joke-form.component.html',
  styleUrls: ['./create-edit-joke-form.component.scss']
})
export class CreateEditJokeFormComponent implements OnInit {
  public form: FormGroup;

  @Output() modifyJoke = new EventEmitter<Joke>();
  @Input() categoryList: CategoryInterface;
  @Input() modify: boolean;
  @Input() joke: Joke;
  @Input() loadingState: boolean;

  constructor(private fb: FormBuilder) {}

  setJoke(joke: Joke): void {
    if (joke && joke.id) {
      this.form.patchValue(joke);
    }
  }

  ngOnInit(): void {
    this.setForm();
    this.setJoke(this.joke);
  }

  setForm(): void {
    this.form = this.fb.group({
      value: ['', [Validators.required, Validators.minLength(3)]],
      iconUrl: [''],
      categories: [[]],
      customCategories: ['']
    });
  }

  submit(): void {
    this.modifyJoke.emit({ ...this.form.value });
    if (!this.modify) {
      this.ngOnInit();
    }
  }
}
