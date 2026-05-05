import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home'; // 注意你的路径
import { LoginComponent } from './components/login/login';
import { CartComponent } from './components/cart/cart';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' }
];