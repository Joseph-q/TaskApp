import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { LoginForm } from '../LoginForm.class';
import { AuthService } from '../../../../../core/services/auth/auth.service';
import { Subject, takeUntil } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-login-form',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  constructor(
    private readonly _authService: AuthService,
    private readonly router: Router
  ) { }

  private _login = new LoginForm();
  private unsubscribe$ = new Subject<void>();


  protected usernameError: WritableSignal<string | null> =signal(null);
  protected passwordError: WritableSignal<string | null> =signal(null);

  public loginForm = this._login.Form;


 

  onSubmit() {
    this.usernameError.set(this._login.ValidUsername);
    this.passwordError.set(this._login.ValidPassword);

    if (this.loginForm.invalid) return;


    this._authService.Login(this._login.LoginRequest)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      {
        next: (token) => {
          localStorage.setItem('authToken', token); // Guarda el token en Local Storage
          this.unsubscribe$.next();
        }
        ,
        complete: () => {
          this.router.navigate(['/tasks/today']); // Redirige a la ruta /tasks
          this.unsubscribe$.complete();
        }
      }
    );

  }

}
