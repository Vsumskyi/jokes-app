import { CategoryPropertyEnum } from 'src/app/enums/enums';
import {
  CategoryInterface,
  FormCategoriesInterface
} from 'src/app/interfaces/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  public form: FormGroup;
  public categoryPropertyEnum = CategoryPropertyEnum;
  @Input() categories: CategoryInterface[];
  @Input() loadingState: boolean;
  @Output() addCategory = new EventEmitter<string>();
  @Output() deleteCategory = new EventEmitter<number[]>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void {
    this.form = this.fb.group({
      categoryOption: ['add'],
      customCategory: [null, [Validators.required]],
      categoryList: [null, [Validators.required]]
    });
  }

  submit(): void {
    this.form.value.categoryOption === 'add'
      ? this.addCategory.emit(this.form.value.customCategory)
      : this.deleteCategory.emit(this.form.value.categoryList);

    this.form.get('customCategory').reset();
  }

  getCategoriesValue(id: string | number): string {
    return this.categories.find(i => i.id === id)?.title;
  }
}
