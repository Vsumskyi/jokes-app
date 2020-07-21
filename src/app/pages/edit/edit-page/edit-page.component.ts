import { JokesDataService } from 'src/app//services/jokes-data.service';
import { JokeService } from 'src/app//services/joke.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Joke } from 'src/app/interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
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

  newJoke(joke: Joke): void {
    this.jokeService.currentEditedJoke(joke);
    this.openSnackBar('Updated!');
  }

  getCurrentJoke(): void {
    this.loading = true;
    this.route.params.subscribe((params: Params) => {
      this.jokesDataService
        .getByIdFromApi(params.id)
        .subscribe(joke => {
          if (joke) {
            this.jokeService.currentEditedJoke(joke);
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
