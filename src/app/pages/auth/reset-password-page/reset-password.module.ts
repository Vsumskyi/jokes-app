import { ResetPasswordPageComponent } from './reset-password-page.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ResetPasswordFormComponent, ResetPasswordPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ResetPasswordPageComponent }])
  ]
})
export class ResetPasswordModule {}
