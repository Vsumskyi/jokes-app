import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/interfaces/interfaces';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-create-joke-page',
  templateUrl: './create-joke-page.component.html',
  styleUrls: ['./create-joke-page.component.scss']
})
export class CreateJokePageComponent implements OnInit {
  loading = false;
  errorMessage = '';
  constructor(public jokeService: JokeService) {}

  ngOnInit(): void {}
  onError(error: string): void {
    this.errorMessage = error;
  }
  onLoading(loading: boolean): void {
    this.loading = loading;
  }
}
