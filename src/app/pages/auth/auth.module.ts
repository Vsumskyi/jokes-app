import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [AuthPageComponent, SignInFormComponent, SignUpFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: 'auth', component: AuthPageComponent }])
  ]
})
export class AuthModule {}
