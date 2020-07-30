import { checkPasswords } from 'src/app/validators/customs.validator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-restore-password-form',
  templateUrl: './restore-password-form.component.html',
  styleUrls: ['./restore-password-form.component.scss']
})
export class RestorePasswordFormComponent implements OnInit {
  @Output() submitForm = new EventEmitter();
  @Input() loadingState: boolean;
  @Input() resetPasswordMode = false;
  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void {
    this.form = !this.resetPasswordMode
      ? this.fb.group({
          email: ['', [Validators.required, Validators.email]]
        })
      : this.fb.group(
          {
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: [
              '',
              [Validators.required, Validators.minLength(6)]
            ]
          },
          { validators: checkPasswords() }
        );
  }

  submit(): void {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value);
      this.form.reset();
    }
  }
}
