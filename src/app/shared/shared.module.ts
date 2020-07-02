import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { FavoriteCardComponent } from './favorite-card/favorite-card.component'

@NgModule({
  declarations: [FavoriteCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [FavoriteCardComponent, RouterModule]
})
export class SharedModule {}
