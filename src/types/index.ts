import type { ProductCategory } from '@/utils/enums';

export type Product = {
  id: number;
  name: string;
  description: string;
  unitaryPrice: number;
  image: string;
  category: ProductCategory;
  createdAt: string;
};
