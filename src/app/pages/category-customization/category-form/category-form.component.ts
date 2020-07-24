import { CategoryPropertyEnum } from './../../../enums/enums';
import { CategoryInterface } from 'src/app/interfaces/interfaces';
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
  @Output() modifyOnCategories = new EventEmitter<CategoryInterface>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void {
    this.form = this.fb.group({
      categoryProperty: [this.categoryPropertyEnum['Add Category']],
      categories: this.fb.group({
        customCategory: [null, [Validators.required, Validators.minLength(3)]],
        categoryList: [{ value: null, disabled: true }, [Validators.required]]
      })
    });
  }

  submit(): void {
    this.modifyOnCategories.emit(this.form.value);
    this.form.get('categories').reset();
  }

  getCategoriesValue(id: string | number): string {
    return this.categories.find(i => i.id === id)?.title;
  }
  checkValue({ value }): void {
    if (value === this.categoryPropertyEnum['Add Category']) {
      this.form.get('categories.customCategory').enable();
      this.form.get('categories.categoryList').disable();
    } else {
      this.form.get('categories.customCategory').disable();
      this.form.get('categories.categoryList').enable();
    }
  }
}
