import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent implements OnInit {
  @Output() submitForm = new EventEmitter();
  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value.email);
      this.form.reset();
    }
  }
}
