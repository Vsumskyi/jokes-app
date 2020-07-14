import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistryUser, User, LoginUser } from 'src/app/interfaces/interfaces';
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
  public formControls = [
    { name: 'email', type: 'email' },
    { name: 'firstName', type: 'text' },
    { name: 'lastName', type: 'text' },
    { name: 'password', type: 'password' }
  ];

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
      password: [null, [Validators.required, Validators.minLength(6)]],
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, [Validators.required, Validators.minLength(2)]]
    });
  }

  signIn(): void {
    this.loading = true;
    this.errorMessage = '';

    const registryUser: RegistryUser = { ...this.form.value };
    this.authService
      .signin(registryUser)
      .subscribe(
        isRegistry => {
          if (isRegistry) {
            const user: LoginUser = {
              email: registryUser.email,
              password: registryUser.password
            };
            this.authService.login(user).subscribe(data => {
              this.authService.setAuthData(data, true);
              this.router.navigateByUrl(this.returnUrl);
              this.form.reset();
            });
          } else {
            this.errorMessage = 'Something went wrong...';
          }
        },
        e => (this.errorMessage = e.error)
      )
      .add(() => (this.loading = false));
  }
}
