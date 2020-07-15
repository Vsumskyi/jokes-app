import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistryUser, LoginUser } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
  public form: FormGroup;
  private returnUrl: string;
  public errorMessage = '';
  public loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setForm();
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  setForm(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, [Validators.required, Validators.minLength(2)]],
      passwords: this.fb.group(
        {
          password: [null, [Validators.required, Validators.minLength(6)]],
          confirmPassword: [
            null,
            [Validators.required, Validators.minLength(6)]
          ]
        },
        { validator: this.checkPasswords }
      )
    });
  }

  checkPasswords(group: FormGroup): any {
    const pass = group.get('password').value;
    const confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null : { notSame: true };
  }

  signIn(): void {
    this.loading = true;
    this.errorMessage = '';
    const { email, firstName, lastName } = this.form.value;
    const { password } = this.form.value.passwords;
    const registryUser: RegistryUser = {
      email,
      firstName,
      lastName,
      password
    };
    this.authService
      .signup(registryUser)
      .subscribe(
        isRegistry => {
          if (isRegistry) {
            this.loginAfterSignUp(registryUser);
            this.form.reset();
          } else {
            this.errorMessage = 'Something went wrong...';
          }
        },
        e => (this.errorMessage = e.error.message)
      )
      .add(() => (this.loading = false));
  }

  loginAfterSignUp(registryUser: RegistryUser): void {
    const loginUser: LoginUser = {
      email: registryUser.email,
      password: registryUser.password
    };
    this.authService.signin(loginUser).subscribe(user => {
      this.authService.setAuthData(user, true);
      this.router.navigateByUrl(this.returnUrl);
    });
  }
}
