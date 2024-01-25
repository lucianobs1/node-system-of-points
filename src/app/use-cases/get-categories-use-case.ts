import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from '../repositories/categories-repository';
import { Category } from '../entities/category';

interface GetCategoriesResponse {
  categories: Category[];
}

@Injectable()
export class GetCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute(): Promise<GetCategoriesResponse> {
    const categories = await this.categoriesRepository.findMany();

    return { categories };
  }
}
