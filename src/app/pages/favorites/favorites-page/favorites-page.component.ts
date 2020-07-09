import { Component, OnInit } from '@angular/core';
import { JokeService } from 'src/app/services/joke.service';
import { JokesDataService } from 'src/app/services/jokes-data.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
  providers: [JokesDataService]
})
export class FavoritesPageComponent implements OnInit {
  jokeCategories: string[];
  value = '';
  category = '';

  constructor(
    public jokeService: JokeService,
    public jokesDataService: JokesDataService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.jokesDataService
      .fetchCategory()
      .subscribe(data => (this.jokeCategories = [...data]));
  }
}
