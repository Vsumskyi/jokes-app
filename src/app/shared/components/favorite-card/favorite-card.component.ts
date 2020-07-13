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
  constructor(
    public jokeService: JokeService,
    public jokesDataService: JokesDataService,
    private authService: AuthService,
    private router: Router
  ) {}
  @Input() jokes: Joke[];
  @Input() favorite: boolean;
  ngOnInit(): void {}

  like(id: string | number, event: Event): void {
    event.preventDefault();
    if (!this.authService.isAuthenticated) {
      this.router.navigate(['/auth']);
      return;
    }
    // TODO
    // this.jokesDataService.saveJokeToDb(id).subscribe(data => console.log(data));
    this.jokeService.saveToFavorites(id);
    this.jokesDataService.saveToLocalStorage(this.jokeService.favoritesJokes);
  }
}
