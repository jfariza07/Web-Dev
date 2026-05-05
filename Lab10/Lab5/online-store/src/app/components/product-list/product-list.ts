import { Component, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  products = input.required<Product[]>();

  removeProduct(id: number) {
    const currentProducts = this.products();
    const index = currentProducts.findIndex(p => p.id === id);
    if (index !== -1) {
      currentProducts.splice(index, 1);
    }
  }
}