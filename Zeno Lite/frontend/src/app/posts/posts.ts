import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [HttpClientModule, RouterModule, CommonModule],
  templateUrl: './posts.html',
  styleUrls: ['./posts.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.http.get<any[]>('http://127.0.0.1:8000/api/posts/')
      .subscribe({
        next: (data) => this.posts = data,
        error: () => alert('Failed to load posts')
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  goToAdd() {
    this.router.navigate(['/add']);
  }

}