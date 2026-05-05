import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {
  product = input.required<Product>();
  currentImageIndex = signal(0);

  nextImage() {
    const images = this.product().images;
    this.currentImageIndex.update(index => (index + 1) % images.length);
  }

  prevImage() {
    const images = this.product().images;
    this.currentImageIndex.update(index => (index - 1 + images.length) % images.length);
  }

  setCurrentImage(index: number) {
    this.currentImageIndex.set(index);
  }

  shareOnWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + this.product().link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product().link)}&text=${encodeURIComponent(this.product().name)}`;
    window.open(url, '_blank');
  }
}