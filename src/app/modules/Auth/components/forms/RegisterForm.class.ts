import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthRequest } from '../../../../core/services/auth/interfaces/request/AuthRequest';

interface Form {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}

export class RegisterForm {
  private form: FormGroup<Form>;

  constructor() {
    this.form = new FormGroup<Form>({
      username: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3),
      ]),
    });
  }

  public get Form(): FormGroup<Form> {
    return this.form;
  }

  public get ValidPassword(): string | null {
    const password = this.form.get('password');

    if (password) {
      if (password.invalid) {
        if (password.errors?.['required']) {
          return 'Password is required';
        }
        if (password.errors?.['minlength']) {
          return 'Password must be at least 3 characters';
        }
        if (password.errors?.['maxlength']) {
          return 'Password must be at most 50 characters';
        }
      }
    }

    return null;
  }

  public get ValidUsername(): string | null {
    const username = this.form.get('username');

    if (username) {
      if (username.invalid) {
        if (username.errors?.['required']) {
          return 'Username is required';
        }
        if (username.errors?.['minlength']) {
          return 'Username must be at least 3 characters';
        }
        if (username.errors?.['maxlength']) {
          return 'Username must be at most 20 characters';
        }
      }
    }

    return null;
  }

  public get RegisterRequest(): AuthRequest {
    return {
      username: this.form.value.username!,
      password: this.form.value.password!,
    };
  }
}
