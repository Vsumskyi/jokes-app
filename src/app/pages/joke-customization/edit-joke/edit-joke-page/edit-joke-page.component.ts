import { JokesMediaService } from 'src/app/services/jokes-media.service';
import { CategoryInterface } from 'src/app/interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { JokeService } from 'src/app/services/joke.service';
import { JokesDataService } from 'src/app/services/jokes-data.service';
import { Joke, PostJokeInterface } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-edit-joke-page',
  templateUrl: './edit-joke-page.component.html',
  styleUrls: ['./edit-joke-page.component.scss'],
  providers: [JokesMediaService]
})
export class EditJokePageComponent implements OnInit {
  public loading = false;
  public loadingForm = false;
  public errorMessage = '';
  public categoriesList: CategoryInterface[] = [];
  public joke: Joke;

  constructor(
    private route: ActivatedRoute,
    private jokeService: JokeService,
    private jokesDataService: JokesDataService,
    private jokesMediaService: JokesMediaService
  ) {}

  ngOnInit(): void {
    this.getCurrentJoke();
    this.getCategories();
  }

  onEditJoke(joke: PostJokeInterface): void {
    this.loadingForm = true;
    joke.id = this.joke.id;
    joke.categories = joke.categories.map(i => this.getCategoriesId(`${i}`));

    this.jokesDataService
      .editJoke(joke)
      .subscribe(
        newJoke => {
          this.jokesDataService.openSnackBar('Updated!');
          this.jokeService.setBufferJoke(newJoke);
          this.jokeService.refreshJokes(newJoke);
        },
        () => this.jokesDataService.openSnackBar('Something went wrong...!')
      )
      .add(() => {
        this.loadingForm = false;
      });
  }

  getCurrentJoke(): void {
    this.loading = true;
    this.route.params.subscribe((params: Params) => {
      this.jokesDataService
        .getJokeByIdFromApi(params.id)
        .subscribe(apiJoke => {
          this.jokeService.setBufferJoke(apiJoke);
          this.jokeService.currentBufferJoke.subscribe(currentJoke => {
            this.joke = currentJoke;
          });
        })
        .add(() => (this.loading = false));
    });
  }

  getCategoriesId(value: string): number {
    return this.categoriesList.find(i => i.title === value)?.id;
  }

  getCategories(): void {
    this.jokesDataService.fetchCategories().subscribe(data => {
      this.categoriesList = [...data];
    });
  }
}
