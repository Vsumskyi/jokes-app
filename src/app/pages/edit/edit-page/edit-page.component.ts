import { JokesDataService } from 'src/app//services/jokes-data.service';
import { JokeService } from 'src/app//services/joke.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Joke } from 'src/app/interfaces/interfaces';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {
  public loading = true;
  constructor(
    private route: ActivatedRoute,
    public jokeService: JokeService,
    private snackBar: MatSnackBar,
    public jokesDataService: JokesDataService
  ) {}

  ngOnInit(): void {
    this.getCurrentJoke();
  }

  ngOnDestroy(): void {
    this.jokeService.setBufferJoke();
  }

  onEditJoke(joke: Joke): void {
    this.jokeService.setBufferJoke(joke);
    this.jokeService.refreshJokes(joke);
    this.openSnackBar('Updated!');
  }

  getCurrentJoke(): void {
    this.loading = true;
    this.route.params.subscribe((params: Params) => {
      this.jokesDataService
        .getByIdFromApi(params.id)
        .subscribe(joke => {
          if (joke) {
            this.jokeService.setBufferJoke(joke);
          }
        })
        .add(() => (this.loading = false));
    });
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }
}
