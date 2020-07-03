import { Component, OnInit, Input } from '@angular/core'
import { Joke } from '../../interfaces/interfaces'
import { JokeService } from 'src/app/services/joke.service'

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss']
})
export class FavoriteCardComponent implements OnInit {
  constructor(public jokeService: JokeService) {}
  @Input('jokes') jokes: Joke
  @Input('favorite') favorite: boolean
  ngOnInit(): void {}
}
