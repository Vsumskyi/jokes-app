import { Component, OnInit, Input } from '@angular/core'
import { Joke } from '../../interfaces/interfaces'

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss']
})
export class FavoriteCardComponent implements OnInit {
  constructor() {}
  @Input('jokes') jokes: Joke
  ngOnInit(): void {}
}
