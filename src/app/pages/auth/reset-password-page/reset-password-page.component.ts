import { ResetPasswordInterface } from './../../../interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.scss']
})
export class ResetPasswordPageComponent implements OnInit {
  private user: ResetPasswordInterface;
  public isValidToken = true;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.verifyUser();
  }

  verifyUser(): void {
    this.route.queryParams.subscribe(user => {
      if (!user.token && !user.userId) {
        this.router.navigate(['/']);
      }
      this.authService
        .verifyResetPassword(user.token, user.userId)
        .subscribe(isUser => {
          // if (isUser) {
          // this.isValidToken = isUser;
          this.user = {
            userId: +user.userId,
            token: user.token
          };
          // }
        });
    });
  }

  changePasswords(password: string): void {
    this.user.password = password;
    this.authService.changePassword(this.user).subscribe(response => {
      this.authService.openSnackBar('Password changed!');
      this.router.navigate(['/auth']);
    });
  }
}
