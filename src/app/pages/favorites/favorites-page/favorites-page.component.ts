import { Component, OnInit } from '@angular/core';
import { JokeService } from 'src/app/services/joke.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {
  public jokeCategories: string[];
  public form: FormGroup;

  constructor(public jokeService: JokeService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getCategories();
    this.setForm();
  }

  getControlValue(controlName: string): string {
    return this.form.get(controlName).value;
  }

  setForm(): void {
    this.form = this.fb.group({
      showSearch: [false],
      value: [null],
      category: [null]
    });
  }

  getCategories(): void {
    this.jokeCategories = this.jokeService.favoritesJokes.reduce(
      (acc, curr) => {
        acc.push(curr.categories.toString());
        return acc;
      },
      []
    );
  }

  reset(): void {
    this.form.reset();
  }
}
