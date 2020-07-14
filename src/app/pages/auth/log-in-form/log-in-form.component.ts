import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginUser } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent implements OnInit {
  public form: FormGroup;
  public errorMessage = '';
  public loading = false;
  private returnUrl: string;
  public formControls = [
    { name: 'email', type: 'email' },
    { name: 'password', type: 'password' }
  ];
  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
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
      remember: [true]
    });
  }

  submit(): void {
    this.loading = true;
    this.errorMessage = '';
    const user: LoginUser = { ...this.form.value };
    this.authService
      .login(user)
      .subscribe(
        data => {
          this.authService.setAuthData(data, this.form.get('remember').value);
          this.router.navigateByUrl(this.returnUrl);
          this.form.reset();
        },
        e => {
          this.errorMessage = e.error;
        }
      )
      .add(() => (this.loading = false));
  }
}
