import { Component, OnInit } from '@angular/core';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public openDrawer = false;
  public loading = false;
  public errorMessage = '';

  constructor(public jokeService: JokeService) {}

  ngOnInit(): void {}

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
