import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { JokeFormComponent } from './joke-form/joke-form.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomePageComponent } from './home-page/home-page.component'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  declarations: [HomePageComponent, JokeFormComponent]
})
export class HomeModule {}
