import { JokeService } from 'src/app/services/joke.service'
import { AsyncService } from 'src/app/services/async.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {
  constructor(
    public jokeService: JokeService,
    private asyncService: AsyncService
  ) {}

  ngOnInit(): void {
    this.jokeService.favoritesJokes =
      this.asyncService.getDataFromLocalStorage() ||
      this.jokeService.favoritesJokes
  }
}
