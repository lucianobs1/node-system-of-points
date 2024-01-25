import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from '../repositories/categories-repository';
import { Category } from '../entities/category';

interface CreateCategoryRequest {
  description: string;
  money: number;
  points: number;
}

type CreateCategoryResponse = void;

@Injectable()
export class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute({
    description,
    money,
    points,
  }: CreateCategoryRequest): Promise<CreateCategoryResponse> {
    const category = new Category({
      description,
      money,
      points,
    });

    console.log(category);

    await this.categoriesRepository.create(category);
  }
}
