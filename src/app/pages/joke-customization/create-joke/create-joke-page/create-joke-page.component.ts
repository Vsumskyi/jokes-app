import { map } from 'rxjs/operators';
import { zip, Observable, of } from 'rxjs';
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
    zip(this.postCategory(joke), this.postIcon(joke)).subscribe(data => {
      const [id, imageNames] = data;
      if (joke.customCategories) {
        joke.categories = joke.categories.map(i =>
          this.getCategoriesId(`${i}`)
        );
        joke.categories.unshift(id);
      }
      if (joke.image) {
        joke.imageNames = imageNames;
      }
      this.postJoke(joke);
    });
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

  postCategory(joke: PostJokeInterface): Observable<number> {
    if (!joke.customCategories) {
      return of(null);
    }
    return this.jokesDataService.postCategory(joke.customCategories).pipe(
      map(i => {
        return i.id;
      })
    );
  }

  postIcon(joke: PostJokeInterface): Observable<string[]> {
    if (!joke.image) {
      return of(null);
    }
    const observables = this.jokesMediaService.getImageInfo.map(
      (image, index) => {
        return this.jokesMediaService.putImage(
          joke.image[index],
          image.imageUploadUrl
        );
      }
    );
    return zip(...observables).pipe(
      map(() => this.jokesMediaService.getImageInfo.map(i => i.imageName))
    );
  }

  getCategoriesId(value: string): number {
    return this.categoriesList.find(i => i.title === value)?.id;
  }
}
