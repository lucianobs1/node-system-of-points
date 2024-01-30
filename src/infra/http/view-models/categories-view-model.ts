import { Category } from 'src/app/entities/category';

export class CategoryViewModel {
  static toHTTP(category: Category) {
    return {
      id: category.id,
      description: category.description,
      points: category.points,
      money: category.money,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    };
  }
}
