import type { ProductCategory } from '@/utils/enums';

export type Product = {
  id: number;
  name: string;
  description: string;
  unitaryPrice: number;
  stock: number;
  image: string;
  category: ProductCategory;
  createdAt: string;
};

export type CartItem = Product & {
  quantity: number;
};

export type PaymentType = 'cash' | 'credit_card' | 'debit_card' | 'yape' | 'plin' | 'other';
