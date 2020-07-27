import { JokesDataService } from 'src/app/services/jokes-data.service';
import { Component, OnInit } from '@angular/core';
import {
  Joke,
  PostJokeInterface,
  CategoryInterface
} from 'src/app/interfaces/interfaces';
import { JokeService } from 'src/app/services/joke.service';
import { JokesMediaService } from 'src/app/services/jokes-media.service';

@Component({
  selector: 'app-create-joke-page',
  templateUrl: './create-joke-page.component.html',
  styleUrls: ['./create-joke-page.component.scss'],
  providers: [JokesMediaService]
})
export class CreateJokePageComponent implements OnInit {
  public errorMessage = '';
  public loading = false;
  public joke: Joke;
  public categoriesList: CategoryInterface[] = [];

  constructor(
    private jokeService: JokeService,
    private jokesDataService: JokesDataService,
    private jokesMediaService: JokesMediaService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.jokeService.removeBufferJoke();
  }

  getCategories(): void {
    this.jokesDataService.fetchCategories().subscribe(data => {
      this.categoriesList = [...data];
    });
  }

  onNewJoke(joke: PostJokeInterface): void {
    this.loading = true;

    // FIX ME!
    if (joke.customCategories) {
      this.postCategory(joke);
    }
    if (joke.image) {
      this.postIcon(joke);
    }

    if (!joke.customCategories && !joke.image) {
      this.postJoke(joke);
    }
  }

  postJoke(newJoke: PostJokeInterface): void {
    this.jokesDataService
      .postJoke(newJoke)
      .subscribe(
        joke => {
          this.jokeService.setBufferJoke(joke);
          this.jokeService.currentBufferJoke.subscribe(currentJoke => {
            this.joke = currentJoke;
          });
          this.jokesDataService.openSnackBar('Created!');
          this.getCategories();
          this.loading = false;
        },
        () => this.jokesDataService.openSnackBar('Something went wrong...')
      )
      .add(() => {
        this.loading = false;
      });
  }

  postCategory(joke: PostJokeInterface): void {
    this.jokesDataService
      .postCategory(joke.customCategories)
      .subscribe(data => {
        joke.categories = joke.categories.map(i =>
          this.getCategoriesId(`${i}`)
        );
        joke.categories.unshift(data.id);
        this.postJoke(joke);
      });
  }

  postIcon(joke: PostJokeInterface): void {
    this.jokesMediaService
      .putImage(joke.image, this.jokesMediaService.getImageInfo.imageUploadUrl)
      .subscribe(() => {
        joke.imageNames = [this.jokesMediaService.getImageInfo.imageName];
        this.jokesMediaService.clearImageData();
        this.jokesDataService.postJoke(joke);
      });
  }

  getCategoriesId(value: string): number {
    return this.categoriesList.find(i => i.title === value)?.id;
  }
}
