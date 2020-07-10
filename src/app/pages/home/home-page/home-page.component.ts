import { Component, OnInit } from '@angular/core';
import { JokeService } from 'src/app/services/joke.service';
import { JokesDataService } from 'src/app/services/jokes-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public openDrawer = false;

  constructor(
    public jokeService: JokeService,
    public jokesDataService: JokesDataService
  ) {}

  ngOnInit(): void {}

  toggleDrawer(): void {
    this.openDrawer = !this.openDrawer;
  }
}
