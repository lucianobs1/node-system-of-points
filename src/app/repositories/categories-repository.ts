import { Category } from '../entities/category';

export abstract class CategoriesRepository {
  abstract create(Category: Category): Promise<void>;
  abstract findById(id: string): Promise<Category | null>;
  abstract findMany(): Promise<Category[]>;
}
