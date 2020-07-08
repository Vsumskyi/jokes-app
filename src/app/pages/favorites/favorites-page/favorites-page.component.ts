import { Component, OnInit } from '@angular/core';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  searchTracker = '';

  constructor(public jokeService: JokeService) {}

  ngOnInit(): void {}
}
