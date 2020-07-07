import { JokeService } from 'src/app/services/joke.service';
import { AsyncService } from 'src/app/services/async.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(
    public jokeService: JokeService,
    private asyncService: AsyncService
  ) {}

  ngOnInit(): void {
    this.jokeService.favoritesJokes =
      this.asyncService.getDataFromLocalStorage() ||
      this.jokeService.favoritesJokes;
  }
}
