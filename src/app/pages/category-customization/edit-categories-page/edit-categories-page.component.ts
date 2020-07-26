import { JokesDataService } from 'src/app/services/jokes-data.service';
import { CategoryInterface } from 'src/app/interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';
@Component({
  selector: 'app-edit-categories-page',
  templateUrl: './edit-categories-page.component.html',
  styleUrls: ['./edit-categories-page.component.scss']
})
export class EditCategoriesPageComponent implements OnInit {
  public categoriesList: CategoryInterface[] = [];
  public loadingState: boolean;
  public addCategoryMode = true;
  public errorMessage = '';
  constructor(private jokesDataService: JokesDataService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  addNewCategory(category: string): void {
    this.loadingState = true;
    this.jokesDataService
      .postCategory(category)
      .subscribe(
        () => {
          this.jokesDataService.openSnackBar(`Category ${category} was added!`);
          this.getCategories();
        },
        e => this.jokesDataService.openSnackBar('Something went wrong...')
      )
      .add(() => {
        this.loadingState = false;
      });
  }

  removeCategories(categories: number[]): void {
    this.loadingState = true;
    const observables = categories.map(category =>
      this.jokesDataService.deleteCategory(category)
    );
    // combine array of observables to on stream
    zip(...observables)
      .subscribe(
        () => {
          this.jokesDataService.openSnackBar('Deleted!');
          this.getCategories();
        },
        e => this.jokesDataService.openSnackBar('Something went wrong...')
      )
      .add(() => {
        this.loadingState = false;
      });
  }

  getCategories(): void {
    this.jokesDataService.fetchCategories().subscribe(category => {
      this.categoriesList = category;
    });
  }
}
