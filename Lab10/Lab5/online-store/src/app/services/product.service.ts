import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
    { id: 5, name: 'FRUITS'},
  ];

  private products: Product[] = [
    { id: 101, name: 'Phone 1', description: '...', price: 0, rating: 0, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-blacktitanium-select?wid=470&hei=556&fmt=png-alpha', link: 'https://kaspi.kz/shop/c/smartphones%20and%20gadgets/?source=kaspikz', likes: 0, categoryId: 1 },
    { id: 102, name: 'Phone 2', description: '...', price: 0, rating: 0, image: 'https://images.samsung.com/is/image/samsung/p6pim/kz/sm-s911bzkgkz/product/sm-s911bzkgkz-thumb-537245463', link: 'https://kaspi.kz/shop/c/smartphones%20and%20gadgets/?source=kaspikz', likes: 0, categoryId: 1 },
    { id: 103, name: 'Phone 3', description: '...', price: 0, rating: 0,image: 'https://store.google.com/product/images/pixel_8_obsidian_front.png', link: 'https://kaspi.kz/shop/c/smartphones%20and%20gadgets/?source=kaspikz', likes: 0, categoryId: 1 },
    { id: 104, name: 'Phone 4', description: '...', price: 0, rating: 0, image: 'https://store.google.com/product/images/pixel_8_obsidian_front.png', link: 'https://kaspi.kz/shop/c/smartphones%20and%20gadgets/?source=kaspikz', likes: 0, categoryId: 1 },
    { id: 105, name: 'Phone 5', description: '...', price: 0, rating: 0, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-midnight-select-202209?wid=470&hei=556&fmt=png-alpha', link: 'https://kaspi.kz/shop/c/smartphones%20and%20gadgets/?source=kaspikz', likes: 0, categoryId: 1 },


    { id: 201, name: 'Laptop 1', description: '...', price: 0, rating: 0, image: '...', link: 'https://kaspi.kz/shop/c/computers/?source=kaspikz', likes: 0, categoryId: 5 },
    { id: 202, name: 'Laptop 2', description: '...', price: 0, rating: 0, image: '...', link: 'https://kaspi.kz/shop/c/computers/?source=kaspikz', likes: 0, categoryId: 2 },
    { id: 203, name: 'Laptop 3', description: '...', price: 0, rating: 0, image: '...', link: 'https://kaspi.kz/shop/c/computers/?source=kaspikz', likes: 0, categoryId: 2 },
    { id: 204, name: 'Laptop 4', description: '...', price: 0, rating: 0, image: '...', link: 'https://kaspi.kz/shop/c/computers/?source=kaspikz', likes: 0, categoryId: 2 },
    { id: 205, name: 'Laptop 5', description: '...', price: 0, rating: 0, image: '...', link: 'https://kaspi.kz/shop/c/computers/?source=kaspikz', likes: 0, categoryId: 2 },


    { id: 301, name: 'Headphones 1', description: '...', price: 0, rating: 0, image: '...', link: 'https://kaspi.kz/shop/c/tv_audio/?source=kaspikz', likes: 0, categoryId: 3 },
    { id: 302, name: 'Headphones 2', description: '...', price: 0, rating: 0, image: '...', link: 'https://kaspi.kz/shop/c/tv_audio/?source=kaspikz', likes: 0, categoryId: 3 },
    { id: 303, name: 'Headphones 3', description: '...', price: 0, rating: 0, image: '...', link: 'https://kaspi.kz/shop/c/tv_audio/?source=kaspikz', likes: 0, categoryId: 3 },
    { id: 304, name: 'Headphones 4', description: '...', price: 0, rating: 0, image: '...', link: 'https://kaspi.kz/shop/c/tv_audio/?source=kaspikz', likes: 0, categoryId: 3 },
    { id: 305, name: 'Headphones 5', description: '...', price: 0, rating: 0, image: '...', link: 'https://kaspi.kz/shop/c/tv_audio/?source=kaspikz', likes: 0, categoryId: 3 },

 
    { id: 401, name: 'Tablet 1', description: '...', price: 0, rating: 0, image: '...', link: 'https://kaspi.kz/shop/c/pharmacy/?source=kaspikz', likes: 0, categoryId: 4 },
    { id: 402, name: 'Tablet 2', description: '...', price: 0, rating: 0, image: '...', link: 'https://kaspi.kz/shop/c/pharmacy/?source=kaspikz', likes: 0, categoryId: 4 },
    { id: 403, name: 'Tablet 3', description: '...', price: 0, rating: 0, image: '...', link: 'https://kaspi.kz/shop/c/pharmacy/?source=kaspikz', likes: 0, categoryId: 4 },
    { id: 404, name: 'Tablet 4', description: '...', price: 0, rating: 0, image: '...', link: 'https://kaspi.kz/shop/c/pharmacy/?source=kaspikz', likes: 0, categoryId: 4 },
    { id: 405, name: 'Tablet 5', description: '...', price: 0, rating: 0, image: '...', link: 'https://kaspi.kz/shop/c/pharmacy/?source=kaspikz', likes: 0, categoryId: 4 },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter((p) => p.categoryId === categoryId);
  }
}