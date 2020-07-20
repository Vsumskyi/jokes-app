import { JokesDataService } from 'src/app//services/jokes-data.service';
import { JokeService } from 'src/app//services/joke.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Joke } from 'src/app/interfaces/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  public joke: Joke;
  public loading = true;
  constructor(
    private route: ActivatedRoute,
    private jokeService: JokeService,
    public jokesDataService: JokesDataService
  ) {}

  ngOnInit(): void {
    this.loading = false;
    this.route.params.subscribe((params: Params) => {
      this.joke = this.jokeService.getById(+params.id);
    });
  }

  newJoke(joke: Joke): void {
    this.joke = {
      ...this.joke,
      categories: joke.categories,
      value: joke.value,
      iconUrl: joke.iconUrl
    };
  }
}
