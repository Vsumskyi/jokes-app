import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ResetPasswordInterface } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.scss']
})
export class ResetPasswordPageComponent implements OnInit {
  private user: ResetPasswordInterface;
  public isValidToken = false;
  public loadingState = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.verifyUser();
  }

  verifyUser(): void {
    const { token, userId } = this.route.snapshot.queryParams;
    if (!token && !userId) {
      this.router.navigate(['/']);
    }

    this.authService.verifyResetPassword(token, userId).subscribe(isUser => {
      this.isValidToken = isUser;
      if (isUser) {
        this.user = {
          userId: +userId,
          token
        };
      }
    });
  }

  changePasswords(password: string): void {
    this.loadingState = true;
    this.user.password = password;
    this.authService
      .changePassword(this.user)
      .subscribe(
        () => {
          this.authService.openSnackBar('Password changed!');
          this.router.navigate(['/auth']);
        },
        () => this.authService.openSnackBar('Something went wrong...')
      )
      .add(() => (this.loadingState = false));
  }
}
