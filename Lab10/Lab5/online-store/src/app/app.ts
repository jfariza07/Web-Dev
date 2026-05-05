import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { categories, products } from './data/products';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  categories = categories;
  allProducts = products;
  selectedCategory: Category | null = null;

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  getFilteredProducts(): Product[] {
    if (!this.selectedCategory) {
      return [];
    }
    return this.allProducts.filter(p => p.categoryId === this.selectedCategory?.id);
  }
}