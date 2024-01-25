import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { HttpCompetitorModule } from './http.competitor.module';
import { CategoriesController } from './controllers/categories.controller';
import { CreateCategoryUseCase } from 'src/app/use-cases/create-category-use-case';
import { GetCategoriesUseCase } from 'src/app/use-cases/get-categories-use-case';

@Module({
  imports: [DatabaseModule, HttpCompetitorModule],
  controllers: [CategoriesController],
  providers: [CreateCategoryUseCase, GetCategoriesUseCase],
})
export class HttpCategoryModule {}
