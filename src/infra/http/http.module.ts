import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { HttpCompetitor } from './http.competitor';

@Module({
  imports: [DatabaseModule, HttpCompetitor],
  controllers: [],
  providers: [],
})
export class HttpModule {}
