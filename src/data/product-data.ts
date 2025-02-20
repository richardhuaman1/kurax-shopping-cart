import type { Product } from '@/types';
import { ProductCategory } from '@/utils/enums';
import { PublicImages } from '@/utils/media-library';

export const ProductData: Product[] = [
  {
    name: 'iPhone X 128GB',
    description: 'Apple iPhone X with 5.8-inch Super Retina display and Face ID.',
    unitaryPrice: 499.99,
    createdAt: new Date().toISOString(),
    image: PublicImages.PRODUCTS.PRODUCT_1,
    category: ProductCategory.SMARTPHONES,
  },
  {
    name: 'PlayStation 5',
    description: 'Sony PS5 with ultra-fast SSD and ray tracing support.',
    unitaryPrice: 499.99,
    createdAt: new Date().toISOString(),
    image: PublicImages.PRODUCTS.PRODUCT_2,
    category: ProductCategory.GAMING_CONSOLES,
  },
  {
    name: 'Smart TV 55-inch 4K',
    description: '55-inch 4K UHD Smart TV with HDR and built-in streaming apps.',
    unitaryPrice: 699.99,
    createdAt: new Date().toISOString(),
    image: PublicImages.PRODUCTS.PRODUCT_3,
    category: ProductCategory.TELEVISIONS,
  },
  {
    name: 'iPad Air',
    description: 'Apple iPad Air with 10.9-inch Liquid Retina display and A14 Bionic chip.',
    unitaryPrice: 599.99,
    createdAt: new Date().toISOString(),
    image: PublicImages.PRODUCTS.PRODUCT_4,
    category: ProductCategory.TABLETS,
  },
  {
    name: 'Ear Pads (Wireless)',
    description: 'Noise-canceling wireless ear pads with Bluetooth connectivity.',
    unitaryPrice: 79.99,
    createdAt: new Date().toISOString(),
    image: PublicImages.PRODUCTS.PRODUCT_5,
    category: ProductCategory.AUDIO,
  },
  {
    name: 'Nintendo Switch OLED',
    description: 'Nintendo Switch OLED model with enhanced screen and improved speakers.',
    unitaryPrice: 349.99,
    createdAt: new Date().toISOString(),
    image: PublicImages.PRODUCTS.PRODUCT_6,
    category: ProductCategory.GAMING_CONSOLES,
  },
  {
    name: 'iPhone 11',
    description: 'Apple iPhone 11 with 6.1-inch Liquid Retina display and A13 Bionic chip.',
    unitaryPrice: 399.99,
    createdAt: new Date().toISOString(),
    image: PublicImages.PRODUCTS.PRODUCT_7,
    category: ProductCategory.SMARTPHONES,
  },
  {
    name: 'Mechanical Keyboard RGB',
    description: 'Mechanical gaming keyboard with customizable RGB lighting and tactile switches.',
    unitaryPrice: 129.99,
    createdAt: new Date().toISOString(),
    image: PublicImages.PRODUCTS.PRODUCT_8,
    category: ProductCategory.ACCESSORIES,
  },
  {
    name: 'MacBook Air M2',
    description:
      'Apple MacBook Air with M2 chip, 13.6-inch Retina display, and all-day battery life.',
    unitaryPrice: 1199.99,
    createdAt: new Date().toISOString(),
    image: PublicImages.PRODUCTS.PRODUCT_9,
    category: ProductCategory.LAPTOPS,
  },
  {
    name: 'Logitech G Pro Wireless Mouse',
    description:
      'Logitech G Pro wireless gaming mouse with HERO sensor and ultra-lightweight design.',
    unitaryPrice: 99.99,
    createdAt: new Date().toISOString(),
    image: PublicImages.PRODUCTS.PRODUCT_10,
    category: ProductCategory.ACCESSORIES,
  },
  {
    name: 'Figure Midoriya - My Hero Academia',
    description: 'Highly detailed Midoriya action figure from My Hero Academia.',
    unitaryPrice: 39.99,
    createdAt: new Date().toISOString(),
    image: PublicImages.PRODUCTS.PRODUCT_11,
    category: ProductCategory.COLLECTIBLES,
  },
  {
    name: 'Figure Ultraman Tiga',
    description: "Collector's edition Ultraman Tiga action figure with multiple accessories.",
    unitaryPrice: 49.99,
    createdAt: new Date().toISOString(),
    image: PublicImages.PRODUCTS.PRODUCT_12,
    category: ProductCategory.COLLECTIBLES,
  },
];
