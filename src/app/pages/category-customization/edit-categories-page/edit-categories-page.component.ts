import { JokesDataService } from 'src/app/services/jokes-data.service';
import {
  CategoryInterface,
  FormCategoriesInterface
} from 'src/app/interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { CategoryPropertyEnum } from 'src/app/enums/enums';
@Component({
  selector: 'app-edit-categories-page',
  templateUrl: './edit-categories-page.component.html',
  styleUrls: ['./edit-categories-page.component.scss']
})
export class EditCategoriesPageComponent implements OnInit {
  public categoriesList: CategoryInterface[] = [];
  public loadingState: boolean;
  public errorMessage = '';
  public categoryPropertyEnum = CategoryPropertyEnum;
  constructor(private jokesDataService: JokesDataService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.jokesDataService.fetchCategories().subscribe(category => {
      this.categoriesList = category;
    });
  }

  onModifyCategories(categories: FormCategoriesInterface): void {
    const { categoryOption, customCategory, categoryList } = categories;
    this.loadingState = true;

    if (categoryOption === this.categoryPropertyEnum['Remove Category']) {
      this.removeCategories(categoryList);
    }
    if (categoryOption === this.categoryPropertyEnum['Add Category']) {
      this.addNewCategory(customCategory);
    }
  }

  addNewCategory(category: string): void {
    this.jokesDataService
      .postCategory(category)
      .subscribe(
        () => {
          this.jokesDataService.openSnackBar('Updated!');
          this.getCategories();
        },
        e => this.jokesDataService.openSnackBar('Something went wrong...')
      )
      .add(() => {
        this.loadingState = false;
      });
  }

  removeCategories(categories: number[]): void {
    categories.forEach(category => {
      this.jokesDataService
        .deleteCategory(category)
        .subscribe(
          () => {
            this.jokesDataService.openSnackBar('Updated!');
            this.getCategories();
          },
          e => this.jokesDataService.openSnackBar('Something went wrong...')
        )
        .add(() => {
          this.loadingState = false;
        });
    });
  }
}
