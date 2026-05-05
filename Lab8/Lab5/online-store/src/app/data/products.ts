import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export const categories: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Audio' },
  { id: 4, name: 'Appliances' }
];

export const products: Product[] = [
  // --- Smartphones (categoryId: 1) ---
  {
    id: 1,
    categoryId: 1,
    name: 'iPhone 15 Pro',
    price: 545000,
    description: 'Apple flagship with Titanium design and A17 Pro chip.',
    rating: 5.0,
    image: 'https://dkstatics-public.digikala.com/digikala-products/1b4d0848074d3d3a014902b4855423f03b224151_1695471615.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-black-113138182/',
    likes: 0
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Samsung Galaxy S24 Ultra',
    price: 520000,
    description: 'AI-powered smartphone with 200MP camera.',
    rating: 4.9,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/kz_ru/2401/gallery/kz-ru-galaxy-s24-s928-sm-s928bztqskz-539305417',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-gb-256-gb-seryi-116043556/',
    likes: 0
  },
  {
    id: 3,
    categoryId: 1,
    name: 'Xiaomi 14',
    price: 380000,
    description: 'Compact flagship with Leica optics.',
    rating: 4.8,
    image: 'https://mi-home.kz/media/products/9373/xiaomi-14-black.jpg',
    link: 'https://kaspi.kz/shop/p/xiaomi-14-12-gb-512-gb-chernyi-117181677/',
    likes: 0
  },
  {
    id: 4,
    categoryId: 1,
    name: 'Google Pixel 8 Pro',
    price: 410000,
    description: 'The best Android experience with Google AI.',
    rating: 4.7,
    image: 'https://kaspi.kz/img/g/item/101/101/1.jpg',
    link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-128gb-goluboi-113644910/',
    likes: 0
  },
  {
    id: 5,
    categoryId: 1,
    name: 'OnePlus 12',
    price: 350000,
    description: 'Smooth and powerful performance flagship.',
    rating: 4.8,
    image: 'https://kaspi.kz/img/g/item/102/102/2.jpg',
    link: 'https://kaspi.kz/shop/p/oneplus-12-16-512gb-zelenyi-116345604/',
    likes: 0
  },

  // --- Laptops (categoryId: 2) ---
  {
    id: 6,
    categoryId: 2,
    name: 'MacBook Air M3',
    price: 610000,
    description: 'Incredibly thin and fast laptop with M3 chip.',
    rating: 5.0,
    image: 'https://kaspi.kz/img/g/item/103/103/3.jpg',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-256-gb-macos-mryv3-117540266/',
    likes: 0
  },
  {
    id: 7,
    categoryId: 2,
    name: 'ASUS ROG Zephyrus G14',
    price: 850000,
    description: 'Powerful gaming laptop in a compact form factor.',
    rating: 4.9,
    image: 'https://kaspi.kz/img/g/item/104/104/4.jpg',
    link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-ga402rj-l8116w-seryi-106540679/',
    likes: 0
  },
  {
    id: 8,
    categoryId: 2,
    name: 'Lenovo Legion 5 Pro',
    price: 720000,
    description: 'High-performance gaming with a stunning QHD display.',
    rating: 4.8,
    image: 'https://kaspi.kz/img/g/item/105/105/5.jpg',
    link: 'https://kaspi.kz/shop/p/lenovo-legion-5-pro-16iah7h-82rf009urk-seryi-105654316/',
    likes: 0
  },
  {
    id: 9,
    categoryId: 2,
    name: 'Dell XPS 13',
    price: 680000,
    description: 'Premium ultrabook with InfinityEdge display.',
    rating: 4.7,
    image: 'https://kaspi.kz/img/g/item/106/106/6.jpg',
    link: 'https://kaspi.kz/shop/p/dell-xps-13-9315-serebristyi-106456987/',
    likes: 0
  },
  {
    id: 10,
    categoryId: 2,
    name: 'HP Victus 16',
    price: 420000,
    description: 'Great value for gaming and productivity.',
    rating: 4.6,
    image: 'https://kaspi.kz/img/g/item/107/107/7.jpg',
    link: 'https://kaspi.kz/shop/p/hp-victus-16-d1013ur-6f4t6ea-seryi-106543210/',
    likes: 0
  },

  // --- Audio (categoryId: 3) ---
  {
    id: 11,
    categoryId: 3,
    name: 'AirPods Pro 2',
    price: 115000,
    description: 'Advanced noise cancellation and spatial audio.',
    rating: 4.9,
    image: 'https://kaspi.kz/img/g/item/108/108/8.jpg',
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-usb-c-magsafe-case-belyi-113398313/',
    likes: 0
  },
  {
    id: 12,
    categoryId: 3,
    name: 'Sony WH-1000XM5',
    price: 165000,
    description: 'Industry-leading noise canceling headphones.',
    rating: 4.9,
    image: 'https://kaspi.kz/img/g/item/109/109/9.jpg',
    link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105221431/',
    likes: 0
  },
  {
    id: 13,
    categoryId: 3,
    name: 'Marshall Major IV',
    price: 65000,
    description: 'Iconic design with 80+ hours of wireless playtime.',
    rating: 4.8,
    image: 'https://kaspi.kz/img/g/item/110/110/10.jpg',
    link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-101004867/',
    likes: 0
  },
  {
    id: 14,
    categoryId: 3,
    name: 'JBL Flip 6',
    price: 52000,
    description: 'Portable waterproof speaker with powerful sound.',
    rating: 4.8,
    image: 'https://kaspi.kz/img/g/item/111/111/11.jpg',
    link: 'https://kaspi.kz/shop/p/jbl-flip-6-chernyi-103362140/',
    likes: 0
  },
  {
    id: 15,
    categoryId: 3,
    name: 'Bose QuietComfort Ultra',
    price: 185000,
    description: 'World-class noise cancellation and immersive sound.',
    rating: 4.9,
    image: 'https://kaspi.kz/img/g/item/112/112/12.jpg',
    link: 'https://kaspi.kz/shop/p/bose-quietcomfort-ultra-seryi-113567890/',
    likes: 0
  },

  // --- Appliances (categoryId: 4) ---
  {
    id: 16,
    categoryId: 4,
    name: 'Dyson V15 Detect',
    price: 395000,
    description: 'The most powerful, intelligent cordless vacuum.',
    rating: 5.0,
    image: 'https://kaspi.kz/img/g/item/113/113/13.jpg',
    link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-serebristyi-101887654/',
    likes: 0
  },
  {
    id: 17,
    categoryId: 4,
    name: 'LG InstaView Refrigerator',
    price: 950000,
    description: 'Knock twice and see inside without losing cold air.',
    rating: 4.8,
    image: 'https://kaspi.kz/img/g/item/114/114/14.jpg',
    link: 'https://kaspi.kz/shop/p/lg-gc-q257csfs-serebristyi-106543789/',
    likes: 0
  },
  {
    id: 18,
    categoryId: 4,
    name: 'Xiaomi Mi Smart Air Fryer',
    price: 45000,
    description: 'Healthy cooking with less oil and smart control.',
    rating: 4.7,
    image: 'https://kaspi.kz/img/g/item/115/115/15.jpg',
    link: 'https://kaspi.kz/shop/p/xiaomi-maf02-belyi-102145678/',
    likes: 0
  },
  {
    id: 19,
    categoryId: 4,
    name: 'Coffee Machine DeLonghi Magnifica',
    price: 280000,
    description: 'Automatic espresso machine for the perfect cup.',
    rating: 4.9,
    image: 'https://kaspi.kz/img/g/item/116/116/16.jpg',
    link: 'https://kaspi.kz/shop/p/delonghi-ecam-22-110-b-chernyi-100234567/',
    likes: 0
  },
  {
    id: 20,
    categoryId: 4,
    name: 'Samsung Washing Machine',
    price: 210000,
    description: 'EcoBubble technology for efficient cleaning.',
    rating: 4.7,
    image: 'https://kaspi.kz/img/g/item/117/117/17.jpg',
    link: 'https://kaspi.kz/shop/p/samsung-ww60a4s00ce-lp-belyi-102345890/',
    likes: 0
  }
];