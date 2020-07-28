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
  public imageNames = [];
  public image: File[];

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
      categories: [jokeModel.categories || []],
      customCategories: ['']
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.modifyOnJoke.emit({ ...this.form.value, image: this.image });
    }
    if (!this.modifyJokeMode) {
      this.form.reset(this.joke);
      this.imageNames = [];
      this.form.get('categories').setValue([]);
    }
  }

  loadImg(image: File[]): void {
    this.image = image;
    this.imageNames = this.sliceFileName(image);
  }

  sliceFileName(image: File[]): string[] {
    return Object.values(image).reduce((acc, curr) => {
      const extension = curr.name.slice(curr.name.lastIndexOf('.') + 1);
      if (curr.name.length > 10) {
        acc.push(`${curr.name.slice(0, 7)}...${extension}`);
      } else {
        acc.push(curr.name);
      }
      return acc;
    }, []);
  }
}
