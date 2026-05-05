import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 1. 必须导入这个
import { ApiService } from '../../services/api';
import { Router } from '@angular/router'; // 导入 Router

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule], // 2. 必须在这里声明
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  
  // 3. 必须定义这两个变量，否则 HTML 找不到
  couponCode: string = ''; 
  orderNote: string = '';

  constructor(
    private api: ApiService, 
    public router: Router // 4. 必须注入 router，且用 public 方便 HTML 访问
  ) {}

  ngOnInit(): void {
    this.cartItems = this.api.getCartItems();
  }

  // 5. 补上删除方法
  removeItem(index: number) {
    this.api.removeFromCart(index);
    this.cartItems = this.api.getCartItems();
  }

  // 6. 补上结算方法
  checkout() {
    alert(`Thank you for your order, Fariza!\nNote: ${this.orderNote}\nCoupon used: ${this.couponCode}`);
  }
}