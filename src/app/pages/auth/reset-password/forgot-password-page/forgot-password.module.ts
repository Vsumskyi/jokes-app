import { SharedModule } from 'src/app/shared/shared.module';
import { ForgotPasswordPageComponent } from './forgot-password-page.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ForgotPasswordPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ForgotPasswordPageComponent }
    ])
  ]
})
export class ForgotPasswordModule {}
