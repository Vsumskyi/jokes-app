import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputFocusDirective } from '../directives/input-focus.directive';
import { DiffDatePipe } from './../pipes/diff-date.pipe';
import { SearchPipe } from './../pipes/search.pipe';
import { EmptyContainerComponent } from './components/empty-container/empty-container.component';
import { FavoriteCardComponent } from './components/favorite-card/favorite-card.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    FavoriteCardComponent,
    EmptyContainerComponent,
    DiffDatePipe,
    SearchPipe,
    InputFocusDirective,
    NotAuthorizedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    FavoriteCardComponent,
    EmptyContainerComponent,
    RouterModule,
    DiffDatePipe,
    SearchPipe,
    InputFocusDirective,
    FormsModule,
    ReactiveFormsModule,
    NotAuthorizedComponent,
    MaterialModule
  ]
})
export class SharedModule {}
