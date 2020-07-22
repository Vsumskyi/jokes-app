import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthPropertiesEnum } from 'src/app/enums/enums';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  public form: FormGroup;
  public authPropertiesEnum = AuthPropertiesEnum;

  constructor(public authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      auth: [this.authPropertiesEnum['Sign in']]
    });
  }
}
