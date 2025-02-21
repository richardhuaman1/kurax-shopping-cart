import { API_DELAY_TIME } from '@/config';
import { ProductData } from '@/data/product-data';
import type { Product } from '@/types';

class ProductService {
  private static instance: ProductService;

  private readonly delay = API_DELAY_TIME;

  public static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  public async getProducts(): Promise<Product[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(ProductData), this.delay);
    });
  }
}

export const productService = ProductService.getInstance();
