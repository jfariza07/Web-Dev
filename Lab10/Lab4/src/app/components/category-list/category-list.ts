import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css'
})
export class CategoryListComponent implements OnInit {
  private productService = inject(ProductService);
  categories: Category[] = [];

  ngOnInit() {
    this.categories = this.productService.getCategories();
  }
}