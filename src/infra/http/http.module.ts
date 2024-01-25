import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { HttpCompetitorModule } from './http.competitor.module';
import { HttpCategoryModule } from './http.category.module';
import { HttpRewardModule } from './http.reward.module';

@Module({
  imports: [
    DatabaseModule,
    HttpCompetitorModule,
    HttpCategoryModule,
    HttpRewardModule,
  ],
  controllers: [],
  providers: [],
})
export class HttpModule {}
