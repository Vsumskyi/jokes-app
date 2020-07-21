import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/interfaces/interfaces';
import { JokeService } from 'src/app/services/joke.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-joke-page',
  templateUrl: './create-joke-page.component.html',
  styleUrls: ['./create-joke-page.component.scss']
})
export class CreateJokePageComponent implements OnInit {
  public errorMessage = '';
  constructor(public jokeService: JokeService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  onNewJoke(joke: Joke): void {
    this.jokeService.updateNewJokes(joke);
    this.openSnackBar('Created!');
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }
}
