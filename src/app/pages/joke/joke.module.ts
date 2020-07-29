import { AuthGuard } from 'src/app/guards/auth.guard';
import { JokePageComponent } from './joke-page/joke-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [JokePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: JokePageComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  providers: [AuthGuard]
})
export class JokeModule {}
