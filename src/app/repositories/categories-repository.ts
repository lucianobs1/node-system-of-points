import { Category } from '../entities/category';

export abstract class CategoriesRepository {
  abstract create(Category: Category): Promise<void>;
  abstract findMany(): Promise<Category[]>;
}
