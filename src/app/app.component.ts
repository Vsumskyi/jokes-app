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
  public loading = false;
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
    this.loading = true;
    this.jokesDataService
      .getDataFromDb()
      .subscribe(data => {
        this.jokeService.updateJokes(data);
      })
      .add(() => (this.loading = false));
  }

  getJoke(): void {
    this.jokesDataService
      .getRandomJoke()
      .subscribe(data => this.jokeService.mapJokes([data]));
  }
}
