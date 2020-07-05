import { Component, OnInit, Input } from '@angular/core'
import { Joke } from 'src/app/interfaces/interfaces'
import { JokeService } from 'src/app/services/joke.service'
import { AsyncService } from 'src/app/services/async.service'

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss']
})
export class FavoriteCardComponent implements OnInit {
  constructor(
    public jokeService: JokeService,
    public asyncService: AsyncService
  ) {}
  @Input('jokes') jokes: Joke
  @Input('favorite') favorite: boolean
  ngOnInit(): void {}

  like(id: string | number, event: Event) {
    event.preventDefault()
    this.jokeService.saveToFavorites(id)
    this.asyncService.saveToLocalStorage(this.jokeService.favoritesJokes)
  }
}
