import { SharedModule } from 'src/app/shared/shared.module';
import { ForgotPasswordPageComponent } from './forgot-password-page.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';

@NgModule({
  declarations: [ForgotPasswordPageComponent, ForgotPasswordFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ForgotPasswordPageComponent }
    ])
  ]
})
export class ForgotPasswordModule {}
