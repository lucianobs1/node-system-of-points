import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { HttpCompetitorModule } from './http.competitor.module';

@Module({
  imports: [DatabaseModule, HttpCompetitorModule],
  controllers: [],
  providers: [],
})
export class HttpCategoryModule {}
