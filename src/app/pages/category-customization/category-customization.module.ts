import { AdminGuard } from '../../guards/admin.guard';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditCategoriesPageComponent } from './edit-categories-page/edit-categories-page.component';
import { CategoryFormComponent } from './category-form/category-form.component';

@NgModule({
  declarations: [EditCategoriesPageComponent, CategoryFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: EditCategoriesPageComponent,
        canActivate: [AdminGuard]
      }
    ])
  ],
  providers: [AdminGuard]
})
export class CategoryCustomizationModule {}
