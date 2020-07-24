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
  @Output() modifyOnCategories = new EventEmitter<FormCategoriesInterface>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void {
    this.form = this.fb.group({
      categoryOption: [this.categoryPropertyEnum['Add Category']],
      customCategory: [null, [Validators.required, Validators.minLength(3)]],
      categoryList: [null, [Validators.required]]
    });
  }

  submit(): void {
    this.modifyOnCategories.emit(this.form.value);
    this.form.get('customCategory').reset();
  }

  getCategoriesValue(id: string | number): string {
    return this.categories.find(i => i.id === id)?.title;
  }
}
