import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistryUser, LoginUser } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesEnum } from 'src/app/enums/enums';
import { checkPasswords } from 'src/app/validators/customs.validator';
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  public form: FormGroup;
  private returnUrl: string;
  public errorMessage = '';
  public loading = false;
  public rolesEnum = RolesEnum;

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
        { validator: checkPasswords() }
      ),
      roles: [null]
    });
  }

  submit(): void {
    this.loading = true;
    this.errorMessage = '';
    const { email, firstName, lastName, roles } = this.form.value;
    const { password } = this.form.value.passwords;
    const registryUser: RegistryUser = {
      email,
      firstName,
      lastName,
      password,
      roles: roles && [this.rolesEnum['Super Admin']]
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
