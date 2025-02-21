import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatTabsModule
  ]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  confirmPassword: string = '';
  isLogin: boolean = true;

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  login() {
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (data) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.snackBar.open('Invalid username or password', 'Close', {
          duration: 3000,
        });
      }
    });
  }

  register() {
    if (this.password !== this.confirmPassword) {
      this.snackBar.open('Passwords do not match', 'Close', {
        duration: 3000,
      });
      return;
    }

    this.authService.register({ username: this.username, email: this.email, password: this.password }).subscribe({
      next: () => {
        this.snackBar.open('Registration successful', 'Close', {
          duration: 3000,
        });
        this.isLogin = true;
      },
      error: (err) => {
        this.snackBar.open('Registration failed. Please try again.', 'Close', {
          duration: 3000,
        });
      }
    });
  }

  get selectedIndex(): number {
    return this.isLogin ? 0 : 1;
  }

  set selectedIndex(index: number) {
    this.isLogin = index === 0;
  }
}
