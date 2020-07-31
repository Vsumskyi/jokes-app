import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategoryExistValidator } from '../directives/categories.validator';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { InputUploadDirective } from './../directives/input-upload.directive';
import { JokeModifyFormComponent } from './../pages/joke-customization/joke-modify-form/joke-modify-form.component';
import { InputFocusDirective } from '../directives/input-focus.directive';
import { DiffDatePipe } from './../pipes/diff-date.pipe';
import { SearchPipe } from './../pipes/search.pipe';
import { EmptyContainerComponent } from './components/empty-container/empty-container.component';
import { FavoriteCardComponent } from './components/favorite-card/favorite-card.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { MaterialModule } from './material.module';
import { RestorePasswordFormComponent } from './../pages/auth/reset-password/restore-password-form/restore-password-form.component';

@NgModule({
  declarations: [
    FavoriteCardComponent,
    JokeModifyFormComponent,
    EmptyContainerComponent,
    DiffDatePipe,
    SearchPipe,
    InputFocusDirective,
    NotAuthorizedComponent,
    CategoryExistValidator,
    InputUploadDirective,
    ToolbarComponent,
    RestorePasswordFormComponent
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
    JokeModifyFormComponent,
    MaterialModule,
    CategoryExistValidator,
    InputUploadDirective,
    ToolbarComponent,
    RestorePasswordFormComponent
  ]
})
export class SharedModule {}
