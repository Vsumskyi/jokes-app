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
  @Input() addCategoryMode = false;
  @Input() categories: CategoryInterface[];
  @Input() loadingState: boolean;
  @Output() modifyCategories = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void {
    if (this.addCategoryMode) {
      this.form = this.fb.group({
        customCategory: [null, [Validators.required, Validators.minLength(3)]]
      });
    } else {
      this.form = this.fb.group({
        categoryList: [null, [Validators.required]]
      });
    }
  }

  submit(): void {
    if (this.form.valid && this.form.enable) {
      this.modifyCategories.emit(this.form.value);

      this.form.reset();
    }
  }

  getCategoriesValue(id: string | number): string {
    return this.categories.find(i => i.id === id)?.title;
  }
}
