import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  register() {
    this.authService.register({ username: this.username, email: this.email, password: this.password }).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      err => {
        this.snackBar.open('Registration failed. Please try again.', 'Close', {
          duration: 3000,
        });
      }
    );
  }
}
