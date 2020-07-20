import { EditPageComponent } from './edit-page/edit-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuard } from 'src/app/guards/auth.guard';

@NgModule({
  declarations: [EditPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: EditPageComponent, canActivate: [AuthGuard] }
    ])
  ]
})
export class EditModule {}
