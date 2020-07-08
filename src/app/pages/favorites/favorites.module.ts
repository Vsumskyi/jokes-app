import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [FavoritesPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: FavoritesPageComponent }])
  ]
})
export class FavoritesModule {}
