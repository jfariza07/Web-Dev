import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  // --- 新增：购物车数据的“公共仓库” ---
  private cartItems: any[] = []; 

  constructor(private http: HttpClient) { }

  // 获取商品列表
  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/`);
  }

  // 获取分类列表
  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories/`);
  }

  // 登录逻辑
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login/`, data);
  }

  // --- 新增：操作购物车的逻辑 ---
  
  // 1. 把商品存入仓库
  addToCart(product: any) {
    this.cartItems.push(product);
    console.log('Cart updated in Service:', this.cartItems);
  }

  // 2. 让 Cart 页面来取货
  getCartItems() {
    return this.cartItems;
  }

  // 3. (可选) 清空购物车
  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
  removeFromCart(index: number) {
  // 在真实项目中，这里会调用 this.http.delete
  // 演示时，我们先操作本地数组，模拟 API 成功后的行为
  this.cartItems.splice(index, 1); 
}
}