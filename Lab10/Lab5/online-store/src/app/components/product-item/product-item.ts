import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {
  product = input.required<Product>();
  remove = output<number>();

  like() {
    this.product().likes++;
  }

  delete() {
    this.remove.emit(this.product().id);
  }

  shareOnWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(this.product().link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product().link)}&text=${encodeURIComponent(this.product().name)}`;
    window.open(url, '_blank');
  }
}