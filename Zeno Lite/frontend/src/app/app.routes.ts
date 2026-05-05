import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login';
import { PostsComponent } from './posts/posts';
import { AddPostComponent } from './add-post/add-post';
import { CityComponent } from './city/city';  // ✅ 新增

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'add', component: AddPostComponent },

  // ✅ 新增：城市详情页
  { path: 'city/:name', component: CityComponent }
];