import { Component, OnInit } from '@angular/core';
import { JokeService } from './services/joke.service';
import { JokesDataService } from './services/jokes-data.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [JokesDataService]
})
export class AppComponent implements OnInit {
  constructor(
    public jokeService: JokeService,
    public jokesDataService: JokesDataService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getJoke();
    this.authService.refreshUserData();
    this.autoLogin();
  }

  autoLogin(): void {
    if (!this.authService.authenticated) {
      return;
    }
    this.jokesDataService.changeLoading(true);

    this.jokesDataService
      .getDataFromDb()
      .subscribe(data => {
        this.jokeService.updateJokes(data);
      })
      .add(() => {
        this.jokesDataService.changeLoading(false);
      });
  }

  getJoke(): void {
    this.jokesDataService
      .getRandomJoke()
      .subscribe(data => data && this.jokeService.mapJokes([data]));
  }
}
