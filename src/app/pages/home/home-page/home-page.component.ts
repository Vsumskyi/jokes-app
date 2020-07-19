import { Component, OnInit } from '@angular/core';
import { JokeService } from 'src/app/services/joke.service';
import { AuthService } from 'src/app/services/auth.service';
import { JokesDataService } from 'src/app/services/jokes-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public openDrawer = false;
  public loading = true;
  public errorMessage = '';
  public userName = '';

  constructor(
    public jokeService: JokeService,
    public authService: AuthService,
    private jokesDataService: JokesDataService
  ) {}

  ngOnInit(): void {
    this.setUserName();
    this.jokesDataService.currentLoadingState.subscribe(state => {
      this.loading = state;
    });
  }

  setUserName(): void {
    if (!this.authService.authenticated) {
      return;
    }
    const { firstName, lastName } = this.authService.user;
    this.userName = `${firstName} ${lastName}`;
  }

  toggleDrawer(): void {
    this.openDrawer = !this.openDrawer;
  }

  onError(error: string): void {
    this.errorMessage = error;
  }

  logOut(e: Event): void {
    e.preventDefault();
    this.authService.logout();
    this.jokeService.restoreToDefault();
  }
}
