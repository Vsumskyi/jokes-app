import { FormGroup, ValidationErrors } from '@angular/forms';

export const checkPasswords = (): ValidationErrors => {
  return (group: FormGroup): { [key: string]: boolean } => {
    const pass = group.get('password').value;
    const confirmPass = group.get('confirmPassword').value;
    if (pass !== confirmPass) {
      return { notSame: true };
    }
  };
};
