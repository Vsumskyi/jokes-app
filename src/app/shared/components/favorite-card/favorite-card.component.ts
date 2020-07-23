import { Component, OnInit, Input } from '@angular/core';
import { Joke } from 'src/app/interfaces/interfaces';
import { JokeService } from 'src/app/services/joke.service';
import { JokesDataService } from 'src/app/services/jokes-data.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss'],
  providers: [JokesDataService]
})
export class FavoriteCardComponent implements OnInit {
  public loading = false;
  constructor(
    public jokeService: JokeService,
    public jokesDataService: JokesDataService,
    public authService: AuthService,
    private router: Router
  ) {}
  @Input() joke: Joke;
  @Input() favorite: boolean;
  @Input() edit = true;
  @Input() remove = true;
  ngOnInit(): void {}

  like(joke: Joke, isFavorite: boolean, event: Event): void {
    event.preventDefault();
    if (!this.authService.authenticated) {
      this.router.navigate(['/auth']);
      return;
    }
    this.loading = true;
    if (!isFavorite) {
      this.jokesDataService
        .saveJokeToDb(joke.id)
        .subscribe(() => this.jokeService.saveToFavorites(joke))
        .add(() => (this.loading = false));
    } else {
      this.jokesDataService
        .removeFromDb(joke.id)
        .subscribe(() => this.jokeService.saveToFavorites(joke))
        .add(() => (this.loading = false));
    }
  }

  onRemove(id: string | number, event: Event): void {
    event.preventDefault();
    this.jokesDataService.deleteJoke(id).subscribe(() => {
      this.jokeService.removeJoke(id);
    });
  }
}
