import { Component, OnInit } from '@angular/core';
import { JokeService } from 'src/app/services/joke.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public openDrawer = false;
  public loading = false;
  public errorMessage = '';
  public userName = '';

  constructor(
    public jokeService: JokeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.setUserName();
  }

  setUserName(): void {
    if (!this.authService.isAuthenticated) {
      return;
    }
    const { firstName, lastName } = this.authService.userData.user;
    this.userName = `${firstName} ${lastName}`;
  }

  toggleDrawer(): void {
    this.openDrawer = !this.openDrawer;
  }

  onLoading(loading: boolean): void {
    this.loading = loading;
  }

  onError(error: string): void {
    this.errorMessage = error;
  }
}
