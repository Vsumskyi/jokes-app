import { Component, OnInit } from '@angular/core';
import { JokeService } from './services/joke.service';
import { JokesDataService } from './services/jokes-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [JokesDataService]
})
export class AppComponent implements OnInit {
  constructor(
    public jokeService: JokeService,
    public jokesDataService: JokesDataService
  ) {}
  ngOnInit(): void {
    this.jokeService.favoritesJokes = this.jokesDataService.getDataFromLocalStorage();
  }
}
