import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(private api: ApiService, private router: Router) {}

  // login.ts
login(): void {
  this.api.login(this.credentials).subscribe({
    next: (res: any) => {
      // 只要后端返回 200，我们就认为成功
      if (res && res.access) {
        localStorage.setItem('access_token', res.access);
        localStorage.setItem('refresh_token', res.refresh);
      }
      alert('Login successful! Welcome, ' + this.credentials.username);
      this.router.navigate(['/']); 
    },
    error: (err: any) => {
      console.error('Login Error:', err); // 这样你能在控制台看到具体报错
      alert('Login failed! Please check your username/password.');
    }
  });
}
}