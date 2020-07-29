import { checkPasswords } from 'src/app/validators/customs.validator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {
  public passwords: FormGroup;
  @Output() newPasswords = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void {
    this.passwords = this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      },
      { validators: checkPasswords() }
    );
  }

  submit(): void {
    if (this.passwords.valid) {
      this.newPasswords.emit(this.passwords.value.password);
    }
  }
}
