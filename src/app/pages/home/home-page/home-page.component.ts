import { Component, OnInit } from '@angular/core';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  openDrawer = false;

  constructor(public jokeService: JokeService) {}

  ngOnInit(): void {}

  toggleDrawer(): void {
    this.openDrawer = !this.openDrawer;
  }
}
