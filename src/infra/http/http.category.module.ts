import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { HttpCompetitorModule } from './http.competitor.module';
import { CategoriesController } from './controllers/categories.controller';
import { CreateCategoryUseCase } from 'src/app/use-cases/create-category-use-case';

@Module({
  imports: [DatabaseModule, HttpCompetitorModule],
  controllers: [CategoriesController],
  providers: [CreateCategoryUseCase],
})
export class HttpCategoryModule {}
