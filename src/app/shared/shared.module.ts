import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoaderComponent } from './loader/loader.component';
import { FavoriteCardComponent } from './favorite-card/favorite-card.component';
import { EmptyContainerComponent } from './empty-container/empty-container.component';
import { InputFocusDirective } from '../directives/input-focus.directive';
import { DiffDatePipe } from './../pipes/diff-date.pipe';
import { SearchPipe } from './../pipes/search.pipe';

@NgModule({
  declarations: [
    FavoriteCardComponent,
    DiffDatePipe,
    SearchPipe,
    EmptyContainerComponent,
    InputFocusDirective,
    LoaderComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    FavoriteCardComponent,
    RouterModule,
    DiffDatePipe,
    SearchPipe,
    EmptyContainerComponent,
    InputFocusDirective,
    FormsModule,
    ReactiveFormsModule,
    LoaderComponent
  ]
})
export class SharedModule {}
