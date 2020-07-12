import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputFocusDirective } from '../directives/input-focus.directive';
import { DiffDatePipe } from './../pipes/diff-date.pipe';
import { SearchPipe } from './../pipes/search.pipe';
import { EmptyContainerComponent } from './components/empty-container/empty-container.component';
import { FavoriteCardComponent } from './components/favorite-card/favorite-card.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    FavoriteCardComponent,
    EmptyContainerComponent,
    LoaderComponent,
    DiffDatePipe,
    SearchPipe,
    InputFocusDirective
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    FavoriteCardComponent,
    EmptyContainerComponent,
    LoaderComponent,
    RouterModule,
    DiffDatePipe,
    SearchPipe,
    InputFocusDirective,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
