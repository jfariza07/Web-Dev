import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './add-post.html'
})
export class AddPostComponent {
  title = '';
  content = '';

  constructor(private http: HttpClient, private router: Router) {}

  addPost() {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });

    this.http.post('http://127.0.0.1:8000/api/posts/create/', {
      title: this.title,
      content: this.content,
      category: 1
    }, { headers }).subscribe(() => {
      alert('Post added');
      this.router.navigate(['/posts']);
    });
  }
}