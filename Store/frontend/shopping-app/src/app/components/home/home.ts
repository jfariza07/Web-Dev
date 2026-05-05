import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  cart: any[] = [];
  categories: any[] = [];

  constructor(private api: ApiService) {} // 这里统一叫 api

  ngOnInit() {
    this.loadProducts();
    alert('Angular is loading products!');
    this.loadCategories();
  }

  loadProducts() {
    this.api.getProducts().subscribe({
      next: (data) => {
        console.log('Products loaded:', data);
        this.products = data;
      },
      error: (err) => console.error('Product API Error:', err)
    });
  }

  loadCategories() {
    this.api.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => console.error('Category API Error:', err)
    });
  }

  addToCart(product: any) {
    this.api.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}