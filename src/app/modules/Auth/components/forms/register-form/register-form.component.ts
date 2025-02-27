import { Component, signal, WritableSignal } from '@angular/core';
import { RegisterForm } from '../RegisterForm.class';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-register-form',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
  constructor(
    private readonly _authService: AuthService,
    private readonly router: Router
  ) {}

  private _register = new RegisterForm();

  protected usernameError: WritableSignal<string | null> = signal(null);
  protected passwordError: WritableSignal<string | null> = signal(null);

  public registerForm = this._register.Form;

  onSubmit() {
    this.usernameError.set(this._register.ValidUsername);
    this.passwordError.set(this._register.ValidPassword);

    if (this.registerForm.invalid) return;

    this._authService
      .Register(this._register.RegisterRequest)
      .subscribe({ complete: () => {
        this.router.navigate(['/auth/login']);
      } });
  }
}
