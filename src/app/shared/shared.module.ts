import { DiffDatePipe } from './../pipes/diff-date.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FavoriteCardComponent } from './components/favorite-card/favorite-card.component';

@NgModule({
  declarations: [FavoriteCardComponent, DiffDatePipe],
  imports: [CommonModule, RouterModule],
  exports: [FavoriteCardComponent, RouterModule, DiffDatePipe]
})
export class SharedModule {}
