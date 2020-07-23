import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { EditJokePageComponent } from './edit-joke-page/edit-joke-page.component';

@NgModule({
  declarations: [EditJokePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: EditJokePageComponent, canActivate: [AdminGuard] }
    ])
  ],
  providers: [AdminGuard]
})
export class EditJokeModule {}
