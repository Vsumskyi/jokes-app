import { JokeFormComponent } from './joke-form/joke-form.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomePageComponent } from './home-page/home-page.component'
import { JokeCardComponent } from './joke-card/joke-card.component'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [HomePageComponent, JokeCardComponent, JokeFormComponent],
  imports: [CommonModule, SharedModule]
})
export class HomeModule {}
