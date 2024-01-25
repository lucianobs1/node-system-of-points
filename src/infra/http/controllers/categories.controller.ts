import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CreateCategoryUseCase } from 'src/app/use-cases/create-category-use-case';
import { CreateCategoryDTO } from '../dtos/create-category-dto';
import { GetCategoriesUseCase } from 'src/app/use-cases/get-categories-use-case';

@Controller('categories')
export class CategoriesController {
  constructor(
    private createCategoryUseCase: CreateCategoryUseCase,
    private getCategoriesUseCase: GetCategoriesUseCase,
  ) {}

  @Post()
  @HttpCode(201)
  async createCategory(@Body() body: CreateCategoryDTO) {
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

  @Get()
  @HttpCode(200)
  async getCategories() {
    try {
      const categories = await this.getCategoriesUseCase.execute();

      return categories;
    } catch (error) {
      return error.message;
    }
  }
}
