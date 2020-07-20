import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/interfaces/interfaces';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-create-joke-page',
  templateUrl: './create-joke-page.component.html',
  styleUrls: ['./create-joke-page.component.scss']
})
export class CreateJokePageComponent implements OnInit {
  public errorMessage = '';
  public joke: Joke;
  constructor(public jokeService: JokeService) {}

  ngOnInit(): void {}

  onNewJoke(joke: Joke): void {
    console.log(joke);
    this.jokeService.createJoke(joke);
    this.joke = joke;
  }

  onError(error: string): void {
    this.errorMessage = error;
  }
}
