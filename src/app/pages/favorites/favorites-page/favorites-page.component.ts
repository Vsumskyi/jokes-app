import { Component, OnInit } from '@angular/core';
import { JokeService } from 'src/app/services/joke.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JokesDataService } from 'src/app/services/jokes-data.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {
  public jokeCategories: string[];
  public form: FormGroup;
  public loading = true;

  constructor(
    public jokeService: JokeService,
    private fb: FormBuilder,
    private jokesDataService: JokesDataService
  ) {}

  ngOnInit(): void {
    this.jokeCategories = this.jokeService.getActualCategories();
    this.setForm();
    this.jokesDataService.currentLoadingState.subscribe(state => {
      this.loading = state;
    });
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

  reset(): void {
    this.form.reset();
  }
}
