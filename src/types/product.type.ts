import { Category } from "./categories.type";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: Category;
}

export interface CreateProductRequest {
  title: string;
  price: number;
  description: string;
  images: string[];
  categoryId: number;
}

export interface UpdateProductRequest {
  id: number | undefined;
  title: string;
  price: number;
  description: string;
  images: string[];
  categoryId: number;
}
