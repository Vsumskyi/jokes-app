import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateJokePageComponent } from './create-joke-page/create-joke-page.component';
import { CreateJokeFormComponent } from './create-joke-form/create-joke-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuard } from 'src/app/guards/auth.guard';

@NgModule({
  declarations: [CreateJokePageComponent, CreateJokeFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateJokePageComponent,
        canActivate: [AuthGuard]
      }
    ])
  ]
})
export class CreateJokeModule {}
