import { Component, OnInit } from '@angular/core';
import { JokeService } from 'src/app/services/joke.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JokesDataService } from 'src/app/services/jokes-data.service';
import { AuthService } from 'src/app/services/auth.service';

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
    private jokesDataService: JokesDataService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.updateJokes();
    this.jokeCategories = this.jokeService.getActualCategories();
    this.setForm();
    this.jokesDataService.currentLoadingState.subscribe(state => {
      this.loading = state;
    });
  }

  updateJokes(): void {
    if (this.authService.authenticated) {
      this.jokesDataService.changeLoading(true);
      this.jokesDataService
        .getDataFromDb()
        .subscribe(data => {
          this.jokeService.updateJokes(data);
        })
        .add(() => this.jokesDataService.changeLoading(false));
    }
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
