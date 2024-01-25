import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateCategoryUseCase } from 'src/app/use-cases/create-category-use-case';
import { CreateCategoryDTO } from '../dtos/create-category-dto';

@Controller('categories')
export class CategoriesController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  @Post()
  @HttpCode(200)
  async createCompetitor(@Body() body: CreateCategoryDTO) {
    try {
      const { description, points, money } = body;

      await this.createCategoryUseCase.execute({
        description,
        points,
        money,
      });
    } catch (error) {
      return error.message;
    }
  }
}
