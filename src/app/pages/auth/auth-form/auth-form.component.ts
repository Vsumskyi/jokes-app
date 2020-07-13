import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  public form: FormGroup;
  public errorMessage = '';
  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      remember: [true]
    });
  }

  submit(): void {
    const user: User = { ...this.form.value };
    this.authService.login(user).subscribe(
      data => {
        this.authService.setAuthData(data, this.form.get('remember').value);
        this.router.navigate(['/']);
        this.form.reset();
      },
      e => {
        this.errorMessage = e.error;
      }
    );
  }
}
