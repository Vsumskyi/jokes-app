import { CategoryInterface } from 'src/app/interfaces/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  form: FormGroup;
  @Input() categories: CategoryInterface[];
  @Input() loadingState: boolean;
  @Output() modifyOnCategories = new EventEmitter<CategoryInterface>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void {
    this.form = this.fb.group({
      customCategory: [null],
      categoryList: [null]
    });
  }

  submit(): void {
    this.modifyOnCategories.emit(this.form.value);
    this.form.reset();
  }

  getCategoriesValue(id: string | number): string {
    return this.categories.find(i => i.id === id)?.title;
  }
}
