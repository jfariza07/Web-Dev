import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  username = '';
  password = '';
  showRegister = false;

  constructor(private http: HttpClient, private router: Router) {}

  // ✅ 登录
  login() {
    if (!this.username || !this.password) {
      alert('Please enter username and password');
      return;
    }

    this.http.post<any>('http://127.0.0.1:8000/api/login/', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res) => {
        console.log('LOGIN SUCCESS:', res);

        // ⚠️ 有些后端返回 token，有些返回 access
        const token = res.access || res.token;

        if (token) {
          localStorage.setItem('token', token);
          alert('Login success');
          this.router.navigate(['/posts']);
        } else {
          alert('Login failed: no token returned');
        }
      },
      error: (err) => {
        console.log('LOGIN ERROR:', err);

        const msg =
          err?.error?.detail ||
          err?.error?.message ||
          'Invalid username or password';

        alert('Login failed: ' + msg);
      }
    });
  }

  // ✅ 注册
  register() {
    if (!this.username || !this.password) {
      alert('Please enter username and password');
      return;
    }

    this.http.post('http://127.0.0.1:8000/api/register/', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: () => {
        alert('Registered successfully! Now login.');
        this.showRegister = false;
      },
      error: (err) => {
        console.log('REGISTER ERROR:', err);
        alert('Register failed: ' + JSON.stringify(err.error));
      }
    });
  }

  // ✅ 微信模拟登录
  wechatLogin() {
    this.username = 'wechat_user';
    this.password = '123456';
    this.login();
  }
}
