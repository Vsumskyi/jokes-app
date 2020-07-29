import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss']
})
export class ForgotPasswordPageComponent implements OnInit {
  public success = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  submit(email: string): void {
    const restorePassUrl = window.location.origin + '/reset';
    this.authService.resetPasswordRequest(email, restorePassUrl).subscribe(
      () => {
        this.success = true;
        this.authService.openSnackBar('We send instruction to you Email');
      },
      () => {
        this.authService.openSnackBar('This email is not registered');
      }
    );
  }
}
