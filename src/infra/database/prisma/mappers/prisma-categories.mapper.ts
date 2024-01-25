import { Category as RawCategory } from '@prisma/client';
import { Category } from 'src/app/entities/category';

export class PrismaCategoryMapper {
  static toPrisma(category: Category) {
    return {
      id: category.id,
      description: category.description,
      points: category.points,
      money: category.money,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    };
  }

  static toDomain(rawCategory: RawCategory): Category {
    return new Category(
      {
        description: rawCategory.description,
        points: rawCategory.points,
        money: rawCategory.money,
        createdAt: rawCategory.createdAt,
        updatedAt: rawCategory.updatedAt,
      },
      rawCategory.id,
    );
  }
}
