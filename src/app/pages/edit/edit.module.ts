import { EditPageComponent } from './edit-page/edit-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminGuard } from 'src/app/guards/admin.guard';

@NgModule({
  declarations: [EditPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: EditPageComponent, canActivate: [AdminGuard] }
    ])
  ],
  providers: [AdminGuard]
})
export class EditModule {}
