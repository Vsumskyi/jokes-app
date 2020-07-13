import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AuthFormComponent } from './auth-form/auth-form.component';

@NgModule({
  declarations: [AuthPageComponent, AuthFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: 'auth', component: AuthPageComponent }])
  ]
})
export class AuthModule {}
