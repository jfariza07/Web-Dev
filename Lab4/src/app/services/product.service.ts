import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro 128Gb Blue Titanium',
      price: 545000,
      description: 'Aviation-grade titanium design with the A17 Pro chip and a customizable Action button.',
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h75/83559338311710.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h92/h75/83559338311710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1a/h45/83559338377246.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h61/h1a/83559338442782.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-blue-titanium-113138330/'
    },
    {
      id: 2,
      name: 'Sony PlayStation 5 Slim',
      price: 245000,
      description: 'Experience lightning-fast loading with an ultra-high speed SSD and deeper immersion.',
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h11/84524453527582.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h02/h11/84524453527582.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h90/84524453593118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h10/h6e/84524453658654.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-115019346/'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getCategories(): Category[] {
    return [
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Gadgets' },
      { id: 3, name: 'Home' }
    ];
  }
}