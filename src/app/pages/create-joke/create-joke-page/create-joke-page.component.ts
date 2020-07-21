import { Component, OnInit, OnDestroy } from '@angular/core';
import { Joke } from 'src/app/interfaces/interfaces';
import { JokeService } from 'src/app/services/joke.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-joke-page',
  templateUrl: './create-joke-page.component.html',
  styleUrls: ['./create-joke-page.component.scss']
})
export class CreateJokePageComponent implements OnInit, OnDestroy {
  public errorMessage = '';
  constructor(public jokeService: JokeService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.jokeService.setBufferJoke();
  }

  onNewJoke(joke: Joke): void {
    this.jokeService.setBufferJoke(joke);
    this.openSnackBar('Created!');
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }
}
