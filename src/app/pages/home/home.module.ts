import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokeFormComponent } from './joke-form/joke-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HomePageComponent, JokeFormComponent]
})
export class HomeModule {}
