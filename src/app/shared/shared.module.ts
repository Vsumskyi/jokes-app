import { DiffDatePipe } from './../pipes/diff-date.pipe';
import { SearchPipe } from './../pipes/search.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FavoriteCardComponent } from './favorite-card/favorite-card.component';
import { EmptyContainerComponent } from './empty-container/empty-container.component';
import { InputFocusDirective } from '../directives/input-focus.directive';

@NgModule({
  declarations: [
    FavoriteCardComponent,
    DiffDatePipe,
    SearchPipe,
    EmptyContainerComponent,
    InputFocusDirective
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    FavoriteCardComponent,
    RouterModule,
    DiffDatePipe,
    SearchPipe,
    EmptyContainerComponent,
    InputFocusDirective
  ]
})
export class SharedModule {}
