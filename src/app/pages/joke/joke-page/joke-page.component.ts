import { Location } from '@angular/common';
import { JokeService } from 'src/app/services/joke.service';
import { Joke } from 'src/app/interfaces/interfaces';
import { JokesDataService } from 'src/app/services/jokes-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.scss']
})
export class JokePageComponent implements OnInit {
  public loading = true;
  public joke = {} as Joke;

  constructor(
    private route: ActivatedRoute,
    private jokesDataService: JokesDataService,
    private jokesService: JokeService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCurrentJoke();
  }

  prevJoke(): void {
    this.location.back();
  }

  nextJoke(): void {
    this.jokesDataService.getRandomJoke().subscribe(joke => {
      this.router.navigate(['/joke', joke.id]);
      this.joke = joke;
    });
  }

  getCurrentJoke(): void {
    this.loading = true;
    this.route.params.subscribe((params: Params) => {
      this.jokesDataService.getJokeByIdFromApi(params.id).subscribe(apiJoke => {
        this.joke = apiJoke;
        this.joke.favorite = this.jokesService.containsJoke(apiJoke);
        this.loading = false;
      });
    });
  }
}
